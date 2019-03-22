# Javascript
本文章对 `Javascript` 做一个阶段性的终结。

希望大家先对基础教程 `Javascript Junior Level` 了解一下再看这一篇文章。

<a href="http://javascript-junior.biuxbiu.design/#/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="168" height="20"><linearGradient id="b" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="a"><rect width="168" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#a)"><path fill="#555" d="M0 0h135v20H0z"/><path fill="#97ca00" d="M135 0h33v20H135z"/><path fill="url(#b)" d="M0 0h168v20H0z"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="110"> <text x="685" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="1250">Javascript Junior Level</text><text x="685" y="140" transform="scale(.1)" textLength="1250">Javascript Junior Level</text><text x="1505" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="230">Link</text><text x="1505" y="140" transform="scale(.1)" textLength="230">Link</text></g> </svg></a>

## 数组


#### 数组创建

###### 空数组
```copy
var Obj = new Array();
```

###### 指定数组长度（个数）
```copy
var Obj = new Array(5);
```

###### 指定元素数组
```copy
var Obj = new Array('a','b','c'...,'z');
```

###### 单维数组（也称为数组的字面量）
```copy
var Obj = ['a','b','c'...,'z'];
```

###### 多维数组
```copy
var Obj = (['a','b','c'],['1','2','3'],['a1','b2','c3']);
```

#### 数组操作

###### 单维数组获取元素
数组名[元素下标索引]
```copy
var theFirstLetter = Obj[0];        //获取第一个元素
```

###### 多维数组获取元素
数组名[数组小标索引][元素下标索引]
```copy
var theFirstGroupFirstLetter = Obj[0][1];     //获取第一组数组的第二个元素
```

###### 新增数组元素
使用 `[]` 新增一个数组元素
```copy
Obj[4] = '5';
```

###### 删除数组元素
deletes
```copy
delete Obj[4];
```

###### 关联数组
当下标为 `非数值` 的时候，生成关联数组，下标作为对象的属性名字
```copy
Obj['letter'] = 'hello world';
```

###### 数组添加到对象当中
```copy
var Obj = {};
var ObjArray = ['1','2','3'];
for(var i = 0; i <= ObjArray.length; i++){
    Obj[i] = ObjArray[i];
}
console.log(Obj);
```

>还有另一个小技巧，后续我们会讨论 `push` 和 `apply` 的用法。
```copy
var Obj = {};
var ObjArray = ['1','2','3'];
[].push.apply(Obj,ObjArray);
console.log(Obj);
```

###### 遍历数组
```copy
var Obj = ['1','2','3'];
for(var i = 0;i <= Obj.length; i++){
    console.log(Obj[i]);
}
```

#### 数组属性

###### constructor
返回对象的构造函数
```copy
var Obj = ['1','2'];
console.log(Obj.constructor);       //返回数组对象的构造函数
```

>构造函数对象的 `constructor` 也返回构造函数。
```copy
function con(){
    console.log('1')
}
var dataOne = new con();
var dataTwo = new con();
dataOne.constructor;        //返回对象的构造函数
dataTwo.constructor;        //返回对象的构造函数
//
//ƒ con(){
    console.log('1')
}//
//
```


###### length
返回数组的长度
```copy
var Obj = ['1','2','3'];
console.log(Obj.length)
```


#### 方法

###### push()
在数组末尾添加数组
```copy
var Obj = ['1','2','3'];
Obj.push('last');
console.log(Obj);       //['1','2','3','last'];
```
###### unshift()
在数组前面添加数组
```copy
var Obj = ['1','2','3'];
Obj.unshift('first');
console.log(Obj);       //['first','1','2','3'];
```
###### concat()
合并两个数组
```copy
var oldObj = ['1','2','3'];
var newObj = ['a','b','c'];
var allObj = oldObj.concat(newObj);
console.log(allObj);
```

###### pop()
删除并返回数值最后一个元素
```copy
var Obj = ['1','2','3'];
console.log(Obj.pop());                         //'3'，输出最后一个被删除的元素
console.log('Obj的长度只有' + Obj.length);       //长度只有2了，因为删掉了一个，内容是['1','2']
```

###### shift()
删除并返回数值第一个元素
```copy
var Obj = ['1','2','3'];
console.log(Obj.shift());                       //'1'，输出第一个被删除的元素                                 
console.log('Obj的长度只有' + Obj.length);       //长度只有2了，因为删掉了一个，内容是['2','3']
```

###### splice()
从数组中删除并添加新的数组元素。

splice() 有三个参数
`splice(where,howMany,newItems)`

`where`：从哪里开始
`howMany`：删除多少个
`newItems`：新的数组元素


```copy
var Obj = ['1','2','3','4','5','6','7','8'];
Obj.splice(3,3,'new');          //第4个元素开始删除，删除3个，新增数组元素 'new'
console.log(Obj);               //["1", "2", "3", "new", "7", "8"]
```

!>注意 `howMany` 设置为 `0` 的话，就不会删除任何一个数组元素。`newItems` 这个参数可以写可以不写。不写默认不添加新的数组元素。

```copy
var Obj = ['1','2','3','4','5','6','7','8'];
Obj.splice(3,0);                //第 `4` 个元素开始删除，删除 `0` 个，无新增数组元素。
console.log(Obj);               //["1", "2", "3", "4", "5", "6", "7", "8"]
```

```copy
var Obj = ['1','2','3','4','5','6','7','8'];
Obj.splice(3,0,'new');                //第 `4` 个元素开始删除，删除 `0` 个，无新增数组元素。
console.log(Obj);               //["1", "2", "3","new", "4", "5", "6", "7", "8"]
```

!>注意 `howMany` 设置为 `负数` 的话，就会直接新增一个数组元素。`newItems` 这个参数可以写可以不写。不写默认不添加新的数组元素。

```copy
var Obj = ['1','2','3','4','5','6','7','8'];
Obj.splice(3,-3,'new');                //第 `4` 个元素开始删除，删除 `0` 个，无新增数组元素。
console.log(Obj);               //["1", "2", "3","new", "4", "5", "6", "7", "8"]
```

###### slice()
截取一个区间片段

slice() 有两个参数
`splice(start,stop)`

`start`：从哪里开始
`stop`：从哪里结束（不包含）【结束位置减 `1`】

>这里的 `stop` 不包含指的是好比说 `slice(0,3)` 意思是从 `0` 开始，到 `2` 停止。一共是 `3` 个。所以叫不包含。

```copy
var Obj = ['1','2','3','4','5','6','7','8'];
console.log(Obj.slice(0,3));            //从第 `1` 个数组元素开始截取，截取 `3` 个。
```

当 `stop` 是负数的时候，`stop` 截取的位置从后面开始算起。
```copy
var Obj = ['1','2','3','4','5','6','7','8'];
console.log(Obj.slice(0,-3));              //['1','2','3','4','5'];
```

当 `start` 是负数的时候，选区的片段为空。
```copy
var Obj = ['1','2','3','4','5','6','7','8'];
console.log(Obj.slice(-1,0));              //[];
console.log(Obj.slice(-1,-3));              //[];
```

>当参数里面只有一个的时候，指的是 `stop` 的功能，并且截取区间片段取反。

```copy
var Obj = ['1','2','3','4','5','6','7','8'];
console.log(Obj.slice(2));              //['3','4','5','6','7','8'];
```

>当参数里面只有一个的时候，指的是 `stop` 的功能，并且为负数的时候，意为最末尾开始算起并且截取区间片段。

```copy
var Obj = ['1','2','3','4','5','6','7','8'];
console.log(Obj.slice(-3));              //['3','4','5','6','7','8'];
```

>当 `stop` 为负数，并且 `数字` 大于数组的长度的时候，截取数组的全部内容。

```copy
var Obj = ['1','2','3','4','5','6','7','8'];
console.log(Obj.slice(-10));            //['1','2','3','4','5','6','7','8']
                                        //slice() 内参数为负数，并且数字大于数组长度（10>8）;
```

###### reverse()
翻转数组的元素顺序

```copy
var Obj = ['1','2','3','4','5','6','7','8'];
Obj.reverse();
console.log(Obj);           //["8", "7", "6", "5", "4", "3", "2", "1"]
```

###### sort()
对字母或者数字进行排序

```copy
var Obj = ['7','3','2','5','6','4','8','1'];
var Obj2 = ['h','e','d','c','b','g','f','a'];
Obj.sort();         
Obj2.sort();
console.log(Obj);           //["1", "2", "3", "4", "5", "6", "7", "8"]
console.log(Obj2);           //["a", "b", "c", "d", "e", "f", "g", "h"]
```

