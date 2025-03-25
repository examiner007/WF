// modules.js
exports.getCurrentDateTime = function() {
    const now = new Date();
    return now.toLocaleString();
};

// server.js
const http = require('http');
const myModule = require('./modules');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>Welcome to My Node.js Server!</h1>`);
    res.write(`<p>Current Date and Time: ${myModule.getCurrentDateTime()}</p>`);
    res.end();
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
