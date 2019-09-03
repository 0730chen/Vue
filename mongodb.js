 exports.GetTest = function(todoList, data, state) {
     console.log('外部的数据' + todoList)
     const MongoClient = require('mongodb').MongoClient
     const url = "mongodb://localhost:27017"
     const dbName = 'db'
     MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
         console.log('这个外面的mongodb服务器')
         if (err) {
             console.log(err)
         }
         console.log("连接成功")
         const db = client.db(dbName)
         const col = db.collection('db')
             // col.insert(todoList)
         console.log('这是外面的todolist数据')
         console.log('这是外部的mongodb服务器')

         console.log('这是外部函数中的数据' + data)
         console.log('下面是要插入的数据')
         console.log(data)
         if (state === 1) {
             col.insertOne(data, function(err, callback) {
                 if (err) {
                     console.log(err)
                 } else {
                     console.log("成功")
                 }

             })
             col.find().toArray((err, res) => {
                 console.log(res)

             })
         } else {
             col.remove(data, function(err, callback) {
                 if (err) {
                     console.log(err)
                 } else {
                     console.log("成功")
                 }

             })
             col.find().toArray((err, res) => {
                 console.log(res)

             })
         }
     })
 }