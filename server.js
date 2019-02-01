var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    console.log("App on port ", process.env.PORT || 8080)
    fs.readFile('index.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(process.env.PORT || 8080);