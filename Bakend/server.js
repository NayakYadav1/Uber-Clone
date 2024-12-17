const http = require('http');
const app = require('./app');
const { default: mongoose, mongo } = require('mongoose');
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, async() => {
    console.log(`Server successfully started on port ${port}`); 
});