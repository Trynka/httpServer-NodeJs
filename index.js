const http = require('http');

const PORT = 3000;

const friends = [
                {
                    id: 0,
                    name: 'Best Friend',
                },
                {
                    id: 1,
                    name: "Next Friend",
                },
                {
                    id: 2,
                    name: "Other Friend",
                }
            ]

const server = http.createServer((req, res) => {
    const items = req.url.split('/');
    if (items[1] === 'friends') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        if(items.length === 3) {
            const index = Number(items[2]);
            res.end(JSON.stringify(friends[index]));
        } else {
            res.end(JSON.stringify(friends));
        }
    } else if (items[1] === 'messages') {
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