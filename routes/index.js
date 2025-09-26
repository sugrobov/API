const users = [{
    id: 1,
    name: "Tango",
    email: "tango@world.com",
},
{
    id: 2,
    name: "Milonga",
    email: "milonga@word.com",
},
];



const router = app => {

    /**
     * GET / - Home page
     */
    app.get('/', (req, res) => {
        res.send('Node.js and Express REST API')
    });

    /**
     * GET /users - Get all users
     */
    app.get('/users', (req, res) => {
        res.send(users);
    });

    // GET /users/:id - Get user by ID
    app.get('/users/:id', (req, res) => {
        try {
            const userId = parseInt(req.params.id);

            // валидность ID 
            if (isNaN(userId)) {
                return res.status(400).json({
                    error: 'Invalid user ID',
                    message: 'User ID must be a number'
                });
            }

            // Ищем пользователя по ID
            const user = users.find(u => u.id === userId);

            if (!user) {
                return res.status(404).json({
                    error: 'User not found',
                    message: `User with ID ${userId} does not exist`
                });
            }

            // Возвращаем найденного пользователя
            res.status(200).json({
                success: true,
                data: user
            });

        } catch (error) {
            console.error('Error getting user:', error);
            res.status(500).json({
                error: 'Internal server error',
                message: 'Could not retrieve user data'
            });
        }
    });

    /**
     * POST /users - Create a new user
     */
    app.post('/users', (req, res) => {
        try {
            const { name, email } = req.body;
            if (!name || !email) {
                return res.status(400).json({
                    error: 'Invalid request',
                    message: 'Name and email are required'
                });
            }

            const newUser = {
                id: users.length + 1,
                name: name.trim(),
                email: email.trim().toLowerCase(),
            }

            users.push(newUser);
            res.status(201).json({
                success: true,
                message: 'User created successfully',
                data: newUser,
            });
        } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).json({
                error: 'Internal server error',
                message: 'Could not create user',
            });
        }

    });
    /** 
     * DELETE /users/:id - Delete user
     */
    app.delete('/users/:id', (req, res) => {
        try {
            const userId = parseInt(req.params.id);
            if (isNaN(userId)) {
                res.status(400).json({
                    error: 'Invalid user ID',
                    message: 'User ID must be a number'
                });
            }
            const userIndex = users.findIndex(u => u.id === userId);
            if (userIndex === -1) {
                return res.status(404).json({
                    error: 'User not found',
                    message: `User with ID ${userId} does not exist`
                });
            }
            const deletedUser = users.splice(userIndex, 1)[0];
            res.status(200).json({
                success: true,
                message: `User with ID ${userId} deleted successfully`,
                data: deletedUser
            });
        } catch (error) {
            console.error('Error deleting user:', error);
            res.status(500).json({
                error: 'Internal server error',
                message: 'Could not delete user'
            });
        }

    });

    /**
     * PUT /users/:id - Update user
     */
    app.put('/users/:id', (req, res) => {
        try {
            const userId = parseInt(req.params.id);
            const { name, email } = req.body;

            if (isNaN(userId)) {
                return res.status(400).json({
                    error: 'Invalid user ID',
                    message: 'User ID must be a number'
                });
            }
            // Проверяем, существует ли пользователь с таким ID
            const userIndex = users.findIndex(u => u.id === userId);
            if (userIndex === -1) {
                res.status(404).json({
                    error: 'User not found',
                    message: `User with ID ${userId} does not exist`
                });
            } 
            if (!name && !email) { // Проверяем, что все поля заполнены
                res.status(400).json({
                    error: 'Invalid request',
                    message: 'Name and email are required'
                });
            }
            // уникальность email ?
            if (email && email !== users[userIndex].email) {
                const emailExist = users.some(u => u.email === email && u.id !== userId);
                if (emailExist) {
                    return res.status(409).json({
                        error: 'Invalid request',
                        message: 'Email already exists'
                    });
                }
            }
            if (name) {
                users[userIndex].name = name.trim();
            }
            if (email) {
                users[userIndex].email = email.trim().toLowerCase();
            }
            res.status(200).json({
                success: true,
                message: 'User updated successfully',
                data: users[userIndex]
            });
            } catch (error) {
                console.error('Error updating user:', error);
                res.status(500).json({
                    error: 'Internal server error',
                    message: 'Could not update user',
                });
            }

    });
}

module.exports = router;