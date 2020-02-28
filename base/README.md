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

```javascript
Boolean(-1)                                 //true 除了 0,NaN,undefined,null,''都为 true
Boolean('')                                 //false ' '都为 true
Boolean(' ')                                //true ' '都为 true
Boolean([0])                                //true [0] 为对象,对象都为 true
Boolean(1+[0])                              //true 1 + 0 为 true
Boolean(function(){console.log(false)})     //true funcion 是对象，对象皆为 true
Boolean(+function(){console.log(true)}())   //fasle 只有遇到 `+` `-` 为表达式 为 `false`
Boolean(+function(){console.log(1)}())      //false 
Boolean(-function(){console.log(1)}())      //false 同理 `5` 为 `false`
Boolean(~function(){console.log(1)}())      //true 只有遇到 `+` `-` 才会表达式，才为 `false`
Boolean(!function(){console.log(1)}())      //true 同理 `8` 
Boolean("21"<"3")                           //true 按字符比较，首字符 2<3 返回 `true` 
Boolean("45">"32")                           //true 按字符比较，首字符 4<3 ，后面无论怎样都不用比 返回 `true` 
Boolean("21"<3)                             //false 与数字类型比较，统一用 Number() 转换，21 >3 所以为 `false`
Boolean("25"<34)                            //true 与数字类型比较，统一用 Number() 转换，21 >3 所以为 `false`
Boolean("21">3)                             //true 与数字类型比较，统一用 Number()， Number('hello') 为 NaN 
Boolean("hello">3)                          //false 
Boolean("hello"<10)                         //false
Boolean("hello">"")                         //true
Boolean("hello">"10")                       //true 字母的排列在数字前面
Boolean("hello">"word")                     //false `w` 排在 `h` 后面
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