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


#### 阻止浏览器双击页面放大

```javascript
window.onload = function () {
    document.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    });
    var lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        var now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false)
}
```

<Br>


#### 阻止弹层滚动影响弹层下方内容

```javascript
$.smartScroll = function (container, selectorScrollable) {
    // 如果没有滚动容器选择器，或者已经绑定了滚动时间，忽略
    if (!selectorScrollable || container.data('isBindScroll')) {
        return;
    }

    // 是否是搓浏览器
    // 自己在这里添加判断和筛选
    var isSBBrowser;

    var ua = navigator.userAgent.toLowerCase();
    console.log(ua);

    if(ua.indexOf('iphone')>=0){
        iosScroll();
    }

    var data = {
        posY: 0,
        maxscroll: 0,
        elScroll: ''
    };

    // 事件处理
        function iosScroll() {
        container.on({
            touchstart: function (event) {
                var events = event || window.event;

                // 先求得是不是滚动元素或者滚动元素的子元素
                var elTarget = $(event.target);

                if (!elTarget.length) {
                    return;
                }

                var elScroll;

                // 获取标记的滚动元素，自身或子元素皆可
                if (elTarget.is(selectorScrollable)) {
                    elScroll = elTarget;
                } else if ((elScroll = elTarget.parents(selectorScrollable)).length == 0) {
                    elScroll = null;
                }

                if (!elScroll) {
                    return;
                }

                // 当前滚动元素标记
                data.elScroll = elScroll;

                // 垂直位置标记
                data.posY = window.event.pageY;
                data.scrollY = elScroll.scrollTop();
                // 是否可以滚动
                data.maxscroll = elScroll[0].scrollHeight - elScroll[0].clientHeight;
            },
            touchmove: function () {
                // 如果不足于滚动，则禁止触发整个窗体元素的滚动
                if (data.maxscroll <= 0 || isSBBrowser) {
                    // 禁止滚动
                    event.preventDefault();
                }
                // 滚动元素
                var elScroll = data.elScroll;
                if (data.elScroll <= 0) {
                    return;
                }
                // 当前的滚动高度
                var scrollTop = elScroll.scrollTop();

                // 现在移动的垂直位置，用来判断是往上移动还是往下
                var events = event.touches[0] || event;
                // 移动距离
                var distanceY = events.pageY - data.posY;

                if (isSBBrowser) {
                    elScroll.scrollTop(data.scrollY - distanceY);
                    elScroll.trigger('scroll');
                    return;
                }

                // 上下边缘检测
                if (distanceY > 0 && scrollTop == 0) {
                    // 往上滑，并且到头
                    // 禁止滚动的默认行为
                    event.preventDefault();
                    return;
                }

                // 下边缘检测
                if (distanceY < 0 && (scrollTop + 1 >= data.maxscroll)) {
                    // 往下滑，并且到头
                    // 禁止滚动的默认行为
                    event.preventDefault();
                    return;
                }
            },
            touchend: function () {
                data.maxscroll = 0;
            }
        });

    }
    // 防止多次重复绑定
    container.data('isBindScroll', true);
}
 $.smartScroll($('.modal-layer'), '.modal-body');
```

<Br>

#### 滑动方向

```javascript
# touchdirection
touchdirection


var startx, starty;
    //获得角度
    function getAngle(angx, angy) {
        return Math.atan2(angy, angx) * 180 / Math.PI;
    };
 
    //根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
    function getDirection(startx, starty, endx, endy) {
        var angx = endx - startx;
        var angy = endy - starty;
        var result = 0;
 
        //如果滑动距离太短
        if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
            return result;
        }
 
        var angle = getAngle(angx, angy);
        if (angle >= -135 && angle <= -45) {
            result = 1;
        } else if (angle > 45 && angle < 135) {
            result = 2;
        } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
            result = 3;
        } else if (angle >= -45 && angle <= 45) {
            result = 4;
        }
 
        return result;
    }
    //手指接触屏幕
    document.addEventListener("touchstart", function(e) {
        startx = e.touches[0].pageX;
        starty = e.touches[0].pageY;
    }, false);
    //手指离开屏幕
    document.addEventListener("touchend", function(e) {
        var endx, endy;
        endx = e.changedTouches[0].pageX;
        endy = e.changedTouches[0].pageY;
        var direction = getDirection(startx, starty, endx, endy);
        switch (direction) {
            case 0:
                alert("未滑动！");
                break;
            case 1:
                alert("向上！")
                break;
            case 2:
                alert("向下！")
                break;
            case 3:
                alert("向左！")
                break;
            case 4:
                alert("向右！")
                break;
            default:
        }
    }, false);

```

<Br>

#### js手势

```javascript
纯js 判断手势滑动方向

$('body').on('touchstart', '#gallerySlider img', function(e) {
var touch = e.originalEvent,
startX = touch.changedTouches[0].pageX;
startY = touch.changedTouches[0].pageY;
slider.on('touchmove', function(e) {
e.preventDefault();
touch = e.originalEvent.touches[0] ||
e.originalEvent.changedTouches[0];
if (touch.pageX - startX > 10) {
console.log("右划");
slider.off('touchmove');
showPrevious();
} else if (touch.pageX - startX < -10) {
console.log("左划");
slider.off('touchmove');
showNext();
};
if (touch.pageY - startY > 10) {
console.log("下划");
} else if (touch.pageY - startY < -10) {
console.log("上划");
};
});

        // Return false to prevent image 
        // highlighting on Android
        return false;

    }).on('touchend', function() {
        slider.off('touchmove');
    });

```

<Br>

#### iframe相关

```javascript
//解决 iframe 弹层问题
var parentHtml = window.parent.document.getElementsByTagName('html')[0]; // 获取父级页面高度

var parentIframe = window.parent.document.getElementById('iframe_act');  // 获取父级 #iframe 高度

var myIframeLayer = document.getElementById('iframeLayer');  //  获取子页面 #iframe div 高度

var parentHtml.style.height = parentHtml.clientHeight + 'px'; // 设置父级窗口大小

var parentHtml.style.overflow = 'hidden'; // 设置父级窗口大小

var parentIframe.style.height = parentHtml.clientHeight  + 'px'; // 设置 #iframe 窗口大小

var myIframeLayer.style.height = parentHtml.clientHeight + 'px'; // 设置子页面 #iframe div 窗口大小
```

<Br>

#### 如何采集页面卡顿的程度

```javascript
目前为止，我们已经知道了什么是卡顿、卡顿的发生原因、如何在 Chrome 中查看卡顿，接下来我们要想办法用 JS 获取页面的卡顿程度。

利用上述的原理：浏览器是单线程的，如果卡顿发生了那么后面队列堆积的方法就得不到执行。

假如我们配置一个定时器，每隔一段时间 t 就向浏览器的线程队列中丢一个方法进去：

如果线程队列是空闲的，那么我们理论上可以检查到我们的方式每次都是准时的间隔 t 被调用一次； 如果线程队列是繁忙的，那么这个间隔时间将是大于 t 的； 试验方案有了，接下来进行试验。

var t = new Date(); setInterval(function(){ console.log(new Date() - t); t = new Date(); }, 100);
```

<br>

#### iphone里的input

```javascript
<input type="file" accept="video/*;capture=camcorder"/>
<input type="file" accept="audio/*;capture=microphone"/>
<input type="file" accept="image/*;capture=camera"/>       //直接调用相机
<input type="file" accept="image/*"/>                      //调用相机 图片或者相册
```

<Br>

#### 点击弹窗modal以外区域消失

```javascript
//点击弹窗空白区域关闭
var modalDom = document.getElementById('modal')
window.addEventListener('click',function(e){
    var _target_ = e.target;
    if(!modalDom.contains(_target_)){
        console.log('close modal')
    }
})
```

<Br>

#### margin-top-problem

```javascript
当两个空的块级元素嵌套时，如果内部的块设置有margin-top属性，而且父元素没有下边解决方法所述的特征，那么内部块的margin-top属性会绑架父元素（即将margin-top传递凌驾给了父元素）。
就好比一个小兵，看到上级有漏洞，就假传圣旨，利用漏洞扩张自己的权利。只要设置父元素的border（栅栏）或者padding（隔离墙），就能管住这个调皮的下属。
<div id="parrent"> <div id="box1"></div></div>
#parrent{ width:500px; height:300px; background:teal;}
#box1{ width:100px; height:100px; background:aqua; margin:20px;}
解决方法：
1、设置父元素或者自身的display:inline-block;
2、设置父元素的border:1px aqua solid;(>0)
3、设置父元素的padding:1px;(>0)
4、给父元素设置overflow:hidden;
5、给父元素或者自身设置position:absolute;
6、设置父元素非空，填充一定的内容。
这个现象并不是bug，而是有理论依据的：
《on having layout》
hasLayout 会影响一个盒子和其子孙的边距重叠。根据规范，一个盒子如果没有上补白和上边框，那么它的上边距应该和其文档流中的第一个孩子元素的上边距重叠。
但值得一提的是，只有在FF和Chrome下才会出现这种margin-top绑架父节点的情况，在IE6 IE7中均显示正常，但这恰恰说明了他们是不符合规范的，而FF合Chrome则是严格遵守规范的。

```

<Br>

#### 重力感应

```javascript
function motionHandler(event) {
    var accGravity = event.accelerationIncludingGravity;
    document.getElementById("xg").innerHTML = accGravity.x;
    document.getElementById("yg").innerHTML = accGravity.y;
    document.getElementById("zg").innerHTML = accGravity.z;
}

if (window.DeviceMotionEvent) {
    window.addEventListener("devicemotion", motionHandler, false);
}
```

<Br>


#### 判断用户是否在当前页面

```javascript
document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        console.log('离开了')
    }else{
        console.log('回来了')
    }
}, false);
```

<br>

#### jsTips

```javascript
一般我们在让函数立即运行的时候 我们会用

    (function(){
      console.log('this is biu');
    })();
    
    

但，其实关于立即执行的函数还有另外的写法，这是传说中的黑魔法吗，哈哈哈

正文从这里开始，写法如下:

    ~function(){
      console.log('this is biu');
    }();
    
    void function(){
      console.log('this is biu');
    }();

```


#### JavaScript类型转换(上)


```javascript

转发 @野狗 的文章哈；

正文从这里开始:

JavaScript 数据类型

JavaScript中能够容纳值的数据类型有五种：

string
number
boolean
object
function

其中对象类型又分为三种：

Object
Date
Array

另外两种为不能容纳值的数据类型：

null
undefined

typeof 操作符

你可以使用typeof操作符来查看JavaScript变量的数据类型。

示例

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

注意：

NaN 的数据类型为number
数组的数据类型为object
日期的数据类型为object
null的数据类型为object
未声明变量的数据类型为undefined

typeof 的数据类型

typeof 操作符并非变量。 因为它是一个操作符。同样，操作符( + - * / ) 没有任何数据类型。

typeof的返回值是字符串。

constructor属性

constructor 属性返回所有JavaScript变量的构造函数。

示例

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


你可以通过检查constructor属性以判断某个对象类型是否是Array (包含关键字"Array")：

示例

function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}

同样，你也可以通过检查constructor属性以判断某个对象类型是否是Date (包含关键词"Date")：

示例

function isDate(myDate) {
    return myDate.constructor.toString().indexOf("Date") > -1;
}

JavaScript 类型转换

JavaScript变量可以被转换为另外一种数据类型的新变量 ：

使用JavaScript函数的方式
JavaScript的自动转换机制

转换Numbers为Strings

全局方法String() 可以转换numbers为strings。

该函数可以使用在任意类型的数字、字面量、变量或表达式：

示例

String(x)         
// 返回从变量x转换来的字符串

String(123)       
// 返回从字面量123转换来的字符串

String(100 + 23)  
// 返回从表达式转换来的字符串


Number对象的toString() 方法也可以达到同样效果。

示例

x.toString()
(123).toString()
(100 + 23).toString()

转换 Booleans 为 Strings

全局方法String() 也可以转换 booleans 为 strings。

String(false)        
// 返回"false"

String(true)         
// 返回"true"

Boolean 对象的toString() 方法也可以达到同样效果。

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


#### 面试题目整理

```javascript
# -面试题目整理
面试题目整理


转载 @野狗 整理的一片文章哈;

正文从这里开始:


HTML&CSS
----------------------------

1. 常用那几种浏览器测试？有哪些内核(Layout Engine)?
(Q1) 浏览器：IE，Chrome，FireFox，Safari，Opera。
(Q2) 内核：Trident，Gecko，Presto，Webkit。

2. 说下行内元素和块级元素的区别？行内块元素的兼容性使用？（IE8 以下）
(Q1) 行内元素：会在水平方向排列，不能包含块级元素，设置width无效，height无效(可以设置line-height)，margin上下无效，padding上下无效。
块级元素：各占据一行，垂直方向排列。从新行开始结束接着一个断行。
(Q2) 兼容性：display:inline-block;*display:inline;*zoom:1;

3. 清除浮动有哪些方式？比较好的方式是哪一种？
(Q1)
（1）父级div定义height。
（2）结尾处加空div标签clear:both。
（3）父级div定义伪类:after和zoom。
（4）父级div定义overflow:hidden。
（5）父级div定义overflow:auto。
（6）父级div也浮动，需要定义宽度。
（7）父级div定义display:table。
（8）结尾处加br标签clear:both。
(Q2) 比较好的是第3种方式，好多网站都这么用。

4. box-sizing常用的属性有哪些？分别有什么作用？
(Q1)box-sizing: content-box|border-box|inherit;
(Q2)content-box:宽度和高度分别应用到元素的内容框。在宽度和高度之外绘制元素的内边距和边框(元素默认效果)。
border-box:元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制。通过从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度。

5. Doctype作用？标准模式与兼容模式各有什么区别?
(Q1) <!DOCTYPE>告知浏览器的解析器用什么文档标准解析这个文档。DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。
(Q2) 标准模式的排版和JS运作模式都是以该浏览器支持的最高标准运行。在兼容模式中，页面以宽松的向后兼容的方式显示,模拟老式浏览器的行为以防止站点无法工作。

6. HTML5 为什么只需要写 <!DOCTYPE HTML>？
HTML5不基于 SGML，因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为（让浏览器按照它们应该的方式来运行）。
而HTML4.01基于SGML,所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型。

7. 页面导入样式时，使用link和@import有什么区别？
（1）link属于XHTML标签，除了加载CSS外，还能用于定义RSS, 定义rel连接属性等作用；而@import是CSS提供的，只能用于加载CSS;
（2）页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载;
（3）import是CSS2.1 提出的，只在IE5以上才能被识别，而link是XHTML标签，无兼容问题。

8. 介绍一下你对浏览器内核的理解？
主要分成两部分：渲染引擎(layout engineer或Rendering Engine)和JS引擎。
渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核。
JS引擎则：解析和执行javascript来实现网页的动态效果。
最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎。

9. html5有哪些新特性？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？
(Q1) 
HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加。
(1)绘画 canvas;
(2)用于媒介回放的 video 和 audio 元素;
(3)本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失;
(4)sessionStorage 的数据在浏览器关闭后自动删除;
(5)语意化更好的内容元素，比如 article、footer、header、nav、section;
(6)表单控件，calendar、date、time、email、url、search;
(7)新的技术webworker, websocket, Geolocation;
(Q2)
IE8/IE7/IE6支持通过document.createElement方法产生的标签，
可以利用这一特性让这些浏览器支持HTML5新标签，
浏览器支持新标签后，还需要添加标签默认的样式。
当然也可以直接使用成熟的框架、比如html5shim，
<!--[if lt IE 9]>
<script> src="http://html5shim.googlecode.com/svn/trunk/html5.js"</script>
<![endif]-->

10. 简述一下你对HTML语义化的理解？
用正确的标签做正确的事情。
html语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析;
即使在没有样式CSS情况下也以一种文档格式显示，并且是容易阅读的;
搜索引擎的爬虫也依赖于HTML标记来确定上下文和各个关键字的权重，利于SEO;
使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。



JavaScript
----------------------------

1. 介绍js的基本数据类型
Undefined、Null、Boolean、Number、String

2. js有哪些内置对象？
数据封装类对象：Object、Array、Boolean、Number 和 String
其他对象：Function、Arguments、Math、Date、RegExp、Error

3. this对象的理解
this总是指向函数的直接调用者（而非间接调用者）；
如果有new关键字，this指向new出来的那个对象；
在事件中，this指向触发这个事件的对象，特殊的是，IE中的attachEvent中的this总是指向全局对象Window。

4. eval是做什么的？
它的功能是把对应的字符串解析成JS代码并运行；
应该避免使用eval，不安全，非常耗性能（2次，一次解析成js语句，一次执行）。
由JSON字符串转换为JSON对象的时候可以用eval，var obj =eval('('+ str +')')。

5. DOM怎样添加、移除、移动、复制、创建和查找节点
// 创建新节点
createDocumentFragment()    //创建一个DOM片段
createElement()   //创建一个具体的元素
createTextNode()   //创建一个文本节点
// 添加、移除、替换、插入
appendChild()
removeChild()
replaceChild()
insertBefore() //在已有的子节点前插入一个新的子节点
// 查找
getElementsByTagName()    //通过标签名称
getElementsByName()    //通过元素的Name属性的值(IE容错能力较强，会得到一个数组，其中包括id等于name值的)
getElementById()    //通过元素Id，唯一性

6. null和undefined的区别？
null是一个表示"无"的对象，转为数值时为0；undefined是一个表示"无"的原始值，转为数值时为NaN。
undefined：
（1）变量被声明了，但没有赋值时，就等于undefined。
（2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。
（3）对象没有赋值的属性，该属性的值为undefined。
（4）函数没有返回值时，默认返回undefined。
null：
（1） 作为函数的参数，表示该函数的参数不是对象。
（2） 作为对象原型链的终点。

7. new操作符具体干了什么呢?
（1）创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。
（2）属性和方法被加入到 this 引用的对象中。
（3）新创建的对象由 this 所引用，并且最后隐式的返回 this 。

8. JSON 的了解？
JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。它是基于JavaScript的一个子集。数据格式简单, 易于读写, 占用带宽小。
格式：采用键值对，例如：{'age':'12', 'name':'back'}

9. call() 和 apply() 的区别和作用？
apply()函数有两个参数：第一个参数是上下文，第二个参数是参数组成的数组。如果上下文是null，则使用全局对象代替。
如：function.apply(this,[1,2,3]);
call()的第一个参数是上下文，后续是实例传入的参数序列。
如：function.call(this,1,2,3);

10. 如何获取UA？
    function whatBrowser() {  
        document.Browser.Name.value=navigator.appName;  
        document.Browser.Version.value=navigator.appVersion;  
        document.Browser.Code.value=navigator.appCodeName;  
        document.Browser.Agent.value=navigator.userAgent;  
    }  

其他
----------------------------

1. HTTP状态码知道哪些？
100  Continue  继续，一般在发送post请求时，已发送了http header之后服务端将返回此信息，表示确认，之后发送具体参数信息
200  OK   正常返回信息
201  Created  请求成功并且服务器创建了新的资源
202  Accepted  服务器已接受请求，但尚未处理
301  Moved Permanently  请求的网页已永久移动到新位置。
302 Found  临时性重定向。
303 See Other  临时性重定向，且总是使用 GET 请求新的 URI。
304  Not Modified  自从上次请求后，请求的网页未修改过。
400 Bad Request  服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求。
401 Unauthorized  请求未授权。
403 Forbidden  禁止访问。
404 Not Found  找不到如何与 URI 相匹配的资源。
500 Internal Server Error  最常见的服务器端错误。
503 Service Unavailable 服务器端暂时无法处理请求（可能是过载或维护）。

2. 你有哪些性能优化的方法？
（1） 减少http请求次数：CSS Sprites, JS、CSS源码压缩、图片大小控制合适；网页Gzip，CDN托管，data缓存 ，图片服务器。
（2） 前端模板 JS+数据，减少由于HTML标签导致的带宽浪费，前端用变量保存AJAX请求结果，每次操作本地变量，不用请求，减少请求次数
（3） 用innerHTML代替DOM操作，减少DOM操作次数，优化javascript性能。
（4） 当需要设置的样式很多时设置className而不是直接操作style。
（5） 少用全局变量、缓存DOM节点查找的结果。减少IO读取操作。
（6） 避免使用CSS Expression（css表达式)又称Dynamic properties(动态属性)。
（7） 图片预加载，将样式表放在顶部，将脚本放在底部  加上时间戳。

3. 什么叫优雅降级和渐进增强？
优雅降级：Web站点在所有新式浏览器中都能正常工作，如果用户使用的是老式浏览器，则代码会检查以确认它们是否能正常工作。由于IE独特的盒模型布局问题，针对不同版本的IE的hack实践过优雅降级了,为那些无法支持功能的浏览器增加候选方案，使之在旧式浏览器上以某种形式降级体验却不至于完全失效。
渐进增强：从被所有浏览器支持的基本功能开始，逐步地添加那些只有新式浏览器才支持的功能,向页面增加无害于基础浏览器的额外样式和功能的。当浏览器支持时，它们会自动地呈现出来并发挥作用。

4. 哪些常见操作会造成内存泄漏？
内存泄漏指任何对象在您不再拥有或需要它之后仍然存在。
垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量。如果一个对象的引用数量为 0（没有其他对象引用过该对象），或对该对象的惟一引用是循环的，那么该对象的内存即可回收。
setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏。
闭包、控制台日志、循环（在两个对象彼此引用且彼此保留时，就会产生一个循环）。

5. 线程与进程的区别
一个程序至少有一个进程,一个进程至少有一个线程。
线程的划分尺度小于进程，使得多线程程序的并发性高。 
另外，进程在执行过程中拥有独立的内存单元，而多个线程共享内存，从而极大地提高了程序的运行效率。 
线程在执行过程中与进程还是有区别的。每个独立的线程有一个程序运行的入口、顺序执行序列和程序的出口。但是线程不能够独立执行，必须依存在应用程序中，由应用程序提供多个线程执行控制。 
从逻辑角度来看，多线程的意义在于一个应用程序中，有多个执行部分可以同时执行。但操作系统并没有将多个线程看做多个独立的应用，来实现进程的调度和管理以及资源分配。这就是进程和线程的重要区别。

```


#### cursor

```javascript
今天说说怎么样将一个鼠标光标自定成为一个自己想要的图片；

其实很简单：

一、将 png 或者 jpg 转成成 ico 格式；

二、在样式里面设置

span{
cursor: url($img_dir + 'xxx.ico'),default;
}
```


#### math

```javascript
`abs(x)	返回数的绝对值`<br>
`acos(x)	返回数的反余弦值`<br>
`asin(x)	返回数的反正弦值`<br>
`atan(x)	以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值`<Br>
`atan2(y,x)	返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）`<br>
`ceil(x)	对数进行上舍入`<br>
`cos(x)	返回数的余弦`<Br>
`exp(x)	返回 e 的指数`<br>
`floor(x)	对数进行下舍入`<br>
`log(x)	返回数的自然对数（底为e）`<br>
`max(x,y)	返回 x 和 y 中的最高值`<br>
`min(x,y)	返回 x 和 y 中的最低值`<br>
`pow(x,y)	返回 x 的 y 次幂`<br>
`random()	返回 0 ~ 1 之间的随机数`<br>
`round(x)	把数四舍五入为最接近的整数`<br>
`sin(x)	返回数的正弦`<br>
`sqrt(x)	返回数的平方根`<br>
`tan(x)	返回角的正切`<br>
`toSource()	返回该对象的源代码`<br>
`valueOf()	返回 Math 对象的原始值`<br>
```


#### meta

```javascript

content的几个属性：<br>
width viewport的宽度[device-width | pixel_value]width如果直接设置pixel_value数值，大部分的安卓手机不支持，但是ios支持；<br>
height – viewport 的高度 （范围从 223 到 10,000 ）<br>
user-scalable [yes | no]是否允许缩放<br>
initial-scale [数值] 初始化比例（范围从 > 0 到 10）<br>
minimum-scale [数值] 允许缩放的最小比例<br>
maximum-scale [数值] 允许缩放的最大比例<br>
target-densitydpi 值有以下（一般推荐设置中等响度密度或者低像素密度，后者设置具体的值dpi_value，另外webkit内核已不准备再支持此属性）<br>
-- dpi_value 一般是70-400//没英寸像素点的个数<br>
-- device-dpi设备默认像素密度<br>
-- high-dpi 高像素密度<br>
-- medium-dpi 中等像素密度<br>
-- low-dpi 低像素密度<br>

###例如
`<meta name="viewport" content="width=device-width,height=device-height, user-scalable=no,initial-scale=1, minimum-scale=1, maximum-scale=1,target-densitydpi=device-dpi ">`


###name之format-detection忽略电话号码和邮箱

`<meta name="format-detection" content="telephone=no">`<br>
说明：忽略页面中的数字识别为电话号码

`<meta name="format-detection" content="email=no"/>`<br>
说明：忽略页面中的邮箱格式为邮箱

也可以写成：
`<meta name="format-detection" content="telphone=no, email=no"/>`<br>
`<meta name="format-detection" content="telphone=no, email=no"/>`<br>



###name之设置作者姓名及联系方式

`<meta name="author" contect="name, xxx@163.com" />`<br>
说明：设置作者姓名及联系方式



###其他
`<meta charset='utf-8'>`<br>
声明文档使用的字符编码

`<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>`<br>
优先使用 IE 最新版本和 Chrome

`<meta name="description" content="不超过150个字符"/>`<br>
页面描述

`<meta name="keywords" content=""/>`<br>
页面关键词

`<meta name="robots" content="index,follow"/>`<br>
搜索引擎抓取

`<meta name="renderer" content="webkit">`<br>
启用360浏览器的极速模式(webkit)

`<meta http-equiv="X-UA-Compatible" content="IE=edge">`<br>
避免IE使用兼容模式

`<meta http-equiv="Cache-Control" content="no-siteapp" />`<br>
不让百度转码

`<meta name="HandheldFriendly" content="true">`<br>
针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓

`<meta name="MobileOptimized" content="320">`<br>
微软的老式浏览器

`<meta name="screen-orientation" content="portrait">`<br>
uc强制竖屏

`<meta name="x5-orientation" content="portrait">`<br>
QQ强制竖屏

`<meta name="full-screen" content="yes">`<br>
UC强制全屏

`<meta name="x5-fullscreen" content="true">`<br>
QQ强制全屏

`<meta name="browsermode" content="application">`<br>
UC应用模式

`<meta name="x5-page-mode" content="app">`<br>
QQ应用模式

`<link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml"/>`<br>
添加 RSS 订阅

`<link rel="shortcut icon" type="image/ico" href="/favicon.ico"/>`<br>
添加 favicon icon

参考微博API<br>
`<meta property="og:type" content="类型" />`<br>

`<meta property="og:url" content="URL地址" />`<br>

`<meta property="og:title" content="标题" />`<br>

`<meta property="og:image" content="图片" />`<br>

`<meta property="og:description" content="描述" />`<br>

`<meta name="msapplication-TileColor" content="#000"/>`<br>
Windows 8 磁贴颜色

`<meta name="msapplication-TileImage" content="icon.png"/>`<br>
Windows 8 磁贴图标

`<meta name="msapplication-tap-highlight" content="no">`<br>
windows phone 点击无高光




#ios系统的meta/link设置：

###开启对web app程序的支持

`<meta name="apple-mobile-web-app-capable" content="yes">`<br>
说明：网站开启对web app程序的支持，其实意思就是删除默认的苹果工具栏和菜单栏，开启全屏显示

###改变顶部状态条的颜色；

`<meta name="apple-mobile-web-app-status-bar-style" content="black" />`<br>
说明：在 web app 应用下状态条（屏幕顶部条）的颜色；<br>
      默认值为 default（白色），可以定为 black（黑色）和 black-translucent（灰色半透明）；

###设置“添加到主屏幕图标

Safari 浏览器有一个“添加到主屏幕”的功能，用户可以像保存书签一样把一个网站添加到主屏幕，下次用户直接点击主屏幕上的图标就能进入网站。

这个功能不仅方便用户快速访问我们的网站，而且也使我们的 WebApp 更像一个原生应用

因为 iOS 分辨率，所以 icon.png 图片的尺寸也各不相同，我们可以通过sizes属性来分别定义，iOS 系统会自动获取向匹配的图片：

<pre><code>
&lt;span"&gt;<br>
&lt;!-- iOS 图标 begin -->  <br>
        &lt;link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-57x57-precomposed.png"/&gt; <br>
        &lt;!-- iPhone 和 iTouch，默认 57x57 像素，必须有 --&gt;  <br>
        &lt;link rel="apple-touch-icon-precomposed" sizes="114x114" href="/apple-touch-icon-114x114-precomposed.png"/&gt;  <br>
        &lt;!-- Retina iPhone 和 Retina iTouch，114x114 像素，可以没有，但推荐有 --&gt;  <br>
        &lt;link rel="apple-touch-icon-precomposed" sizes="144x144" href="/apple-touch-icon-144x144-precomposed.png"/&gt; <br>
        &lt;!-- Retina iPad，144x144 像素，可以没有，但推荐有 --&gt;  <br>
&lt;!-- iOS 图标 end --&gt;</span &gt;<br>
</code></pre>



###为用户加上提示

通过添加一个JavaScript代码来邀请用户添加到主屏幕，该库使用了HTML5的本地存储跟踪是否已经显示过了，以避免重复出现。

目前使用比较多和有在更新的一个库来自这里：[]!http://cubiq.org/add-to-home-screen


###设置桌面图标的标题

为了在主屏达到最好的显示效果，title最好限制在六个中文长度内，超长的内容会被隐藏：

添加到主屏后的标题（iOS 6 新增）

`<span style="font-size:14px;"><meta name="apple-mobile-web-app-title" content="标题"></span>`<br>



###设置启动画面

当用户点击主屏图标打开 WebApp 时，系统会展示启动画面，在未设置情况下系统会默认显示该网站的首页截图，当然这个体验不是很好，所以我们需要通过以下代码来自定义启动画面：

`<link rel="apple-touch-startup-image" href="Startup.png" />`



###根据 iOS 设备的分辨率，其启动画面的图片尺寸也各不相同所以：

<pre><code>
&lt;!-- iOS 启动画面 begin --&gt;
        &lt;link rel="apple-touch-startup-image" sizes="768x1004" href="/splash-screen-768x1004.png"/&gt;  
        &lt;!-- iPad 竖屏 768 x 1004（标准分辨率） --&gt; 
        &lt;link rel="apple-touch-startup-image" sizes="1536x2008" href="/splash-screen-1536x2008.png"/&gt;  
        &lt;!-- iPad 竖屏 1536x2008（Retina） --&gt;
        &lt;link rel="apple-touch-startup-image" sizes="1024x748" href="/Default-Portrait-1024x748.png"/&gt;  
        &lt;!-- iPad 横屏 1024x748（标准分辨率） --&gt;  
        &lt;link rel="apple-touch-startup-image" sizes="2048x1496" href="/splash-screen-2048x1496.png"/&gt;  
        &lt;!-- iPad 横屏 2048x1496（Retina） --&gt; 
        &lt;link rel="apple-touch-startup-image" href="/splash-screen-320x480.png"/&gt;  
        &lt;!-- iPhone/iPod Touch 竖屏 320x480 (标准分辨率) --&gt;  
        &lt;link rel="apple-touch-startup-image" sizes="640x960" href="/splash-screen-640x960.png"/&gt;  
        &lt;!-- iPhone/iPod Touch 竖屏 640x960 (Retina) --&gt;  
        &lt;link rel="apple-touch-startup-image" sizes="640x1136" href="/splash-screen-640x1136.png"/&gt;  
        &lt;!-- iPhone 5/iPod Touch 5 竖屏 640x1136 (Retina) --&gt; 
    &lt;!-- iOS 启动画面 end --&gt;  
</pre></code>

或者以下代码，具体没有实践，还需考证
<pre><code>
&lt;!!-- iPhone SPLASHSCREEN--&gt;<br>
      &lt;!link href="http://wlog.cn/html/"apple-touch-startup-image-320x460.png" media="(device-width: 320px)" rel="apple-touch-startup-image" /&gt;<br>
      &lt;!!-- iPhone (Retina) SPLASHSCREEN--&gt;<br>
      &lt;!link href="apple-touch-startup-image-640x920.png" media="(device-width: 320px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" /&gt;<br>
      &lt;!!-- iPad (portrait) SPLASHSCREEN--&gt;<br>
      &lt;!link href="apple-touch-startup-image-768x1004.png" media="(device-width: 768px) and (orientation: portrait)" rel="apple-touch-startup-image" /&gt;<br>
      &lt;!!-- iPad (landscape) SPLASHSCREEN--&gt;<br>
      &lt;!link href="apple-touch-startup-image-748x1024.png" media="(device-width: 768px) and (orientation: landscape)" rel="apple-touch-startup-image" /&gt;<br>
      &lt;!!-- iPad (Retina, portrait) SPLASHSCREEN--&gt;<br>
      &lt;!link href="apple-touch-startup-image-1536x2008.png" media="(device-width: 1536px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" /&gt;<br>
      &lt;!!-- iPad (Retina, landscape) SPLASHSCREEN--&gt;<br>
&lt;link href="apple-touch-startup-image-1496x2048.png"media="(device-width: 1536px)  and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)"rel="apple-touch-startup-image" /&gt;<br>
</pre></code>



###添加智能 App 广告条 Smart App Banner（iOS 6+ Safari）
`<meta name="apple-itunes-app" content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL">`



###比较常用的meta
以下代码参考网址：view-source:三个w点adinnet点cn斜杠service斜杠3d点html

<pre><code>
&lt;!--[if lt IE 7 ]><html class="oldie ie ie6"> <![endif]--&gt;<br>
&lt;!--[if IE 7 ]><html class="oldie ie ie7"> <![endif]--&gt;<br>
&lt;!--[if IE 8 ]><html class="ie ie8"> <![endif]--&gt;<br>
&lt;!--[if (gte IE 9)|!(IE)]&gt;&lt;!--&gt;&lt;html&gt; &lt;!--<![endif]--&gt;<br>
&lt;head&gt;<br>
&lt;meta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt;<br>
&lt;title></title&gt;<br>
&lt;meta name="keywords" content="" /&gt;<br>
&lt;meta name="description" content="" /&gt;<br>
&lt;meta name="title" content="" />
&lt;meta name="author" content="-06" /&gt;<br>
&lt;meta name="Copyright" content="" /&gt;<br>
&lt;!-- 让IE浏览器用最高级内核渲染页面 还有用 Chrome 框架的页面用webkit 内核
================================================== --&gt;<br>
&lt;meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"&gt;<br>
&lt;!-- IOS6全屏 Chrome高版本全屏
================================================== --&gt;<br>
&lt;meta name="apple-mobile-web-app-capable" content="yes"&gt;<br>
&lt;meta name="mobile-web-app-capable" content="yes"&gt;<br> 
&lt;!-- 让360双核浏览器用webkit内核渲染页面
================================================== --&gt;<br>
&lt;meta name="renderer" content="webkit"&gt;<br>
&lt;!-- Mobile Specific Metas
================================================== --&gt;<br>
&lt;!-- !!!注意 minimal-ui 是IOS7.1的新属性，最小化浏览器UI --&gt;<br>
&lt;meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"&gt;<br>
&lt;meta name="format-detection" content="telephone=no"&gt;<br>
&lt;!-- CSS
================================================== --&gt;<br>
&lt;link href="/css/reset.css" rel="stylesheet" type="text/css"&gt;<br>
&lt;link href="/css/magicwall.css" rel="stylesheet" type="text/css"&gt;<br>
&lt;link  href="/css/jquery.gridster.css" rel="stylesheet" type="text/css"&gt;<br>
&lt;link href="/css/case.css" rel="stylesheet" type="text/css"&gt;<br>
&lt;link href="/css/case_1280.css" rel="stylesheet" type="text/css"&gt;<br>
&lt;link href="/css/case_1024.css" rel="stylesheet" type="text/css"&gt;<br>
&lt;link href="/css/case_640.css" rel="stylesheet" type="text/css"&gt;<br>
&lt;link href="/css/case_320.css" rel="stylesheet" type="text/css"&gt;<br>
&lt;link href="/css/style_retina.css" rel="stylesheet" type="text/css"&gt;<br>
&lt;!--[if lt IE 9]&gt;<br>
&lt;script src="http://cdn.bootcss.com/html5shiv/r29/html5.js"&gt;<br></script&gt;<br>
&lt;![endif]--&gt;<br>
&lt;!-- Favicons
================================================== --&gt;<br>
&lt;link rel="shortcut icon" href="favicon.ico" &gt;<br>
&lt;!-- Android 主屏图标
================================================== --&gt;<br>  
&lt;link rel="icon" sizes="196x196" href="/images/apple-touch-icon-152x152.png"&gt;<br>
&lt;!-- IOS 主屏图标
================================================== -->
&lt;link rel="apple-touch-icon-precomposed" href="/images/apple-touch-icon-76x76.png"&gt;<br>
&lt;link rel="apple-touch-icon-precomposed" sizes="76x76" href="/images/apple-touch-icon-76x76.png"&gt;<br>
&lt;link rel="apple-touch-icon-precomposed" sizes="120x120" href="/images/apple-touch-icon-120x120.png"&gt;<br>
&lt;link rel="apple-touch-icon-precomposed" sizes="152x152" href="/images/apple-touch-icon-152x152.png"&gt;<br>
&lt;link rel="apple-touch-startup-image" href="/startup-748x1024.jpg" 
media="screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:landscape)"&gt;<br>
&lt;link rel="apple-touch-startup-image" href="/startup-768x1004.jpg" 
media="screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:portrait)"&gt;<br>
</pre></code>


###整理
meta属性在HTML中占据了很重要的位置。如：针对搜索引擎的SEO，文档的字符编码，设置刷新缓存等。虽然一些网页可能没有使用meta，但是作为正规军，我们还是有必要了解一些meta的属性，并且能够熟练使用它们。 
声明文档使用的字符编码

`<meta charset='utf-8'>`<br>

`<meta http-equiv="X-UA-Compatible" content="IE=edge" />`<br>
指示IE以目前可用的最高模式显示内容

`<meta http-equiv="X-UA-Compatible" content="IE=Emulate IE7" />`<br>
指示IE使用 <!DOCTYPE> 指令确定如何呈现内容。标准模式指令以IE7标准模式显示，而 Quirks 模式指令以 IE5 模式显示。`


###SEO 优化

&lt;meta name="description" content="不超过150个字符" /&lt;<br>
页面描述

&lt;meta name="keywords" content="html5, css3, 关键字"/&lt;<br>
页面关键词

&lt;meta name="author" content="魔法小栈" /&lt;<br>
定义网页作者

&lt;meta name="robots" content="index,follow" /&lt;<br>
定义网页搜索引擎索引方式，robotterms是一组使用英文逗号「,」分割的值，通常有如下几种取值：none，noindex，nofollow，all，index和follow。



###为移动设备添加 viewport
&lt;meta name ="viewport" content ="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"&gt;<br>
      content 参数解释：<Br>
      width  　　　　 viewport 宽度(数值/device-width)<Br>
      height            viewport 高度(数值/device-height)<Br>
      initial-scale  初始缩放比例<Br>
      maximum-scale  最大缩放比例<Br>
      minimum-scale  最小缩放比例<Br>
      user-scalable  是否允许用户缩放(yes/no)<Br>
      minimal-ui      iOS 7.1 beta 2 中新增属性，可以在页面加载时最小化上下状态栏。这是一个布尔值，可以直接这样写：<Br>
&lt;meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui"&gt;<br>


###iOS 设备

&LT;meta name="apple-mobile-web-app-title" content="标题"&gT;?<Br>
添加到主屏后的标题（iOS 6 新增）<Br>

&LT;meta name="apple-mobile-web-app-capable" content="yes" /&gT;<Br>
是否启用 WebApp 全屏模式<Br>

&LT;meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /&gt;<Br>
设置状态栏的背景颜色<Br>

只有在 "apple-mobile-web-app-capable" content="yes" 时生效<Br>

content 参数：<Br>

default 默认值。<Br>

black 状态栏背景是黑色。

black-translucent 状态栏背景是黑色半透明。

设置为 default 或 black ,网页内容从状态栏底部开始。

设置为 black-translucent ,网页内容充满整个屏幕，顶部会被状态栏遮挡。


###iOS 图标 rel 参数

apple-touch-icon 图片自动处理成圆角和高光等效果。<Br>

apple-touch-icon-precomposed 禁止系统自动添加效果，直接显示设计原图。<Br>

&lt;link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-57x57-precomposed.png" /&gt;<Br>
iPhone 和 iTouch，默认 57x57 像素，必须有

&lt;link rel="apple-touch-icon-precomposed" sizes="72x72" href="/apple-touch-icon-72x72-precomposed.png" /&gt;<Br>
iPad，72x72 像素，可以没有，但推荐有

&lt;link rel="apple-touch-icon-precomposed" sizes="114x114" href="/apple-touch-icon-114x114-precomposed.png" /&gt;<Br>
Retina iPhone 和 Retina iTouch，114x114 像素，可以没有，但推荐有

&lt;link rel="apple-touch-icon-precomposed" sizes="144x144" href="/apple-touch-icon-144x144-precomposed.png" /&gt;<Br>
Retina iPad，144x144 像素，可以没有，推荐大家使用

&lt;meta name="apple-mobile-web-app-title" content="标题"&gt;<Br>
title最好限制在六个中文长度内，超长的内容会被隐藏，添加到主屏后的标题（iOS 6 新增）



###iOS 启动画面

iPad 的启动画面是不包括状态栏区域的。

iPad 竖屏 768 x 1004（标准分辨率）

&lt;link rel="apple-touch-startup-image" sizes="768x1004" href="/splash-screen-768x1004.png" /&gt;<br>
iPad 竖屏 1536x2008（Retina）

&lt;link rel="apple-touch-startup-image" sizes="1536x2008" href="/splash-screen-1536x2008.png" /&gt;<br>iPad 横屏 1024x748（标准分辨率）

&lt;link rel="apple-touch-startup-image" sizes="1024x748" href="/Default-Portrait-1024x748.png" /&gt;<br>
iPad 横屏 2048x1496（Retina）

&lt;link rel="apple-touch-startup-image" sizes="2048x1496" href="/splash-screen-2048x1496.png" /&gt;<br>
iPhone 和 iPod touch 的启动画面是包含状态栏区域的。

iPhone/iPod Touch 竖屏 320x480 (标准分辨率)

&lt;link rel="apple-touch-startup-image" href="/splash-screen-320x480.png" /&gt;<br>
iPhone/iPod Touch 竖屏 640x960 (Retina)

&lt;link rel="apple-touch-startup-image" sizes="640x960" href="/splash-screen-640x960.png" /&gt;<br>
iPhone 5/iPod Touch 5 竖屏 640x1136 (Retina)

&lt;link rel="apple-touch-startup-image" sizes="640x1136" href="/splash-screen-640x1136.png" /&gt;<br>

&lt;link rel="apple-touch-startup-image" href="Startup.png" /&gt;<br>
当用户点击主屏图标打开 WebApp 时，系统会展示启动画面，在未设置情况下系统会默认显示该网站的首页截图，当然这个体验不是很好



###Windows 8

&lt;meta name="msapplication-TileColor" content="#000"/&gt;<br>
Windows 8 磁贴颜色

&lt;meta name="msapplication-TileImage" content="icon.png"/&gt;<br>
Windows 8 磁贴图标



###不常用的

&lt;link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml" /&gt;<br>
添加 RSS 订阅

&lt;link rel="shortcut icon" type="image/ico" href="/favicon.ico" /&gt;<br>
添加 favicon icon

&lt;meta name="format-detection" content="telephone=no" /&gt;<br>
禁止数字识自动别为电话号码

&lt;meta name="format-detection" content="email=no" /&gt;<br>
不让android识别邮箱

&lt;meta name="renderer" content="webkit"&gt;<br>
启用360浏览器的极速模式(webkit)

&lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;<br>
避免IE使用兼容模式

&lt;meta name="HandheldFriendly" content="true"&gt;<br>
针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓

&lt;meta name="MobileOptimized" content="320"&gt;<br>
微软的老式浏览器

&lt;meta name="x5-orientation" content="portrait"&gt;<br>
QQ强制竖屏

&lt;meta name="full-screen" content="yes"&gt;<br>
UC强制全屏
&lt;meta name="x5-fullscreen" content="true"&gt;<br>
QQ强制全屏

&lt;meta name="browsermode" content="application"&gt;<br>
UC应用模式

&lt;meta name="x5-page-mode" content="app"&gt;<br>
QQ应用模式

&lt;meta http-equiv="Cache-Control" content="no-siteapp" /&gt;<br>
禁止百度转码

&lt;meta name="msapplication-tap-highlight" content="no"&gt;<br>
windows phone 点击无高光

&lt;meta name="keywords" content="" /&gt;<br>
关键字

&lt;meta name="description" content="" /&gt;<br>
描述

&lt;meta name="title" content="" /&gt;<br>
标题

&lt;meta name="author" content="-06" /&gt;<br>
作者

&lt;meta name="Copyright" content="" /&gt;<br>
公司

&lt;meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"&gt;<br>
让IE浏览器用最高级内核渲染页面 还有用 Chrome 框架的页面用webkit 内核 

&lt;meta name="apple-mobile-web-app-capable" content="yes"&gt;<br>
IOS6全屏

&lt;meta name="mobile-web-app-capable" content="yes"&gt;<br>
Chrome高版本全屏

&lt;meta name="renderer" content="webkit"&gt;<br>
让360双核浏览器用webkit内核渲染页面

&lt;meta name="apple-itunes-app" content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL"&gt;<br>
添加智能 App 广告条 Smart App Banner（iOS 6+ Safari）



###sns 社交标签

&lt;meta property="og:type" content="类型" /&gt;

&lt;meta property="og:url" content="URL地址" /&gt;

&lt;meta property="og:title" content="标题" /&gt;

&lt;meta property="og:image" content="图片" /&gt;

&lt;meta property="og:description" content="描述" /&gt;
```



#### isNaN-Number-parseFloat-parseInt之间的不同

```javascript
# isNaN() Number() parseFloat() parseInt() 之间的不同


### 主要对几种相似的情况进行对比和加深了解
<br>


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

```


#### 透彻parseInt函数

```javascript
# 透彻 parseInt() 函数



### parseInt() 函数可解析一个字符串，并返回一个整数。
* 这个方法里面有部分规则和 parseFloat() 差不多，但是返回的是一个整数。
</br>
</br>

#### 如果是字符串 ；
* 1.字符串前面有空格会忽略，遇到小数点停止解析 ；
```
parseInt(' 111.11')  // 111 , 最前面的空格忽略
```
</br>
</br>

* 2.字符串中遇到非数字停止解析 ；
```
parseInt('11.22')  // 11 , 遇到非数字停止解析
parseInt('11 22')  // 11 , 遇到非数字停止解析
parseInt('11,22')  // 11 , 遇到非数字停止解析
```
</br>
</br>

* 3.首个字符串非数字的话直接返回NaN ；
```
parseInt('-')  // NaN , 首个字符串遇到非数字
parseInt('.111')  // NaN , 首个字符串遇到非数字
parseInt('hello world 111')  // NaN , 首个字符串遇到非数字
```
</br>
</br>

#### 如果是数字 ；
* 1.数字返回数字 ；
```
parseInt(123)  // 123 , 首个字符串遇到非数字
```
</br>
</br>


* 2.小数点返回整数 ；
```
parseInt(123.34)  // 123 , 遇到小数点停止解析
```
</br>
</br>

* 3.数字中有空格，英文报错 ；
```
parseInt(123 34)  // 报错 , Uncaught SyntaxError: missing ) after argument list
parseInt(123hellow34)  // 报错 , Uncaught SyntaxError: missing ) after argument list
```
</br>
</br>

* 4.遇到逗号停止解析 ；
```
parseInt(123,34)  // 123
```
</br>
</br>

>总结：parseFloat() 将字符串转换成数字。parseInt() 将字符串转换成整数。
* 不同的地方便是 parseFloat() 只要转换成数字就好。
* parseInt() 在将其转换成数字的时候还要转换成整数(即是没有小数点)。 
</br>
</br>

#### 了解更多
* [一分钟了解更多Css](https://github.com/biuxbiu/BessCss)
* [一分钟了解更多html](https://github.com/biuxbiu/BessHtml)
* [一分钟了解更多Javscript](https://github.com/biuxbiu/BeeJavascript)
</br>
</br>


```


#### 透彻parseFloat函数

```javascript
# 透彻 parseFloat() 函数



### parseFloat() 函数可解析一个字符串，并返回一个浮点数。
* 这个方法会去检查字符串中首个字符是不是数字，是则进行解析。直到解析到数字的末端结束。最终返回的是一个数字，不再是字符串。
</br>
</br>

#### 如果是字符串 ；
* 1.字符串前面有空格会忽略 ；
```
parseFloat(' 111')  // 111 , 最前面的空格忽略
parseFloat(' 111.11')  // 111.11 , 最前面的空格忽略
```
</br>
</br>

* 2.遇到第二个非数字停止（空格，小数点，英文） ；
```
parseFloat(' 111.11.11')  // 111.11 , 遇到第二个小数点停止解析
parseFloat(' 111.11 11')  // 111.11 , 遇到第二个空格停止解析
parseFloat(' 111.11hello')  // 111.11 , 遇到英文停止解析
```
</br>
</br>

* 3.首个字符串非数字的话直接返回NaN ；
```
parseFloat('hello world')  // NaN , 第一个非数字直接返回NaN
parseFloat('...')  // NaN , 第一个非数字直接返回NaN
parseFloat('/`1')  // NaN , 第一个非数字直接返回NaN
parseFloat('-')  // NaN , 第一个非数字直接返回NaN
```
</br>
</br>

#### 如果是数字（括号内没有引号） ；
* 1.符合条件的话会进行进制之间的转换 ；
```
parseFloat(020)  // 16 , 8进制转10进制
parseFloat(056)  // 46 , 8进制转10进制
```
</br>
</br>

* 2.数字前面空格的话会被忽略 ；
```
parseFloat( 1122)  // 1122 , 最前面的空格忽略
parseFloat( 11.22)  // 11.22 , 最前面的空格忽略
```
</br>
</br>

* 3.数字中出现空格或者英文，或者第二个小数点的话会报错 ；
```
parseFloat( 11 22)  // 报错 , Uncaught SyntaxError: missing ) after argument list
parseFloat( 11hello22)  // 报错 , Uncaught SyntaxError: Invalid or unexpected token
parseFloat( 11.22.33)  // 报错 , Uncaught SyntaxError: missing ) after argument list
```
</br>
</br>

* 4.数字中遇到第一个逗号便停止解析 ；
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

#### 了解更多
* [一分钟了解更多Css](https://github.com/biuxbiu/BessCss)
* [一分钟了解更多html](https://github.com/biuxbiu/BessHtml)
* [一分钟了解更多Javscript](https://github.com/biuxbiu/BeeJavascript)
</br>
</br>


```


#### 透彻Numbe函数

```javascript
# 透彻 Number() 函数



### Number() 函数把对象的值转换为数字

#### 1.如果是布尔值，true 和 false 分别转换成 1 和 0 ；
```
Number(true)  // 1 , true => 1
Number(false)  // 0 , false => 0
```
</br>
</br>

#### 2.如果是数字，则返回的是数字本身；
```
Number(0)  // 0 
Number(100)  // 100
```
</br>
</br>

#### 3.如果是 null 返回 0 ；
```
Number(null)  // 0 
```
</br>
</br>

#### 4.如果是 undefined 返回 NaN；
```
Number(undefined)  // NaN
```
</br>
</br>

#### 5.如果是字符串，则需要遵守下面的规则：
</br>

5-1.如果字符串里面是数字，直接转换成数字，前面有零或者空格去掉；
```
Number('011')  // 11 , 0 去掉
Number('022')  // 22 , 0 去掉
Number(' 011')  // 11 , 空格 去掉
Number(' 022')  // 22 , 空格 去掉
```
</br>
</br>

5-2.如果字符串里面有浮点数，直接转换成数字，前面有零会去掉；
```
Number('0000.11')  // 0.11 
```
</br>
</br>

5-3.如果字符串里面是空字符串，直接返回零；
```
Number('')  // 0
Number(' ')  // 0
```
</br>
</br>

5-4.如果数字之间有空格返回NaN ；
```
Number('11 11');  // NaN
```
</br>
</br>

5-4.如果多个小数点返回NaN ；
```
Number('11...11');  // NaN
Number('11.11.11');  // NaN
```
</br>
</br>

5-5.如果遇到逗号返回NaN ；
```
Number('11,11');  // 11
Number('11,11,11');  // 11
```
</br>
</br>

#### 6.如果是数字的情况下：

6-1.如果是整数字则返回整数；
```
Number(314);  // 314
```
</br>
</br>

6-2.如果是浮点数则返回浮点数；
```
Number(3.14);  // 3.14
```
</br>
</br>

6-2.如果是多个小数点则异常报错；
```
Number(3.14.3.14);  // Uncaught SyntaxError: missing ) after argument list
```
</br>
</br>

6-3.如果是数字前面空格则忽略；
```
Number( 314);  // 314
Number( 3.14);  // 3.14
```
</br>
</br>

6-4.如果是数字中间空格则异常报错；
```
Number(314 314);  // Uncaught SyntaxError: missing ) after argument list
Number(3.14 3.14);  // Uncaught SyntaxError: missing ) after argument list
```
</br>
</br>

6-5.如果遇到八进制，直接转换成十进制；
```
Number(020);  // 16
Number(070);  // 56
```
</br>
</br>

6-6.如果遇到逗号停止并输出逗号前；
```
Number(314,314);  // 314
Number(314,314,314);  // 314
Number(3.14,3.14);  // 3.14
Number(3.14,3.14,3.14);  // 3.14
```
</br>
</br>

#### 7.如果是数组的情况下（返回的值你可以理解为 5-5 / 6-4 ）：
```
Number([1]);  // 1;
Number([1,2])  // NaN;
Number(['1','2'])  // NaN
Number([1],[2])  // 1
```
</br>
</br>

#### 8.如果是null返回0：
```
Number(null);  // 0;
```
</br>
</br>

#### 9.Number 可以取最大的值、最小值、无穷大和无穷小。
```
Number.MAX_VALUE;  // 1.7976931348623157e+308 最大值
Number.MIN_VALUE;  // 5e-324 最小值
Number.POSITIVE_INFINITY;  // Infinity
Number.NEGATIVE_INFINITY;  // -Infinity
```
</br>
</br>

#### 总结：Number() 只会返回数字和NaN，个别不正常情况下会报错
</br>
</br>

#### 了解更多
* [一分钟了解更多Css](https://github.com/biuxbiu/BessCss)
* [一分钟了解更多html](https://github.com/biuxbiu/BessHtml)
* [一分钟了解更多Javscript](https://github.com/biuxbiu/BeeJavascript)
</br>
</br>


```


#### javascript中的LHS与RHS

```javascript
# 温故而知新，javascript 中的 LHS 与 RHS


今天我们来说一下 javascript 中的 LHS 与 RHS。
</br>
</br>

## 什么是 `LHS` ? 什么是 `RHS` ？

他们是 javascript 的两种查找类型。

从 L 和 R 我们可能已经猜出分别代表的是 left【左边】 和 right【右边】。

那么是什么的左边什么的右边呢？

你可以大概理解为是一个赋值操作【即 = 号】的左边还是右边。

更深层次的理解是，你只要判断出这个变量是被赋值还是取值就够了  
</br>
</br>
 
#### 当 `变量` 充当被赋值角色，我们称它为 `LHS`，

var text = 'hello world';  //变量 text 被赋值，所以是 LHS

#### 当 `变量` 充当取值角色，我们称它为 `RHS`。

console.log(text);  //变量 text 取值，所以是RHS

## 更深层次的理解 `LHS` 与 `RHS`

我们举个例子真正感受一下关于 `LHS` 和 `RHS` 的意思。

下面这个例子有多少处 `LHS` 和 `RHS` 呢？


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

## 了解 LHS 和 RHS 对我们的好处

我们知道 LHS 和 RHS 都是对变量来做定义的。但是处理不存在的变量的时候，处理结果是不同的。由于这种不同的处理结果，js 引擎会做出相关的报错信息，这对我们编程定位问题，解决问题是很有帮助的。
</br>
比如说：

num = 'hello world'  
//此处变量 num 充当的是被赋值的角色，在被赋值之前，会先去找一下变量 num 有没有被定义，没有被定义的话，会自动创建一个变量 num。
 
console.log(num2);
 //此处的 num2 充当了取值角色 -- RHS，但是该变量 num2 没有被赋值，那么控制面板会抛出错误 num2 is not defined。那我们就可以马上定位到这个 num2 没有被定义。

## 总结

变量 `充当` 被赋值角色 -- `LHS`

变量 `充当` 取值角色 -- `RHS`

```

#### 元素旋转有锯齿的解决方案

```javascript
元素旋转有锯齿的解决方案

在元素添加一个 border:1px solid transparent 便可以有效消除锯齿；
```

