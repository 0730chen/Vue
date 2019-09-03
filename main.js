// var s = require('./es6.js')
// console.log(s.m())

// function Animal(color, name) {
//     this.color = color;
//     this.name = name

// }
//继承实现
// function(children, parsent) {
//     function F() {};
//     F.prototypes = parsent.prototypes
//     children.prototypes = new F();
//     children.prototypes.constructor = children
//     children.uber = parsent.prototypes
// }
//使用node连接mongodb数据库，操作数据

const MongoClient = require('mongodb').MongoClient
const url = "mongodb://localhost:27017"
const dbName = 'db'

MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
    if (err) {
        console.log(err)
    }
    console.log("连接成功")
    const db = client.db(dbName)
    const col = db.collection('db')
    col.insert({ "1": "这是第一个" })
    data = { name1: '大强苏', age: "12" }
    col.insert(data, function(err, callback) {
        if (err) {
            console.log(err)
        } else {
            console.log("成功")
        }

    })
    col.find().toArray((err, res) => {
        console.log(res)

    })
})
var m = require('./es6')
console.log(m)