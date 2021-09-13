// Load HTTP module

const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;
const square = require('./square'); // Here we require() the name of the file without the (optional) .js file extension
console.log('The area of a square with a width of 4 is ' + square.area(4));

module.exports = {
    area: function(width) {
        return width * width;
    },

    perimeter: function(width) {
        return 4 * width;
    }
};
// Create HTTP server
const server = http.createServer((req, res) => {

    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body "Hello World"
    res.end('Hello World\n');
});

// Prints a log once the server starts listening
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})



