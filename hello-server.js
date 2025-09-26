const { response } = require('express');
const http = require('http');
const port = 3001;
const server = http.createServer();

server.on('request', (req, res) => {
    console.log(`request received ${req.url}`);
    res.end('hello world');
});

server.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(
        `server is running on http://localhost:${port}`
    );
});