// exports.m = function() {
//         console.log('es6文件')
//     }
//     // var util = require('util');

// // function Person() {
// //     this.name = 'byvoid';
// //     this.toString = function() {
// //         return this.name;
// //     };
// // }
// // var obj = new Person();
// // console.log(util.inspect(obj));
// // console.log(util.inspect(obj, true));
// var prom = function() {
//     return new Promise((resolve, reject) => {
//         resolve('成功了')
//     })
// }
// prom.then(console.log, console.error);
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const getUrl = function(url) {
    return new Promise((resolve, reject) => {
        const xht = new XMLHttpRequest()
        xht.open('get', url)
        xht.onload = function() {
            resolve(xht.response)
        }
        xht.onerror = function() {
            reject(xht.responseStatus)
        }
        xht.send()
    })
}
getUrl('123').then(function(data) {
    console.log()
})