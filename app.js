var http = require('http');
const fs = require('fs');

var server = http.createServer(function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    var html = fs.readFileSync('./app/html/DashBoard.html');
    res.write(html);    
    res.end();
});
server.listen(8080);