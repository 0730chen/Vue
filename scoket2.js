//导入需要使用的包
var express = require('express');
var utility = require('utility');
var superagent = require('superagent')
var cheerio = require('cheerio')
var cookieParser = require('cookie-parser')
var cookieSession = require('cookie-session')
    //小量的并发请求
var eventproxy = require('eventproxy')
var url = require('url')
    //大量并发请求
var async = require('async')
var cnodeUrl = 'https://cnodejs.org/'
var app = express()
app.use(cookieParser())
app.use(cookieSession({
    secret: 'this key',
    name: 'Test',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.get('/sign', function(req, res) {
    console.log(req.url)
        // var user = {
        //     name: 'david',
        //     age: '22'
        // }
    var user = url.parse(req.url, true)

    req.session.user = user.query
    console.log(req.session.user)
    res.send(req.session.user)
})
app.get('/', function(req, res) {
        console.log(req.session.user)
        if (req.session.user == null) {
            res.send('还未登陆')
        } else {
            res.send('欢迎' + req.session.user.name + '登陆')
        }

        //使用cookie方法
        // res.cookie('suer', 'zhangsan') //设置cookie并发送
        // console.log(req.cookies)
        // res.send('end')
        // console.log(req.session['count'])
        // req.session.username = '张三'
        // req.session.sign = false
        // console.log(req.session['user'])
        // // console.log('开始的session' + req.session.sign)
        // if (req.session['count'] == null) {
        //     // console.log(req.session.username)
        //     // var user = req.seesion.user
        //     // var name = user.name

        //     req.session['count'] = 1
        // req.session.sign = true;

        // } else {
        //     req.session['count']++
        //         // req.session.sign = true;
        //         // req.session.name = '我是谁'
        //         res.send('没有登陆')
        //         // console.log(req.session)
        // }
        // console.log(req.session['count'])
        // res.send('我访问了')
    })
    //将Url中的连接加密并显示出来
    // var q = req.query.q;
    // var md5value = utility.md5(q)
    // res.send(md5value)
    //爬虫 使用supoeragent库与cherrio处理页面标签
    // superagent.get('https://cnodejs.org/').end(function(err, sres) {
    //         if (err) {
    //             return next(err)
    //         }
    //         var $ = cheerio.load(sres.text)
    //         var items = [];
    //         $('#topic_list .topic_title').each(function(idx, element) {
    //             var $element = $(element)
    //             items.push({
    //                 title: $element.attr('title'),
    //                 href: $element.attr('href')
    //             })
    //         })
    //         res.send(items)
    //     })
    //使用eventproxy控制并发访问连接
    // superagent.get(cnodeUrl).end(function(err, res) {
    //     if (err) {
    //         return console.error(err)
    //     }
    //     var topicUrls = []
    //     var $ = cheerio.load(res.text)
    //     $('#topic_list .topic_title').each(function(idx, element) {
    //             var $element = $(element);
    //             // $element.attr('href') 本来的样子是 /topic/542acd7d5d28233425538b04
    //             // 我们用 url.resolve 来自动推断出完整 url，变成
    //             // https://cnodejs.org/topic/542acd7d5d28233425538b04 的形式
    //             // 具体请看 http://nodejs.org/api/url.html#url_url_resolve_from_to 的示例
    //             console.log($element)
    //             var href = url.resolve(cnodeUrl, $element.attr('href'));
    //             console.log($element.attr('title'))
    //             topicUrls.push(href);


// var href = $element.attr('href')
// console.log(href)
//     // topicUrl.push(href)
// })
//使用eventproxy并发处理多个爬虫链接，并返回数据
// var eq = new eventproxy();
// eq.after('topic_html', topicUrls.length, function(topics) {
//     topics = topics.map(function(topicPair) {
//         var topicUrl = topicPair[0];
//         var topicHtml = topicPair[1];
//         var $ = cheerio.load(topicHtml)
//         return ({
//             title: $('.topic_full_title').text().trim(),
//             href: topicUrl,
//             comment1: $('.reply_content').eq(0).text().trim()
//         });
//     })
//     console.log('final:')
//     console.log(topics)
// })
// topicUrls.forEach(function(topicUrl) {
//     superagent.get(topicUrl).end(function(err, res) {
//         console.log('fetch' + topicUrl + 'successful')
//         eq.emit('topic_html', [topicUrl, res.text])
//     })
// })
// var Count = 0;
// var urls = [];
// for (var i = 0; i < 30; i++) {
//     urls.push('http:sssss' + 'i')
// }
// var fetchUrl = function(url, callback) {
//     var delay = parseInt((Math.random() * 1000 % 200), 10)
//     Count++;
//     console.log('现在并发数是:', Count, '正在抓取的是', url, '耗时' + delay + '毫秒')
//     setTimeout(function() {
//         Count--;
//         callback(null, url + 'html content', delay)
//     })
// }

// async.mapLimit(urls, 5, function(url, callback) {
//     fetchUrl(url, callback);
// }, function(err, result) {
//     console.log('final:');
//     console.log(result);
// });


// app.get('/sign', function(req, res, next) {
//     var user = {
//         name: 'david',
//         age: '22'
//     }
//     req.session.user = user
//     res.send('登陆服务器')
// })
app.listen(3000, function() {
    console.log('Server running at http://127.0.0.1:3000')
});