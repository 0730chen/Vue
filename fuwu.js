//通过两个按钮，实现将页面输入的数据加入数据库中，输入删除的数据从数据库中删除
var GetTest = require('./mongodb')
var http = require('http')
var querystring = require('querystring')
var util = require('util')
var m = require('./es6')
    // console.log(m.m())
    // console.log(GetTest.GetTest())


const MongoClient = require('mongodb').MongoClient
const url = "mongodb://localhost:27017"
const dbName = 'db'

http.createServer(function(req, res) {
    console.log(req.method)
        //处理连接数据库并且将数据插入数据库的请求
    if (req.url == "/add") {
        console.log(req.url)
        console.log('使用post方法')
            // var todoList = ''
        var todoList = ''

        req.on('data', function(chunk) {
            console.log('这个是chunk' + chunk)
            todoList += chunk;
            console.log('这个是插入的数据' + todoList)
            var data = {
                value: todoList
            }
            GetTest.GetTest(todoList, data, 1)
                // MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
                //     console.log(todoList)
                //     if (err) {
                //         console.log(err)
                //     }
                //     console.log("连接成功")
                //     const db = client.db(dbName)
                //     const col = db.collection('db')
                //         // col.insert(todoList)
                //     console.log('这是外面的todolist数据')
                //     console.log(todoList)
                //     data = {
                //         value: todoList
                //     }
                //     console.log('下面是要插入的数据')
                //     console.log(data)
                //     col.insert(data, function(err, callback) {
                //         if (err) {
                //             console.log(err)
                //         } else {
                //             console.log("成功")
                //         }

            //     })
            //     col.find().toArray((err, res) => {
            //         console.log(res)

            //     })
            // })

            console.log(todoList)
        })
        req.on('end', function() {
            console.log('end里面的输出')
            todoList = querystring.parse(todoList)
            res.end(util.inspect(todoList))
        })
    } else {
        console.log("失败")
    }
    //处理delete的ajax请求
    if (req.url == "/delete") {
        console.log(req.url)
        console.log('删除数据')
        var todoList = ''
        req.on('data', function(chunk) {

            todoList += chunk;
            console.log(todoList)
            var data = {
                value: todoList
            }
            GetTest.GetTest(todoList, data, 2)

            console.log(todoList)

            // MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
            //     if (err) {
            //         console.log(err)
            //     }
            //     console.log("连接成功")
            //     const db = client.db(dbName)
            //     const col = db.collection('db')
            //         // col.insert(todoList)
            //     data = {
            //         value: todoList
            //     }
            //     console.log(data)
            //     col.remove(data, function(err, callback) {
            //         if (err) {
            //             console.log(err)
            //         } else {
            //             console.log("成功")
            //         }

            //     })
            //     col.find().toArray((err, res) => {
            //         console.log(res)

            //     })
            // })


        })
    }
    data = {
        url: 'www.cctc.com',
        content: '文学',
        action: '六学',
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,xtoken,accept,origin,content-type"); //设置后可以使用post请求数据
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    var Data = JSON.stringify(data)
    res.end('我是服务器')
}).listen(3000);
console.log('Server running at http://127.0.0.1:3000')