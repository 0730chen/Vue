var http = require('http')
var path = require('path')
var fs = require('fs')
var base = 'router.html'
http.createServer(function(req, res) {
    pathname = base + req.url;
    console.log(pathname)
    fs.exists(pathname, function(exists) {
        if (exists) {
            res.setHeader('Content-Type', 'text/html')
            res.statusCode = 200
            var file = fs.createReadStream(pathname)
            file.on('open', function() {
                file.pipe(res)
            });
            file.on('error', function(err) {
                console.log(err)
            })
        } else {
            res.writeHead(404)
            res.write('404')
            res.end()
        }
    })
    console.log(pathname)
}).listen(3000)
console.log('127.0.0.1:3000')