# Dom-Event
通过 HTML DOM，可访问 JavaScript HTML 文档的所有元素。

## 什么是-DOM
`HTML DOM` (文档对象模型)，当页面在加载的时候，浏览器会创建页面的 `文档对象模型` ，`文档对象模型` 被构造为对象的树。

`Javascript` 可以改变页面中任何 `html` 元素<br>
`Javascript` 可以改变页面中任何 `html` 属性<br>
`Javascript` 可以改变页面中任何 `css` 样式<br>
`Javascript` 可以改变页面中任何所有时间做出反应。

`文档对象` 是网页中所有对象的所有者，或者说是根。

>所以要访问页面中的对象的话，始终要访问 `document` 对象。

实例：
```copy
document.body.innerHTML = 'hello world';
```

>由于 `body` 是 `dom` 节点，所以我们可以访问 `document` 来修改 `body` 的属性 `innerHTML`

## 选择元素

通过 `id` 找元素：
```copy
document.getElementById(id);
```

通过 `class` 找元素：
```copy
document.getElementByClassName(name);
```

通过 `tag` 找元素：
```copy
<script>
document.getElementsByTagName(tag);
</script>
```

实例：
```copy
<script>
document.getElementById('demo');
document.getElementsByClass('demo');
document.getElementsByTagName('div');
</script>
```

## 改变属性
!>回顾一下，只有对象才有方法和属性。

通过选择元素后，我们可以改变该元素的属性。

改变 `img` 的 `src` 属性实例：
```copy
<img src="https://vuejs.org/images/logo.png" />;

<script>
var dom = document.getElementsByTagName('img');
dom.src = 'https://developer.mozilla.org/static/img/web-docs-sprite.22a6a085cf14.svg';
</script>
```

改变 `a` 链接的 `href` 属性实例：
```copy
<a href="https://www.baidu.com/"></a>

<script>
var dom = document.getElementsByTagName('a');
dom.src = 'https://www.taobao.com/'；
</script>
```

改变 `div` 链接的 `style` 属性实例：
```copy
var dom = document.getElementsByTagName('div');
dom.style.backgroundColor = '#000';
```

!>你不能在属性中使用 `-` 符号，需要以大驼峰的写法（复合词的字母需要大写），比如说 `backgroundColor`。

## 添加-移除-替换元素

#### 添加元素
`dom.cloneNode()`：克隆元素并返回结果节点。<Br>
`document.createElement(element)`：创建一个新的元素。<Br>
`document.createTextNode(text)`：创建一个新的文本节点。<Br>

```copy
<script>
document.createElement('div');
document.createTextNod('hello world');
</script>
```

!>是不是很奇怪我们并没有在文档中找到以上方法创建的元素。<br>
当你用 `document.createTextNode(text)` 的时候，它不会出现在文档中，你必须添加来放到文档中。

```copy
<script>
var dom = document.getElementsByTagName('div')[0];
var domClone = dom.cloneNode();
document.body.append(domClone);
</script>
```

!>`cloneNode()` 和 `cloneNode(true)` 是不一样的。<br>
`cloneNode()` 并不是 `深度` 复制，它只是复制这个对应的节点，而不会复制子节点。<br>
`cloneNode(true)` 是 `深度` 复制，它复制的是对应的节点已经该节点下面的所有子节点。

```copy
<script>
var dom = document.createTextNode('hello wold');
document.body.append(dom);      //直接放入到 `body` 中
document.getElementById('content').appendChild(dom)      //直接放入到 `content` id中的最末尾
document.getElementById('content').insertBefore(dom,node)      //直接放入到 `content` id中,并且放在 `node` 节点前面。
</script>
```

#### 移除元素
`dom.removeChild(node)`：父级节点移除子级节点

要删除元素，你必须先找到该元素的父级元素，再通过父级元素使用 `removeChild(node)` 的方法来删除该元素。

>我们可以使用 `node.parentNode` 属性来找到该元素的父级元素。

删除 `p` 元素实例：
```copy
<script>
var dom = document.getElementsTagName('p')[0];
dom.parentNode.removeChild(dom);
</script>
```

#### 替换元素
`dom.replaceChild(newNode,oldNode)`：父级元素替换新的子级元素。

把 `p` 节点替换成 `div` 节点实例：
```copy
var oldNode = document.getElementsByTagName('p')[0];
var newNode = document.getElementsByTagName('div')[0];
var dom = oldNode.parentNode;
dom.replaceChild(newNode,oldNode);
```


## 创建动画
`Javascript` 里创建动画，我们可以使用 `setInterval` 方法来执行。

>`Javascript` 里面创建动画有很多种，在性能优化上有很多更好的方案。在这里先从基本的开始认识 `Javascript` 的动画。


#### setInterval
#### setInterva
`setInterval` 允许我们创建一个定时器，并调用这个定时器反复执行一段代码块。


语法：
```copy
<script>
var job = setInterval(fun,500)
</script>
```

红色盒子向右边移动，移动5px后停止的动画实例：
```copy
<script>
var left = 0;
var box = document.getElementById('box');
function move(){
    left += 1;
    box.style.left = left + 'px';
    if(left == 5){
        clearInterval(animation);
    }
}
var animation = setInterval(move,500);
</script>
```

>`clearInterval()` 是用来取消掉 `setInterval()` 设置的 `timeout`。<br>
`clearInterval()` 的参数必须是 `setInterval()` 设置的 `id`，如例子中的 `animation`。

## Events
`Javascript` 中有很多事件让我们在交互编程的时候更加方便。

|事件|描述|
|:--|:--|
|onabort|图像在加载时被中断|
|onblur|元素焦点的时候|
|onchange|内容被改变|
|onclick|点击某个对象|
|ondbclick|双击某个对象|
|onerror|记载文档或图像发生错误|
|onfocus|获得焦点|
|onkeydown|某个按键按下|
|onkeyup|某个按键松开|
|onkeypress|某个按键按下并且松开|
|onload|某个资源完成加载|
|onmousedown|鼠标按钮按下|
|onmousemove|鼠标移动|
|onmouseout|鼠标从某个元素一开|
|onmouseover|鼠标移到某个元素上|
|onmouseup|鼠标按键被松开|
|onreset|重置按钮被点击|
|onresize|窗口框架被重新调整大小|
|onselect|文本被选中|
|onsubmit|确认按钮被点击|
|onunload|用户退出页面|

语法：
```copy
<script>
document.addEventListener('click',function(){
    alert('1');
})
</script>
```

>判断用户是否关闭本页面可以用 `onunload` 事件。<br>
判断用户是否切换了页面可以使用 `visibilitychange` 事件。

```copy
<script>
document.addEventListener('visibilitychange',function(){
    alert('切换了 tab 啦');
})
</script>
```

#### addEventListener
`addEventListener()` 添加事件监听。将事件附件到元素上面去，而不会覆盖现有的事件处理程序。意思是你可以向元素中添加多个事件处理。

语法：
```copy
element.addEventListener(event,function,useCapture);
```
`event`：必须，字符串，指定事件名<br>
`function`：必须，指定要事件触发时执行的函数<br>
`useCapture`：可选，布尔值，指定事件是否在捕获或冒泡阶段执行

!>`event` 不要使用 `on` 的前缀，例如：使用 `click` 而不使用 `onclick`


实例：
```copy
<script>
var dom = document.getElementById('content');
dom.addEventListener('click',function(){
    console.log('hello world')
})
</script>
```

单个元素多个事件：
```copy
<script>
var dom = document.getElementById('content');
dom.addEventListener('click',function(){        //点击事件
    console.log('hello world')
})
dom.addEventListener('mouseover',function(){        //在元素上方事件
    console.log('now over it');
})
</script>
```

#### removeEventListener
`removeEventListener` 删除事件监听。

语法：
```copy
element.removeEventListener(event,function,useCapture);
```
`event`：必须，字符串，移除的事件名<br>
`function`：必须，要移除的函数<br>
`useCapture`：可选，布尔值，指定移除事件句柄的阶段

新增监听事件后移除监听事件实例：

```copy
<script>
var dom = document.getElementById('content');
dom.addEventListener('click',function(){        //添加监听事件
    console.log('1')
})
dom.removeEventListener('click',function(){     //删除监听事件
    console.log('1');
})
</script>
```

## 创建图像幻灯片
代码实例：
```copy
<script>
var img =[
    'https://cdn.dribbble.com/users/59947/screenshots/6120153/flarin_dribble_loop.gif',
    'https://cdn.dribbble.com/users/992274/screenshots/6118368/family_with_disabled_child_kit8-net.png',
    'https://cdn.dribbble.com/users/146798/screenshots/6118950/cherries-dribbble_2x.jpg',
    'https://cdn.dribbble.com/users/788099/screenshots/6120369/man_karate_kit8-net.png'
];
var imgNum = 0;
var prev = document.getElementsByClassName('js-prev')[0];
var next = document.getElementsByClassName('js-next')[0];
var imgDom = document.getElementsByClassName('js-img')[0];

next.addEventListener('click',function(){
    imgNum ++;
    if(imgNum >= img.length ){
        imgNum = 0;
    }
    imgDom.src = img[imgNum];

})

prev.addEventListener('click',function(){
    imgNum --;
    if(imgNum < 0 ){
        imgNum = img.length-1;
    }
    imgDom.src = img[imgNum];

})

</script>
```
<iframe height="265" style="width: 100%;" scrolling="no" title="EMgaBR" src="//codepen.io/biubiubiu/embed/EMgaBR/?height=265&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/biubiubiu/pen/EMgaBR/'>EMgaBR</a> by @biu²
  (<a href='https://codepen.io/biubiubiu'>@biubiubiu</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 表格验证
简单的表格验证两次填入的手机号码是否正确实例：
```copy
<form onsubmit="return isOk()" method="post">
    Number1:<input type="text" id="Number1" name="number1"><br>
    Number2:<input type="text" id="Number2" name="number2"><br>
    <input type="submit" value="submit">
</form>
  
<script>
function isOk(){
    var number1 = document.getElementById('Number1');
    var number2 = document.getElementById('Number2');

    if(number1.value != '' && number1.value == number2.value ){
        return true
    }else if(number1.value == '' || number1.value != number2.value  ){
        alert('输入有错啦');
    }
}
</script>
```

>只有返回 `true` 的时候才会提交表格。