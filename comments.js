// Create web server
// 1. Create a web server
// 2. Read the comments.html file
// 3. Send the comments.html file to the client
// 4. Listen to the port 8080
// 5. Log the listening message

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    fs.readFile('comments.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);

console.log()