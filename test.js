// // var m = require('./es6')
// // console.log(m.m())
// let objs = {}
// let songs = '稻香'
// objs.singers = '周杰伦'
// Object.defineProperty(objs, 'music', {
//         value: '七里香',

//         configurable: true,
//         writable: true,
//         // song: '七里香',
//         // configurable: true,
//         // //writable: true,
//         // enumerable: true,
//         // get() {
//         //     return song
//         // },
//         // set(val) {
//         //     song = val
//         // }
//     })
//     // console.log(objs.music)
//     // delete objs.music
// objs.music = '哈哈'
// console.log(objs) 数据劫持，数据代理，数据编译，发布订阅
let corp = {}
corp.list = {}
corp.on = function(key, fn) {
    if (!this.list[key]) {
        this.list[key] = []
    }
    this.list[key].push(fn)
}
corp.emit = function() {
        let key = [].shift.call(arguments),
            fns = this.list[key]
        if (!fns || fns.length === 0) {
            return false;
        }
        //遍历
        fns.forEach(element => {
            element.apply(this, arguments)

        });
        // this.list.forEach(cb => {
        //     cb.apply(this, arguments)

        // });
    }
    //测试
corp.on('join', function(position, salary) {
    console.log('职位' + position)
    console.log('薪资' + salary)
})
corp.on('other', function(skill, hobby) {
    console.log('你的技能' + skill)
    console.log('爱好' + hobby)
})

corp.emit('join', '前端', 10000)
    // corp.emit('other', '端茶', '足球')

let event = {
    list: {},
    on(key, fn) {
        if (!this.list[key]) {
            this.list[key] = []
        }
        this.list[key].push(fn)
    },
    emit() {
        let key = [].shift.call(arguments)
        fns = this.list[key];
        if (!fns || fns.length === 0) {
            return false
        }
        fns.forEach(element => {
            element.apply(this, arguments)

        });

    },
    remove(key, fn) {
        //取消订阅的方法
        let fns = this.list[key]
        if (!fns) return false;
        if (!fn) {
            fns && (fns.length = 0);
        } else {
            fns.forEach((element, i) => {
                if (element === fn) {
                    fns.splice(i, 1)
                }
            });
        }
    }
}

function cat() {
    console.log('一起喵喵')
}

function dog() {
    console.log('一起汪汪汪')
}
event.on('pet', data => {
    console.log('接受数据')
    console.log(data)
})
event.on('pet', cat)
event.on('pet', dog)
event.remove('pet', dog)
event.emit('pet', ['哈哈', '波斯猫'])