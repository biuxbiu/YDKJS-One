# Javascript-Tips

`Javascript` 使用小技巧

###### js中的花括号写法

```javascript
var textOne = 'hello';
var textTwo = 'world';

console.log(textOne + ' ' + textTwo);               //hello world
console.log(`${textOne}` + ' ' + `${textTwo}`);     //hello world
```

!>注意不是单引号，是 `esc` 下面的小点点。

<Br>


###### 自执行函有哪些

```javascript
(function () { 
  console.log(1)      //1
}()); 

!function () { 
  console.log(2)      //2
}();


~function () { 
  console.log(3)      //3
}();

-function () { 
  console.log(4)      //4
}();


+function () { 
  console.log(5)      /5
}();

```

!>注意自执行函数前面的 `+` `-` ，有时候会被当成表达式，转换成运算符

<br>
<br>

###### 你不知道的Boolean

`Boolean`：检查逻辑对象是 `true` 还是 `false`

>输出结果要么 `true` 要么 `false` ，没有别的

```javascript
Boolean('')                                 //false ' '都为 true

/* ---- 参数是对象皆为 true ----*/
Boolean(-1)                                 //true 除了 0,-0,NaN,undefined,null,''都为 true
Boolean(' ')                                //true ' '都为 true
Boolean([0])                                //true [0] 为对象,对象都为 true
Boolean(1+[0])                              //true 1 + 0 为 true
Boolean(function(){console.log(false)})     //true funcion 是对象，对象皆为 true

/* ---- 注意运算符 true ----*/
Boolean(+function(){console.log(true)}())   //fasle 只有遇到 `+` `-` 为表达式 为 `false`
Boolean(+function(){console.log(1)}())      //false 
Boolean(-function(){console.log(1)}())      //false 同理 `5` 为 `false`

Boolean(~function(){console.log(1)}())      //true 只有遇到 `+` `-` 才会表达式，才为 `false`
Boolean(!function(){console.log(1)}())      //true 同理 `8` 

/* ---- 字符串与字符串比较 ----*/
Boolean("21"<"3")                           //true 按字符比较，首字符 2<3 返回 `true` 
Boolean("45">"32")                           //true 按字符比较，首字符 4<3 ，后面无论怎样都不用比 返回 `true` 
Boolean("21"<3)                             //false 与数字类型比较，统一用 Number() 转换，21 >3 所以为 `false`
Boolean("25"<34)                            //true 与数字类型比较，统一用 Number() 转换，21 >3 所以为 `false`
Boolean("21">3)                             //true 与数字类型比较，统一用 Number()， Number('hello') 为 NaN 

/* ---- Number("hello") 与其他比较 ----*/
Boolean("hello">3)                          //false 
Boolean("hello"<10)                         //false
Boolean("hello">"")                         //true
Boolean("hello">"10")                       //true 字母的排列在数字后面
Boolean("hello">"word")                     //false `w` 排在 `h` 后面
```

<br>
<br>

###### 你不知道的Number

`Number`：函数把对象的值转换为数字

>输出结果要么 `数字` 要么 `NaN`

```javascript
/* ---- 如果是特殊值 ----*/
Number(null)                              //0
Number(undefined)                         //NaN
Number(NaN)                               //NaN

/* ---- 如果是一个布尔值 ----*/
Number(true)                              //1
Number(false)                             //0

/* ---- 对象是一个字符串 ----*/
Number('')                               //0 
Number(' ')                              //0 
Number('11')                             //11 将字符串转换成数字
Number(' 11  ')                          //11 遇到前后空格能够处理
Number(' 11 11  ')                       //NaN 遇到中间空格输出 `NaN`
Number('11,11')                          //NaN 
Number('a111')                           //NaN 遇到非数字直接输出 `NaN`
Number('020')                            //020

/* ---- 对象是一个数字 ----*/
Number(111)                               //111 
Number(111,111)                           //111 
Number(111.111)                           //111.111 
Number(111.111.111)                       //不能处理
Number(111 111)                           //空格不能处理
Number(a111)                              //遇到非数字不能处理
Number(111a)                              //遇到非数字不能处理
Number(020)                               //16 二进制处理 2*8+0
Number(056)                               //46 二进制处理 5*8+6
Number(0125)                              //85 1*8*8+16+5
```

!>注意比较 `Number(1,1)` 和 `Number('1,1')`, 结果不一样，一个为 `1`，一个为 `NaN`

>Number(new Date) 输出时间戳


<br>
<br>

###### 你不知道的isNaN

`isNaN`：用于检测是否为非数值

>非数值都返回 `true`，比如：`null`，`字符串`，`对象`，`undefined`，否则则返回 `false`


```javascript
/* ---- 非数字则为 `true` ----*/
isNaN(null)           //true
isNaN(undefined)      //true
isNaN('hello')        //true
isNaN('2020/02/20')   //true

/* ---- 字符串是数字则为 `false` ----*/
isNaN('123')          //false
isNaN('-3.15')        //false

/* ---- 出现符号为 `true` ----*/
isNaN('12,12,12')     //true

/* ---- 数值中的逗号 ----*/
isNaN(12,12,12)       //12，false

/* ---- 字符串中的逗号 ----*/
isNaN('12,12,12')     //NaN，true
```

>`NaN` 与任何值相比较都为 `false`，包括它自己 `NaN>NaN` 为 `false`

<br>
<br>


###### 你不知道的typeof

`typeof`：是一个运算符，用来检测数据类型。

有两种写法 `typeof(表达式)` 和 `typeof 变量名`。

>既然说是运算符，`typeof(表达式)` 是对表达式做运算，`typeof 变量名` 是对变量名做运算

!>`typeof` 返回的值皆为**字符串**。

```javascript
typeof undefined                  //"undefined"
typeof "undefined"                //"string"
typeof 123                        //"number"
typeof "123"                      //"string"
typeof null                       //"object"
typeof NaN                        //"number"
typeof false                      //"boolean"
typeof true                       //"boolean"
typeof [1,2,3,4,5]                //"object"
typeof {name:"peter",age:"20"}    //"object"
```


<br>
<br>



###### javascript中的LHS与RHS

**当 `变量` 充当被赋值角色，我们称它为 `LHS`**，**当 `变量` 充当取值角色，我们称它为 `RHS`**


```javascript
var text = 'hello world';  //变量 text 被赋值，所以是 LHS
console.log(text);  //变量 text 取值，所以是RHS
```

**举个例子**

```javascript
function text(num){  
    var num2 = num; 
    console.log(num2);
var content = text('hello world');

我们来细细分解一下

function text(num){  
    //变量 num 充当取值角色，此处为 -- RHS
    //var num = 'content' 【隐式变量】
     //此处有一个隐藏了的角色扮演，变量 num 充当了被赋值的角色 -- LHS

    var num2 = num; 
     //变量 num2 充当被赋值角色 -- LHS。 
     //变量 num 充当取值角色 -- RHS

    console.log(num2);
     //变量 num2 充当取值角色 -- RHS
}
var content = text('hello world');
  //变量 content 充当被赋值角色 -- LHS
  以上有 LHS * 3 , RHS * 3。

```

###### 