---
title: Vue与node项目部署 JS-sdk配置
data: 2019-08-20
tag: javascript 服务端 数据库
---

1. Vue项目在本地开发需要运行 npm run dev ，部署上线使用 npm build 打包成dist文件直接部署在nginx上直接访问
	1. 需要更改 config文件夹中的index.js文件 更改build中的配置路径/=>./
	2. nginx 配置静态文件访问路径就可以
	3. 跨域问题 使用nginx代理
	```javascript
	upstream weixin {
		server 127.0.0.1:8081;
	}
	location / {
		proxy_set_header X-Real-IP $remote_addr;
    	proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    	proxy_set_header Host  $http_host;
    	proxy_set_header X-Nginx-Proxy true;
    	proxy_set_header Connection "";
    	proxy_pass http://weixin;  设置代理接口解决跨域
		root /home/webapp/;
		index index.html;
	}
	```
	4.nginx负载均衡就是配置多个服务器ip，分发给不同ip服务器，达到负载均衡效果

2. 微信JS-sdk配置
  1. 验证token  搭建一个服务端，用于在微信公众号平台填写url后，接受微信官方发送的一个get请求，获得请求参数后，使用sha1算法验证后，与结果比较，相同后，res.send(nonce)参数配置url成功
  2. 配置IP白名单，获得appid与secret 发送get请求，携带这两个参数到    https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx5619bb7ab5609e80&secret=d93c13ed03aa51fd0cf43d814b943b87，会受到一个状态码和一个access_token.在获取token后在请求接口https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=%27%20+%20access_token%20+%20%27&type=jsapi    接受返回的getticket票据
  3. 获取票据后，使用填写的字符串 时间戳new Data().getTime()/1000 然后取整
  4. 拼接字符串票据将字符串拼接起来 'jsapi_ticket=' + jsapi_ticket + '&noncestr=' + noncestr + '&timestamp=' + timestamp + '&url=' + url
  5. 得到一个str 使用str在使用sha1()算法加密将加密后的数据，res发送给前端页面
  6. 引入后前端页面引入的js文件会检测sign签名是否相同，相同则配置成功，可以使用微信开发者工具验证