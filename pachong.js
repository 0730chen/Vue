var cheerio = require('cheerio')
var request = require('sync-request')
var fs = require('fs')

url = "https://movie.douban.com/"
var html = ''
html = request('GET', url).getBody().toString()

// console.log(html)

//处理抓取到的网页信息
function Msg(html) {

    var $ = cheerio.load(html)
        // console.log($)
    var movieName = $('.review-content')
    console.log(movieName)


}
Msg(html)