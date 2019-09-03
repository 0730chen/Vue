var express = require('express');
var app = express();
var crypto = require('crypto')
const sha1 = require('sha1')
const request = require('request')
const appid = 'wx5619bb7ab5609e80'
const secret = 'd93c13ed03aa51fd0cf43d814b943b87'
const grant_type = 'clinet_credential'

app.get('/', function(req, res) {
    console.log(req.query)
    const signature = req.query.signature
    const echostr = req.query.echostr
    const timestamp = req.query.timestamp
    const nonce = req.query.nonce
    const token = 'chen'
    var list = [token, timestamp, nonce].sort()
    var str = list.join('')
    let result = sha1(str)
    console.log(list)
    console.log(str)
    console.log(result)
        // var sign = crypto.createHash('shal').update(list).Digest('hex')
    if (signature == result) {
        res.end(echostr)
    } else {
        res.end('false')
        console.log('失败')
    }


})
app.post('/jsSdk', (req, res) => {
    request('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx5619bb7ab5609e80&secret=d93c13ed03aa51fd0cf43d814b943b87', (err, response, body) => {
        console.log('请求' + response.data)
        console.log('报错' + err)
        let access_token = JSON.parse(body).access_token
        console.log('获取token' + access_token)
        request('https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=' + access_token + '&type=jsapi', (err, response, body) => {
            let jsapi_ticket = JSON.parse(body).ticket
            console.log('Js票据' + jsapi_ticket)
            let noncestr = 'chen'
            let timestamp = parseInt(new Date().getTime() / 1000)
            let url = 'http://chentian.ltd/H5/index.html'

            let str = 'jsapi_ticket=' + jsapi_ticket + '&noncestr=' + noncestr + '&timestamp=' + timestamp + '&url=' + url
            console.log('字符串' + noncestr)
            console.log('时间标签' + timestamp)
            console.log('网址' + url)
            console.log('拼接字符串' + str)
            let signature = sha1(str)
            console.log('加密后的' + signature)
                // response.setHeader("Access-Control-Allow-Origin", "*")
                // response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE")
                // response.setHeader("Access-Control-Allow-Headers", "x-requested-with,content-type")
            res.send({
                appId: appid,
                timestamp: timestamp,
                noncestr: noncestr,
                signature: signature
            })
        })
    })
})

var server = app.listen(8081, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})