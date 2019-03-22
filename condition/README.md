# 条件和循环
编写代码的时候有时候需要根据不同状态不同条件来相对应不同的操作和遍历输出。这个时候就会用到我们的条件和循环。


## if-else语句
语法：
```copy
if(condition){              //判断条件是否为'true'
    //条件为 'true' 的时候执行的代码
}else{
    //条件为 'false' 的时候执行的代码
}
```
`condition`返回结果只有两个，`true`或者`false`。
返回结果执行代码相对应的代码块。
```copy
var student = 'peter';
if(student=='peter'){        //返回'true'    => 判断 student 的变量的值为 'peter'
    console.log('true')      //条件为 'true' 的时候执行的代码
}else{
    console.log('false')     //条件为 'false' 的时候执行的代码
}
```

## else-if语句
如果第一个条件为`false`,则会指定一个新的条件。
```copy
var student = 'peter';
if(student=='Anne'){           //初始条件
    console.log('Anne')        //初始条件 'true' 的时候执行的代码
}else if(student=='peter'){      //初始条件为 'false',执行新条件
    console.log('peter')         //新条件为 'true' 的时候执行的代码
}
```

## switch-语句
根据不同的结果执行不同的操作。

语法：
```copy
switch(n){
    case 1:
        //结果为 1 的时候执行的代码
        break;
    case 2:
        //结果为 2 的时候执行的代码
        break;
    default:
        //以上结果都没有的话，默认执行这里的代码
}
```
举个例子
```copy
var x = 3;
switch(x){
    case 1:
        console.log('1');       //结果为 '1' 的时候执行的代码
        break;
    case 2:
        console.log('2');       //结果为 '2' 的时候执行的代码
        break;
    default:
        console.log('3');       //结果不为 '1' 或者不为 '2' 的时候执行的代码
}
```
利用 `switch` 得出今天是星期几。
```copy
var date = new Date().getDay();     //获取今天的日期;
switch(date){
    case 1:
        console.log('星期一');
        break;
    case 2:
        console.log('星期二');
        break;
    case 3:
        console.log('星期三');
        break;
    case 4:
        console.log('星期四');
        break;
    case 5:
        console.log('星期五');
        break;
    case 6:
        console.log('星期六');
        break;
    default:
        console.log('星期日')
}
```
>不需要默认操作的话，`default` 可以删除。

## for-循环
循环可以将代码执行到制定的次数。如果你希望遍历（一次次的执行同样的代码），那么你可以使用循环。

语法：
```copy
for(statement 1;statement 2;statement 3){
    //需要一次次执行的代码
}
```

`statement 1`     //设置起点值;<br>
`statement 2`     //设置循环次数;<br>
`statement 3 `    //设置条件;<br>


比如说我们想打印 `1` 到 `10` 。
```copy
for(var i=1;i<=10;i++){
    console.log(i);
}
```

`var i=1;`     //从 `1` 开始;<br>
`i<=10;`        //循环次数小于或者等于10;<br>
`i++;`          //每次循环 `i` 加 `1` ;<br>

>如果想打印 `0` 到 `10` 的话，则 `statement 1` 处需要设置 `var i=0;` 

使用`for 循环`打印一组水果。

```copy
var fruits = ['苹果','梨','西瓜','荔枝','草莓'];
for(var i=0;i<=fruits.length;i++){
    console.log(fruits[i]);
}
```
>数组第一位是 `0` ，数量永远比索引（第几个）大一。<br>
比如这个数组一共有 `5` 种水果，草莓的索引值是 `4` 。

## while-和do-while-循环


#### while 循环
只有制定条件成立（为 `true` ）的时候才会执行对应的代码块。<br>不成立（为 `false` ）的时候会跳过 `while` 循环。

语法:
```copy
while(condition){       
    //需要执行的代码            //只有当`condition`成立的时候，对应的代码才会执行
}
```
举个例子：
```copy
var student = 'peter';
while(student=='peter'){
    console.log('He is peter');     //student == 'peter' 成立，执行代码
}
```

`while` 也适用在循环当中。
下面这个例子打印 `1` 到 `5` 。
```copy
var x = 0;
while(x<5){
    console.log(x);     
    x++;        //每次`x`的值自增`1`;
}
```


#### do while 循环
`do while` 循环是 `while` 循环的另一种形态。<br>
`do while` 循环会在判断条件是否为 `true` 之前执行一次。然后再去检查条件是否为 `true` ，条件如果为 `true` 则会重复这个循环。

语法：
```copy
do{
    //需要执行的代码
}while(condition);
```

同样是 `while` 的例子，我们用 `do while` 来做一下：
```copy
var x= 0;
do{
    console.log(x);
    x++;
}while(x<5);

```

>注意：`do while` 与 `while` 的区别是， `do while` 至少会执行一次。

举个例子：
```copy
var x = 1;
while(x<1){
    console.log(x);     //条件不成立，代码不执行。
}
```

```copy
var x = 1;
do{
    console.log(x);     //先执行一次。
}while(x<1)
```

## break-continue-语句 
`break` 语句用于跳出循环。
```copy
for(var i=0;i<=5;i++){
    if(i==3){
        break;      //在循环的过程当中，`i==3` 成立的时候，循环被终止。
    }
    console.log(i);     //`0`,`1`,`2`。
}
```

`countinue` 语句用于跳过循环中的一个迭代（意思是跳过这一次循环，继续下一次循环）。
```copy
for(var i=0;i<=5;i++){
    if(i==3){
        continue;
    }
    console.log(i);     //`0`,`1`,`2`,'4',`5`。
}
```

