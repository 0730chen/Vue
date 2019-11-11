##### Js 函数详解

1. 引用时机
   函数的引用时机决定了函数的值，引用时机不同，值也就不同
   直接调用 test1()输出的 a 的值是 1，
   ```javascript
   var a = 1;
   function test1() {
     console.log(a);
   }
   test1(); //1
   var a = 2;
   test1(); //2
   ```
2. 函数作用域
   函数的作用域是定义函数是所处的两个花括号之间
   全局变量：1.在顶级作用域声明的变量就是全局变量，例如 a 就是全局变量 2. 在 window 上的变量是全局变量
   局部变量: 在函数作用域声明的变量是局部变量
   作用域嵌套：当一个作用域内部又出现一个作用域时，叫做作用域嵌套
   静态作用域:也叫做词法作用域，作用域与函数的执行无关
3. 闭包
	当一个函数要使用外部作用域的值时就出现了闭包

   ```javascript
   var a = 1;
   window.a = 1;

   function test2() {
     //花括号之间的内容都属于test2函数的作用域
	 var a = 1;
	 function test3(){
		 var a = 2;
	 }
   }

   function test4(){
	   let b = 1
	   function test5(){
		   console.log(b)//此时引用了外部作用域的变量形成了闭包,闭包是看函数作用域，遵循就近原则
	   }
	   test5()
   }
   ```
   定义a的值要看函数的作用域。函数的作用域遵循一个原则:就近原则，每次离他最近的两个花括号就是它的作用域
   4. 形式参数
		定义函数时定义的参数
	``` javascript
	 function test6(x,y){
		 // x,y就是test6的形式参数 它可以是任意值，声明时的参数，本质上是变量声明，在创建函数时声明了两个变量，在调用函数时，变量赋值
		 return x+y
	 }
	```
	函数返回值和值是不同的
	5. 调用栈
	一个函数语句要执行时经过的过程
	``` javascript
	console.log('aaa') //当执行时 调用栈记录第一行然后 console 调用log函数，打印aaa返回到第一行
	console.log(1,add(1,2))
	//调用栈记录第一行需要记录返回的路径，add(1,2)压栈，记录第二行，add函数执行完后console.log()压栈，打印函数返回值，然后出栈
	```
	调用栈是记录当前函数的调用的数据结构，每次调用就会储存一个记录，当函数返回就将记录弹出
	6. 递归
		递归分为两个步骤，分为递和归
		``` javascript
		function test6(n){
			if(n = 1){
				return n
			}else{
				return n*test6(n-1)
			}
		}
		//当n不等于1时 n=>1的过程就是一个递进的过程 1=>的过程就是一个归的过程
		```
		* chrome浏览器调用栈大概是11434
		* Node调用栈大小为12536 
		* firfox调用栈最大
	7. 函数提升
		当函数声明与var声明同时存在时，函数声明会提升到顶部，var声明在后边
		函数表达式 var a = function(){} 是不会提升，函数声明会提升
	8. arguments 
		参数，除过箭头函数，每一个函数都有
		``` javascript
		function test7(){
			console.log(arguments)
			console.log(this)
		}
		test7()
		// arguments是一个伪数组，没有数组的共同属性，就是伪数组arguments.__proto__ === Object.Prototype
		//window 是this值
		```
	9. this是call的第一个参数
		1. 不添加任何条件，this默认指向window 在use strict下是undefined
		2. call(this,arguments)明确this的值，call如果传入第一位不是对象，则JS会封装成对象给你call(1) 1会变成Number(1)
		3. 在python中使用了self来代替this
		```javascript
		   person.sayhi() === sayhi.call(person) 这两个作用是相同的
		   perso.sayhi()Js隐式传递到sayhi(person)
		   let a = {
			   name:'jack'
			   //不适用this就只能想python使用self传入给sayhi(self)
			   sayhi(){
				   console.log(this.name)
			   }
		   }
		   //在一个对象中定义一个函数，这个对象与函数完全没有关系
		```
		4. apply 
			apply与call相似
			call(this,arguments) 传入的参数确定使用call
			apply(this,[arguments]) 传入的参数不确定使用apply 参数是一个数组
			两个作用是相同的，多使用call方法，明确this。
			call(undefined,1,2,3) apply(undefined,[1,2,3])
		5. bing绑定
			fn.bind() = fn.call()作用是相似
			bind的返回值是一个函数 fn.bind(1,1,3,4)()需要当做函数调用
	10. 箭头函数
	箭头函数中没有this，没有arguments 本身没有this，但是它可以从它执行的上下文中获取this
		``` javascript
		let a = ()=>{console.log(this)}
		```
	11. 立即执行函数
		``` javascript
		//定义一个函数时让它立即执行
		! function(){
			console.log(2)
		}()
		//使用()时会变成(function(){}())会报错
		//添加运算符不会产生bug，不添加运算符在执行时会产生bug 
		```