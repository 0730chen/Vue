##### JS 的基本语法

1. 表达式与语句

- 表达式是一般有值的,但有时候语句是改变当前环境也有值 1+3 是表达式
  只有函数有返回值
  1+2 的值是 3 1+2 没有返回值
  值和返回值是不同的

2. 标识符是用来起变量名字
   标识符规则变量名命名规则
   以\$，字母，下划线，中文，开始，就是不能以数字开始命名
3. if else 条件语句
   - 条件语句当 if 后面的条件为 true 则进入 if 后面代码块当条件为 false 时进入 fasle 代码块
   - 当 if 后面的代码块语句只有一个时可以使用 ?:表达式 a>b？ a:b 这个语句就是如果 a>b 则返回 a 否则返回 b
4. while 语句
   while 语句,如果满足条件则一直执行当前代码

   ```javascript
   while (a > b) {}
   //形成死循环条件一直满足
   while (1) {
     console.log();
   }
   ```

5. for 循环语句
   for 循环相当于一个 while 循环

   ```javascript
   for (let i = 0; i < 6; i++) {
     console.log(i);

     //0,1,2,3,4,5
     settimeout(() => {
       console.log(i);
     }, 0);
     //就相当于
     let i = 0;
     while (i < 6) {
       i++;
       console.log(i);
     }
   }
   //当i满足条件时跳出循环，使用let声明变量时，在内部每次都会有一个新的变量i记录当前的值 i<6时，for循环中一共生成了7个i
   ```

   6. break 和 continue
      break 意思为跳出，打断，当满足当前条件时直接跳出循环
      continue 继续下一个 next 下一个

   ```javascript
   for (let i = 0; i < 4; i++) {
     if (i === 1) {
       break;
     }
     console.log(i); //0
   }
   for (let i = 0; i < 4; i++) {
     if (i === 1) {
       continue;
     }
     console.log(i); //0,2,3
   }
   ```

6. label 标记标签

```javascript
//{}是label表示代码块
{
  a: 1//不加分号就是一个对象，加上;就是一个语句a=1
}
{
  a: 1
}
a  = {
	b:1 //对象
}

//在chrome浏览器中结果是一个对象 {a:1},加上分号就是语句 a=1
//firfox中是一个1

```

