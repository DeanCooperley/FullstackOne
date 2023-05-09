const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Le serveur te répond !');
});

server.listen(process.env.PORT || 3000);