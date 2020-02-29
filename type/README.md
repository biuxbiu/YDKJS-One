## 类型转换
在 `Javascript` 中存在着类型转换。我们可以用公式来总结他们之间的转换规则。

#### 隐式转换
`replace` 用来替换匹配的字符或者替换正则表达式匹配的字符串。

#### 显式转换
`replace` 用来替换匹配的字符或者替换正则表达式匹配的字符串。

## repalce和replaceWidth
`replace` 和 `replaceWidth` 都含有替换的意思。

#### replace
`replace` 用来替换匹配的字符或者替换正则表达式匹配的字符串。

语法：
```copy
str.replace(reg/string,replacement);
reg：正则表达式
string：字符串
```

* 替换单个匹配条件的字符
```copy
var str = 'hello world world';
str.replace(/world/,'biu');         //'hello biu world' 这种情况下只会匹配第一个符合条件的字符。
//或者
str.replace('world','biu');
```

* 替换所有匹配条件的字符
```copy
var str = 'hello world world';
str.replace(/world/g,'biu')         //'hello biu biu' 这种情况下只会匹配所有符合条件的字符。
```

* 替换对大小写不敏感的字符
```copy
var str = 'WorlD world WoRld';
str.replace(/world/gi,'biu');        //'biu' 这种情况下会忽略大小写，匹配符合条件的字符
```

使用 `/gi` 和 `/ig` 的功能是一样的。下面的 `正则表达式` 会有简单的介绍

> `replace` 在条件判断的时候会使用到 `正则表达式` 。正则表达式在下面的例子可以简单看到。

#### replaceWidth
`replaceWidth` 是用来替换指定的 `html` 内容或者元素，属于 `Jquery` 的语法。

* 替换标签
```copy
<div>Hello world</div>
<script>
    $('div').replaceWidth('<h1>it is changed</h1>');
</script>
```

## 正则表达式
简单的正则判断：
```copy
/i                  //忽略大小写
/g                  //全局匹配
/m                  //多行查找
/gi                 //全局匹配，忽略大小写  `****`
/ig                 //全局匹配，忽略大小写  `****`
.                   //任意一个字符
/^A/g               //全局匹配以 `A` 开头的字符
/A$/g               //全局匹配以 `A` 结尾的字符
```

## Javascript中的高度


#### innerWidth和innerHeight
`Window.innerWidth`：浏览器宽度，包括 `滚动条`<br>
`Window.innerHeight`：浏览器高度，包括 `滚动条`

`Window.outterWidth`：浏览器整体宽度<br>
`Window.outterHeight`：浏览器整体高度，包括 `地址栏，tab`

>`outter` 永远比 `inner` 大。

<img src="https://developer.mozilla.org/@api/deki/files/213/=FirefoxInnerVsOuterHeight2.png">


#### clientWidth和clientHeight
`document.body.clientWidth`：表示 `body` 元素内部的宽度，`包括边距`，但是 `不包括滚动条，边框，外边距`<br>
`document.body.clientHeight`：表示 `body` 元素内部的高度，`包括边距`，但是 `不包括滚动条，边框，外边距`

<img src="https://developer.mozilla.org/@api/deki/files/185/=Dimensions-client.png">

>`Jquery` 中的 $(window).width() 跟 `document.body.clientWidth` 的值一样。

#### offsetWidth和offsetHeight
`offsetWidth`：输出的是一个布局宽度，`包括边框，内边距，包括滚动条`，但是 `不包括外边距`<br>
`offsetHeight`：输出的是一个布局高度，`包括边框，内边距，包括滚动条`，但是 `不包括外边距`

<img src="https://developer.mozilla.org/@api/deki/files/186/=Dimensions-offset.png">


#### scrollWidth和scrollHeight
`scrollWidth`：表示内容的横向宽度，被隐藏的内容都会被计算在内。`包括内边距`，但是 `不包括边框，外边距，滚动条`<br>
`scrollHeight`：表示内容的竖向高度，被隐藏的内容都会被计算在内。`包括内边距`，但是 `不包括边框，外边距，滚动条`

>某种情况下，`document.body.clientHeight` `document.body.scrollHeight` `document.body.offsetHeight` 的值是一样的。

```copy
console.log(document.body.clientHeight);
console.log(document.body.offsetHeight);
console.log(document.body.scrollHeight);
```