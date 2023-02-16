const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/friends') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.end(JSON.stringify({
            friends: [
                {
                    id: 1,
                    name: 'Best Friend',
                },
                {
                    id: 2,
                    name: "Next Friend",
                }
            ]
        }
        ));
    } else if (req.url === '/messages') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>Hello!</li>');
        res.write('<li>What are you doing?</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else {
        res.statusCode = 404;
    }
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});