var cheerio = require('cheerio')
var request = require('sync-request')
var fs = require('fs')

url = "https://movie.douban.com/chart"
var html = ''
html = request('GET', url).getBody().toString()

// console.log(html)

//处理抓取到的网页信息
function Msg(html) {

    var $ = cheerio.load(html)
        // console.log($)
    var movieName = $('.nbg')
    for (let i = 0; i < movieName.length; i++) {
        console.log(i)
        console.log(movieName[i]['attribs']) //打印出数据是一个JSON对象，取出对象方法，将里面的值取出

    }
    // console.log(movieName)


}
Msg(html)
const socket = new WebSocket("ws://localhost:8080")
socket.addEventListener('open', function(event) {
    socket.send('hello')
    console.log(event)
})
socket.addEventListener('message', function(event) {
    console.log(event)
    console.log('Message', event.data)
})