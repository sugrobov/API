# API

# Express API Project

A simple REST API built with Node.js and Express framework.

## Project Structure

```
express-api/
│
├── src/                   # Source code directory
│   ├── routes/           # API routes
│   ├── controllers/      # Business logic
│   └── models/           # Data models
├── app.js                # Main application file
├── index.js              # Server entry point
├── package.json          # Project dependencies
└── README.md             # Project documentation
```


## Features

- RESTful API endpoints
- JSON request/response handling
- Body parsing middleware
- Modular route configuration

## Installation

1. Clone the repository:

git clone <repository-url>
cd express-api

2. Install dependencies:

npm install

Dependencies
- express: ^5.1.0 - Web framework for Node.js
- body-parser: ^2.2.0 - Middleware for parsing request bodies
- mysql: ^2.18.1 - MySQL database driver
- request: ^2.88.2 - Simplified HTTP client

Available Scripts
- npm start - Start the server

## API Endpoints

### Express API Server (Port 3002)

| Method   | Endpoint      | Description |
|----------|---------------|-------------|
| `GET`    | `/`           | Returns a welcome message |
| `GET`    | `/users`      | Returns a list of users |
| `GET`    | `/users/:id`  | Get user by ID |
| `POST`   | `/users`      | Create a new user |
| `PUT`    | `/users/:id`  | Update user |
| `DELETE` | `/users/:id`  | Delete user |


Basic HTTP Server

The project also includes a basic HTTP server example in hello-server.js that runs on port 3001:

node hello-server.js


