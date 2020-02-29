# Javascript-Tips

`Javascript` 使用小技巧

#### js中的花括号写法

```javascript
var textOne = 'hello';
var textTwo = 'world';

console.log(textOne + ' ' + textTwo);               //hello world
console.log(`${textOne}` + ' ' + `${textTwo}`);     //hello world
```

!>注意不是单引号，是 `esc` 下面的小点点。

<Br>


#### jsTips

```javascript
一般我们在让函数立即运行的时候 我们会用

    (function(){
      console.log('this is biu');
    })();
    
    
正文从这里开始，写法如下:

    ~function(){
      console.log('this is biu');
    }();
    
    void function(){
      console.log('this is biu');
    }();

```


#### JavaScript类型转换(上)

JavaScript 数据类型

JavaScript中能够容纳值的数据类型有五种：

```javascript
string
number
boolean
object
function
```


其中对象类型又分为三种：

```javascript
Object
Date
Array
```

另外两种为不能容纳值的数据类型：

```javascript
null
undefined
```

**typeof 操作符**

你可以使用typeof操作符来查看JavaScript变量的数据类型。

```javascript
typeof "John"                 
// 返回 string 

typeof 3.14                   
// 返回 number

typeof NaN                    
// 返回 number

typeof false                  
// 返回 boolean

typeof [1,2,3,4]              
// 返回 object

typeof {name:'John', age:34}  
// 返回 object

typeof new Date()             
// 返回 object

typeof function () {}         
// 返回 function

typeof myCar                  
// 返回 undefined (如果myCar未声明)

typeof null                   
// 返回 object
```

!>NaN 的数据类型为number<br>
数组的数据类型为object<br>
日期的数据类型为object<br>
null的数据类型为object<br>
未声明变量的数据类型为undefined<br>

typeof 的数据类型
typeof 操作符并非变量。 因为它是一个操作符。同样，操作符( + - * / ) 没有任何数据类型。
typeof的返回值是字符串。
constructor属性
constructor 属性返回所有JavaScript变量的构造函数。

示例

```javascript
"John".constructor                 
// 返回函数String()

(3.14).constructor                 
// 返回函数Number()

false.constructor                  
// 返回函数Boolean()

[1,2,3,4].constructor              
// 返回函数Array()

{name:'John', age:34}.constructor  
// 返回函数 Object()

new Date().constructor             
// 返回函数 Date()

function () {}.constructor         
// 返回函数 Function()
```


你可以通过检查constructor属性以判断某个对象类型是否是Array (包含关键字"Array")：

```javascript
function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}
```

同样，你也可以通过检查constructor属性以判断某个对象类型是否是Date (包含关键词"Date")：

```javascript
function isDate(myDate) {
    return myDate.constructor.toString().indexOf("Date") > -1;
}
```

JavaScript 类型转换

JavaScript变量可以被转换为另外一种数据类型的新变量 ：

使用JavaScript函数的方式
JavaScript的自动转换机制

转换Numbers为Strings

全局方法String() 可以转换numbers为strings。

该函数可以使用在任意类型的数字、字面量、变量或表达式：

```javascript
String(x)         
// 返回从变量x转换来的字符串

String(123)       
// 返回从字面量123转换来的字符串

String(100 + 23)  
// 返回从表达式转换来的字符串

Number对象的toString()
//方法也可以达到同样效果
```

示例

```javascript
x.toString()
(123).toString()
(100 + 23).toString()

转换 Booleans 为 Strings

全局方法String() 也可以转换 booleans 为 strings。

String(false)        
// 返回"false"

String(true)         
// 返回"true"

Boolean 对象的toString() 
// 方法也可以达到同样效果

false.toString()     
// 返回"false"

true.toString()      
// 返回"true"

转换Dates 为 Strings

全局方法String() 也可以转换dates 为 strings。

String(Date())      
// 返回Jul 17 2014 15:38:19 GMT+0200 

Date对象toString() 方法也可以达到同样效果。

示例

Date().toString()   
// 返回 Jul 17 2014 15:38:19 GMT+0200 

转换 Strings 为 Numbers

全局方法 Number() 可以转换 strings 为 numbers。

包含数字的字符串(如 "3.14") 可以被转换为数字 (3.14)。

空字符串被转换为 0。

其他值被转换为NaN (Not a number)。

Number("3.14")    
// 返回3.14

Number(" ")       
// 返回0 

Number("")        
// 返回0

Number("99 88")   
// 返回NaN

一元操作符 + 

+操作符可以用来转换一个变量为数字:

示例

var y = "5";      
// y 是字符串类型

var x = + y;      
// x 是数字类型

如果变量不能被转换，仍可转换为数字类型，但是值是NaN (Not a number):

示例

var y = "John";   
// y 是字符串类型

var x = + y;      
// x 是数字类型，值是NaN

```


#### math

```javascript
`abs(x)	返回数的绝对值`
`acos(x)	返回数的反余弦值`
`asin(x)	返回数的反正弦值`
`atan(x)	以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值`
`atan2(y,x)	返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）`
`ceil(x)	对数进行上舍入`
`cos(x)	返回数的余弦`
`exp(x)	返回 e 的指数`
`floor(x)	对数进行下舍入`
`log(x)	返回数的自然对数（底为e）`
`max(x,y)	返回 x 和 y 中的最高值`
`min(x,y)	返回 x 和 y 中的最低值`
`pow(x,y)	返回 x 的 y 次幂`
`random()	返回 0 ~ 1 之间的随机数`
`round(x)	把数四舍五入为最接近的整数`
`sin(x)	返回数的正弦`
`sqrt(x)	返回数的平方根`
`tan(x)	返回角的正切`
`toSource()	返回该对象的源代码`
`valueOf()	返回 Math 对象的原始值`
```


#### 字符串的情况下
| x | isNaN(x) | Number(x) | parseFloat(x) | parseInt(x) |
|:------:|:------:|:------:|:------:|:------:|
|'123'|isNaN('123')|Number('123')|parseFloat('123')|parseInt('123')|
|字符串|false|123|123|123|
|---|---|---|---|
|' 123'|isNaN(' 123')|Number(' 123')|parseFloat(' 123')|parseInt(' 123')|
|字符串前面空格|false|123|123|123|
|---|
|'1,23'|isNaN('1,23')|Number('1,23')|parseFloat('1,23')|parseInt('1,23')|
|字符串里有逗号|true|NaN|1|1|
|---|
|'1.23'|isNaN('1.23')|Number('1.23')|parseFloat('1.23')|parseInt('1.23')|
|字符串里有小数点|false|1.23|1.23|1|
|---|
|'.123'|isNaN('.123')|Number('.123')|parseFloat('.123')|parseInt('.123')|
|字符串里有小数点|true|.123|.123|NaN|
|---|
|'1 23'|isNaN('1 23')|Number('1 23')|parseFloat('1 23')|parseInt('1 23')|
|字符串中间有空格|true|NaN|1|1|
|---|
|'1-23'|isNaN('1-23')|Number('1-23')|parseFloat('1-23')|parseInt('1-23')|
|字符串中间有减号|true|NaN|1|1|
|---|
|'1~23'|isNaN('1~23')|Number('1~23')|parseFloat('1~23')|parseInt('1~23')|
|字符串中间有特殊符号|true|NaN|1|1|
|---|
|'1~23'|isNaN('~123')|Number('~123')|parseFloat('~123')|parseInt('~123')|
|字符串前面有特殊符号|true|NaN|NaN|NaN|
|---|
|'-'|isNaN('-')|Number('-')|parseFloat('-')|parseInt('-')|
|字符串中间是特殊符号|true|NaN|NaN|NaN|
|---|
|'.'|isNaN('.')|Number('.')|parseFloat('.')|parseInt('.')|
|字符串里是小数点|true|NaN|NaN|NaN|
<br>

#### 数字的情况下

| x |isNaN(x) | Number(x) | parseFloat(x) | parseInt(x) |
|:------:|:------:|:------:|:------:|:------:|
|123|isNaN(123)|Number(123)|parseFloat(123)|parseInt(123)|
|数字|false|123|123|123|
|---|
| 123|isNaN( 123)|Number( 123)|parseFloat( 123)|parseInt( 123)|
|数字前有空格|false|123|123|123|
|---|
|.123|isNaN(.123)|Number(.123)|parseFloat(.123)|parseInt(.123)|
|数字之间有逗号|false|.123|.123|0|
|---|
|1,23|isNaN(1,23)|Number(1,23)|parseFloat(1,23)|parseInt(1,23)|
|数字之间有逗号|false|1|1|1|
|---|
|1 23|isNaN(1 23)|Number(1 23)|parseFloat(1 23)|parseInt(1 23)|
|数字之间有空格|报错|报错|报错|报错|
|---|
|1-23|isNaN(1~23)|Number(1~23)|parseFloat(1~23)|parseInt(1~23)|
|数字之间有特殊符号|报错|报错|报错|报错|
|---|
|1-23|isNaN(1-23)|Number(1-23)|parseFloat(1-23)|parseInt(1-23)|
|数字之间有减号|false|-22|-22|-22|
|---|
|+123|isNaN(+123)|Number(+123)|parseFloat(+123)|parseInt(+123)|
|数字前有加号|false|123|123|123|
|---|
|++123|isNaN(++123)|Number(++123)|parseFloat(++123)|parseInt(++123)|
|数字前有加加号|报错|报错|报错|报错|
<br>

#### 数组情况下
| x | isNaN(x) | Number(x) | parseFloat(x) | parseInt(x) |
|:------:|:------:|:------:|:------:|:------:|
|'[123]'|isNaN([123])|Number([123])|parseFloat([123])|parseInt([123])|
|数组|false|123|123|123|
|---|
|'[123],[123]'|isNaN([123],[123])|Number([123],[123])|parseFloat([123],[123])|parseInt([123],[123])|
|数组|false|123|123|123|
|---|
|['123','123']|isNaN(['123','123'])|Number(['123','123'])|parseFloat(['123','123'])|parseInt(['123','123'])|
|数组|true|NaN|123|123|

#### 总结字符串情况下
> 报错的情况多出于数字的情况；<Br>
> 前面的空格都会被忽略；<br>
> parseInt() parseFloat() 无论在什么情况下遇到逗号都停止解析；<br>
> 要注意数组的情况，虽然不经常碰到；<br>
<br>

#### 总结数字情况下
> 空格，特殊符号，都会报错；<Br>


#### 透彻parseInt函数

### parseInt() 函数可解析一个字符串，并返回一个整数。

#### 如果是字符串

* 1.字符串前面有空格会忽略，遇到小数点停止解析

```javascript
parseInt(' 111.11')  // 111 , 最前面的空格忽略
```
</br>
</br>

* 2.字符串中遇到非数字停止解析
```
parseInt('11.22')  // 11 , 遇到非数字停止解析
parseInt('11 22')  // 11 , 遇到非数字停止解析
parseInt('11,22')  // 11 , 遇到非数字停止解析
```
</br>
</br>

* 3.首个字符串非数字的话直接返回NaN
```
parseInt('-')  // NaN , 首个字符串遇到非数字
parseInt('.111')  // NaN , 首个字符串遇到非数字
parseInt('hello world 111')  // NaN , 首个字符串遇到非数字
```
</br>
</br>

#### 如果是数字

* 1.数字返回数字
```
parseInt(123)  // 123 , 首个字符串遇到非数字
```
</br>
</br>


* 2.小数点返回整数
```
parseInt(123.34)  // 123 , 遇到小数点停止解析
```
</br>
</br>

* 3.数字中有空格，英文报错

```javascript
parseInt(123 34)  // 报错 , Uncaught SyntaxError: missing ) after argument list
parseInt(123hellow34)  // 报错 , Uncaught SyntaxError: missing ) after argument list
```
</br>
</br>

* 4.遇到逗号停止解析

```javascript
parseInt(123,34)  // 123
```

</br>
</br>

>总结：parseFloat() 将字符串转换成数字。parseInt() 将字符串转换成整数。
* 不同的地方便是 parseFloat() 只要转换成数字就好。
* parseInt() 在将其转换成数字的时候还要转换成整数(即是没有小数点)。 


#### 透彻parseFloat函数


#### 如果是字符串

* 1.字符串前面有空格会忽略

```javascript
parseFloat(' 111')  // 111 , 最前面的空格忽略
parseFloat(' 111.11')  // 111.11 , 最前面的空格忽略
```

</br>
</br>

* 2.遇到第二个非数字停止（空格，小数点，英文）

```javascript
parseFloat(' 111.11.11')  // 111.11 , 遇到第二个小数点停止解析
parseFloat(' 111.11 11')  // 111.11 , 遇到第二个空格停止解析
parseFloat(' 111.11hello')  // 111.11 , 遇到英文停止解析
```
</br>
</br>

* 3.首个字符串非数字的话直接返回NaN

```javascript
parseFloat('hello world')  // NaN , 第一个非数字直接返回NaN
parseFloat('...')  // NaN , 第一个非数字直接返回NaN
parseFloat('/`1')  // NaN , 第一个非数字直接返回NaN
parseFloat('-')  // NaN , 第一个非数字直接返回NaN
```
</br>
</br>

#### 如果是数字（括号内没有引号）
* 1.符合条件的话会进行进制之间的转换

```javascript
parseFloat(020)  // 16 , 8进制转10进制
parseFloat(056)  // 46 , 8进制转10进制
```
</br>
</br>

* 2.数字前面空格的话会被忽略

```javascript
parseFloat( 1122)  // 1122 , 最前面的空格忽略
parseFloat( 11.22)  // 11.22 , 最前面的空格忽略
```

</br>
</br>

* 3.数字中出现空格或者英文，或者第二个小数点的话会报错

```javascript
parseFloat( 11 22)  // 报错 , Uncaught SyntaxError: missing ) after argument list
parseFloat( 11hello22)  // 报错 , Uncaught SyntaxError: Invalid or unexpected token
parseFloat( 11.22.33)  // 报错 , Uncaught SyntaxError: missing ) after argument list
```
</br>
</br>

* 4.数字中遇到第一个逗号便停止解析
```
parseFloat( 11,22)  // 11 , 遇到逗号停止解析
```
</br>
</br>

#### 总结：parseFloat() 是将字符串转换成数字。转换规则需要注意。无论是字符串还是数字，前面的空格一律无视，遇到逗号停止解析。
* 字符串遇到第二个空格会停止解析，输出正常。
* 数字遇到第二个空格会报错。
</br>
</br>

* 字符串遇到第二个小数点停止解析，输出正常。
* 数字遇到第二个小数点会报错。
</br>
</br>

* 字符串遇到第英文停止解析，输出正常。
* 数字遇到英文会报错。
</br>
</br>

>本身是一个将字符串转换成数字的方法，如果里面还是数字的话，做这个事情其实没有什么意义，但是我们还是要注意两者的情况，
</br>
</br>

```

