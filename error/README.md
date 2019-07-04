
#### 控制台常见的几种错误

`Javascript` 中，控制台大致把报错信息分为两大类：
* `语法错误`（关于 `SyntaxError` 的这类错误导致浏览器不能正常预解析，使得这个 `js` 文件无法执行 ）；
* `抛出异常`（这类错误程序会执行到问题代码后停止继续往下执行）；

###### syntaxError-语法解析错误

`变量命名不规范的语法错误导致不能正常预解析，整段 js 无法运行`
```copy
console.log('1');
console.log('2');

var 1a = 'hello world'         //Uncaught SyntaxError: Invalid or unexpected token
                               //【无效的或者意外的标记】`1a` 变量命名不规范，导致整段 `js` 无法运行；

var 1 = 'hello world'          //Uncaught SyntaxError: Unexpected number
                               //【意外的数字】`1` 变量命名不规范，导致整段 `js` 无法运行；
```
<br>


`参数的不规范导致不能正常预解析，整段 js 无法运行`
```copy
console.log('1');
Math.max(2,4,-);               //Uncaught SyntaxError: Unexpected token )
                               //【意外的标记】括号里最后一个参数不符合规范；
```

<br>

###### ReferenceError-引用错误

 `引用到没有定义的变量或者函数`；
```copy
console.log('1')
console.log('2')
fun();                          //引用没有定义的 `fun`;
```


<br>

###### RangeError-范围错误

`超出范围值：有可能是长度范围超出了，有可能是参数的范围超出了`
```copy
[].length = -1;                 //长度的值 '-1' 超出了长度的有效范围值
6.666.toFixed(-1);              //参数中 '-1' 超出了有效范围值      
```

<br>

###### TypeError-类型错误

`变量或者参数不是预期的类型的时候，比如 `new` 一个字符串或者调用对象不存在`
```copy
var text = new 'hello world';       //"hello world" is not a constructor
var text = new  123123;             //"hello world" is not a constructor
var text = new  helloWorld;         //"hello world" is not a constructor

var target = {};
target.change();                    //Uncaught TypeError: target.change is not a function
```


<br>

###### URIError-类型错误