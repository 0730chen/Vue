---
title: 后台数据与前端进行数据交互
data: 2019-05-27
tag: 后端 promise
---
#### 后端请求与promise理解

- 对于数据库查询函数，将这个数据库方式封装成一个函数，要在外部调用这个函数并且拿到数据库操作的结果（数据库中的数据）
- 1.可以使用回调函数 callback，在外部获取想要的结果
- 2.可以使用异步 async 操作方法
- 3.在外部赋值一个全局变量，然后将 callback 中的值赋值给这个变量，函数外部就可以使用
- 4.模板字符串的使用使用 `${}`可以在其中添加变量例如`${msg}`
- 5.node+express 实现添加评论给后台数据，后台数据库返回数据给前台页面
  `$.ajax({methods:'',url:'',type:'',data:{},dateType:'',success:function(){}发送成功后调用方法，可以接受后台传输回来的数据})`前端页面使用 ajax 请求 post 方式发送给后台处理，并储存在数据库中

---

- 6.后台要接受到前端传输过来的数据，并且将数据储存在数据库中，在储存完成过后，要发送一个储存数据的信息表示储存成功了. 对于 post 请求，使用`使用router.post('/',function(req,res){ })`post 请求有两个状态一个是`req.on('data',function(chunk){ data += chunk})`用来接收从前台传输过来的数据，并且这个数据是二进制数据。不容易阅读,二是`req.on('end',function(){})`主要是处理二进制数据使用`data = querystring.parse(data)`将数据解析成对象，随后将 data 中的文本传入数据库操作函数中，将数据插入数据库中
- 7.对于 get 请求，使用`router.get('/',function(req.res){})`get 请求的数据都会附着在 url 中传输给后台，在 get 函数中对 url 进行解析 `var user = url.parse(req.url, true)` 将 url 解析成对象，从 url 对象中获取到想要的数值。user 或者 path
- 8.get 请求后也可以获取数据库中的数据，并将数据发送给前端页面，使用`在获取数据库函数中加入callback函数，在访问成功数据库中的函数后，调用callback函数。function(err,data){if(err){console.log(err)}else{res.send(data)}}`
- 9.promise ES6 中的 promise 对象。Promise 是一个容器里面保存结束的事件才会操作的结果，主要是可以进行异步操作
  Promise 对象有 3 中状态，pending(进行中),fulfilled(成功了)，rejected(失败了)，只有异步操作的结果可以决定当前是哪一种状态，其他操作都无法。Promise 是一个构造函数，接受两个参数 function(reslove,reject),resolve 代表成功状态，reject 代表失败状态。`const promise = new Promsie(function(resolve,reject){if('异步成功'){resolve}else{reject(error)}})`Promise 实例生成后，可以用 then 方法分别指定 resolve 和 reject 的状态的回调函数，then 可以接受两个函数作为回调函数，分别指定 resolve 的与 reject 的回调函数
