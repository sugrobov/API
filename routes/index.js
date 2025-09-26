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

    // GET /users/:id - 
    app.get('/users/:id', (req, res) => {
        try {
            const userId = parseInGet user by IDt(req.params.id);

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
}

module.exports = router;