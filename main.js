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
Function.prototype.myCall = function(context = window, ...args) {
    if (this === Function.prototype) {
        return undefined
    }
    context = context || window
    const fn = Symbol()
    context[fn] = this
    const result = context[fn](...args)
    delete context[fn]
    return result
}

var a = {
    name: 'haha',
    age: 18,
}
var name = 'lili'

function get() {
    console.log(this.name)
}
get.myCall()

//实现apply 
Function.prototype.myApply = function(context = window, args) {
        if (this === Function.prototype) {
            return undefined
        }
        const fn = Symbol()
        context[fn] = this
        if (Array.isArray(arg)) {
            let result = context[fn](...arg)
        } else {
            let result = context[fn]()
        }
        delete context[fn]
        return fn
    }
    //bing实现
Function.prototype.Mybind = function(context = window, ...arg1) {
        if (this === Function.prototype) {
            return undefined
        }
        const _this = this
        return function F(...arg2) {
            if (this instanceceof F) {
                return new _this(...arg1, ...arg2)
            }
            return _this.apply(context, arg1.concat(arg2))
        }
    }
    //防抖，函数在事件触发后的一段时间才执行
function debounce(event, time, flag) {
    let timer = null
    return function(...args) {
        cleatTimeout(timer)
            //flag添加判断，如果开始时，null为空，flag为true则触发一次，之后的定时触发
        if (falg && !timer) {
            evetn.apply(this, args)
        }
        timer = setTimeout(() => {
            evetn.apply(this, args)
        }, time);
    }
}
//节流，在规定时间内只触发一次
//第一次不触发,最后一次触发
function throttle(event, time) {
    let pre = 0
    return function(...args) {
        if (Date.now() - pre > time) {
            pre = Data.now()
            event.apply(this, args)
        }
    }
}
//第一次触发，最后一次不触发
function throttle(event, time) {
    let time = null
    return function(...args) {
        if (!time) {
            timer = setTimeout(() => {
                timer = null
                evetn.apply(this, args)
            }, time)
        }
    }
}