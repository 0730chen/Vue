const https = require('https');

https.get('https://game.gtimg.cn/images/yxzj/m/m201706/js/heroAvatar.json', (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);
    // console.log('body', res.body)

    res.on('data', (d) => {
        console.log(typeof(d))
        let data = JSON.stringify(d)
        console.log(data)
            // process.stdout.write(d);
    });

}).on('error', (e) => {
    console.error(e);
});