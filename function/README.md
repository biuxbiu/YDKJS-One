# 函数
函数是用来执行特定任务的代码块。

>函数的好处是，只要定义一次，就可以多次调用。<br>
在函数中使用不同的参数就会产生不同的结果。


## 定义一个函数
函数定义有三个部分，`函数名`，`参数列表`，`函数体`。
```copy
function functionName(parameters){
    //执行的代码
}

function 函数名(参数列表){
    //函数体
}
```

定义一个名叫 print 的函数：
```copy
function print(){
    console.log('1');
}
```
## 函数参数
函数的参数列表中有分 `实参` 和 `形参` 。

举个例子：
```copy
function print(x){      //`x` 为变量，作为 `形参` 角色。
    console.log(x);
}

print(1);       //把 `1` 作为 `实参` 传入到函数当中去。
print(2);       //把 `2` 作为 `实参` 传入到函数当中去。
```

## 多参数
函数的参数列表中可以有多个参数 。
```copy
function sum(x,y){
    console.log(x+y)   
}

sum(1,2)        //`3`
```

`实参` 与 `形参` 对应的顺序需要一致。
```copy
function name(x,y){
    console.log('他的名字是' + x);
}

name('ken','peter');        //'他的名字是 ken'
name('peter','ken');        //'他的名字是 peter'

```
上面的例子，实参传入的值改变之后，输出的结果也跟着改变了。


## return-语句
一个函数内可以有一个 `return` 语句，`return` 语句用于返回函数的值，并终止函数往下执行。
>函数内有多个 `return` 语句的话，会从一个 `return` 语句开始终止函数，不往下执行。

```copy
function sum(x,y){
    return x;       //此处终止函数执行，并输出 `x` 的结果
    return y;
    return x+y;
}

sum(1,2);       //1;
```

>为什么有 `return` 的出现呢？因为你有时候需要进行计算并接收结果，所以你会需要用到 `return` 。

## alert-prompt-confirm
`Javascript` 提供了三种类型的弹窗，分别是 `alert` , `prompt` , `confirm`。

#### alert 警告窗
警告窗弹出时候，用户必须点击 `确定` 才可以继续往下执行。

```copy
alert('hello world');       //弹出 `hello world`

alert('hell , \'peter\'');      //弹出 `hello , 'peter'`
```

>alert()，该函数接受一个参数。

#### prompt 框
该框主要是用来提示用户来操作一个值，用户点击确认之后，该函数返回输出用户输入的值。

`prompt()` 有两个参数:<br>
* 第一个是文本框中显示的标题；
* 第二个是文本矿中显示默认的字符串（可选）；

```copy
var text = prompt('请输入您的信息','这里要输入您的姓名');      //标题为 `请输入您的信息`，输入框里默认的提示为 `这里要输入您的姓名`
alert(text)     //弹窗弹出用户在输入框输入的值，如果用户没有输入值，默认取 `prompt` 输入框的默认值。
```

#### comfirm 框
`confirm` 框主要是用来让客户验证默写内容，有 `确定` 或者 `取消` 按钮。<Br>
当用户点击 `确定` 的时候该函数返回 `true`；<br>
当用户点击 `取消` 的时候该函数返回 `false`；

> `confirm` 有 `确定` 和 `取消` 按钮，用户操作之后有返回值。<br>
 `alert` 只有 `确定` 按钮，用户操作没有返回值。

```copy
var result = confirm('你取快递了吗');       //询问是否取了快递。
alert(result);      //`true`    => confirm 点击确认的话，返回值为 `true` 。
```