const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello from Node.js app!');
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

//test
//test
//test
