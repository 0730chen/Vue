const http = require('http')
const server = http.createServer()
    //匹配callback参数，解析,请求网址的参数
const urlModule = require('url')

server.on('request', function(req, res) {
    // const url = req.url
    const { pathname: url, query } = urlModule.parse(req.url, true) //true代表解析成对象

    if (url === '/getscript') {
        // var scriptStr = 'show()'
        // console.log(scriptStr)
        // res.write('show()')
        // res.end(scriptStr)
        //${}是模板字符串
        data = {
            name: 'sss',
            age: '18',
            methods: 'mmm',
        }
        console.log(data)
            //传输对象去客户端
        var scriptStr = `${query.callback}(${JSON.stringify(data)})`

        res.end(scriptStr)
        console.log('成功调用jsonp')

    } else {
        res.write('失败')
            // res.end(400)

        console.log(200)
    }
})

server.listen(3000, function() {
    console.log('server listen at http://127.0.0.1:3000')
})