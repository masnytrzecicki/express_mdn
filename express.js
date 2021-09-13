const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Hello World!')
});


app.all('/secret', function(req, res, next) {
    console.log('Accessing the balls.....');
    next(); // pass control to the next handler
});


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
const wiki = require('./wiki.js');
// ...
app.use('/wiki', wiki);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});

