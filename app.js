const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const port = 3002;
const app = express();

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// app.get('/', (request, response) => {
//     console.log(`URL: ${request.url}`);
//     response.send('Hello, Server!');
// });

routes(app);

// Start the server 
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port ${server.address().port}`);
});


// response.send({
//     message: 'Hello, World!',
// });