const users = [{
        id: 1,
        name: "Tango",
        email: "tango@world.com",
    },
    {
        id: 2,
        name: "Milonga",
        email: "gilfoyle@piedpiper.com",
    },
];

const router = app => {
    app.get('/', (req, res) => {
        res.send('Node.js and Express REST API')
    });

    app.get('/users', (req, res) => {
    res.send(users);
});
}

module.exports = router;