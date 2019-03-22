# 对象
`Javascript` 中，万物皆对象：`字符串`，`数值`，`数组`，`函数`。。。

#### Javascript-对象
对象只是带有属性和方法的特殊数据类型。
*   `布尔类型`可以是一个对象
*   `数字类型`可以是一个对象
*   `字符串`可以是一个对象
*   `日期`可以是一个对象
*   `数学和正则表达式`也可以是一个对象
*   `数组`也可以是一个对象<br>
*   等等

```copy
var student = {
    name : 'peter',
    age : '20',
    sexy : 'man'
}
```
上面这个例子中，`studeng` 是一个对象，对象里面分别有 `属性` 和 `属性值`。

|属性|属性值|
|:---:|:---:|
|name|'peter'|
|age|'20'|
|sexy|'man'|

#### Javascript 对象属性
我们可以有两种方式访问对象的属性值。

语法：
```copy
objectName.propertyName
//又或者
objectName['propertyName']
```

比如我们要访问 `student` 的 `name` 的值：

```copy
var student = {
    name : ' peter',
    age : '12',
    sexy : 'man'
}

student.name
//又或者
student['name']
```

>`Javascript` 中内置了长度属性用来计算属性或者字符串的长度（字符数）。

```copy
console.log(student.name.length);       //length 属性获取该属性的属性值长度。
console.log(student['name'].length);
```

#### Javascript 对象方法
`Javascript` 也有内置一些对象方法。

这里先列举一些方法，后续会单独说明。

##### String
|方法|描述|
|:---|:---|
|charAt()|返回在指定位置的字符|
|charCodeAt()|返回在指定的位置的字符的 Unicode 编码|
|concat()|连接字符串|
|indexOf()|检索字符串|
|match()|找到一个或多个正则表达式的匹配|
|replace()|替换与正则表达式匹配的子串|
|search()|检索与正则表达式相匹配的值|
|slice()|提取字符串的片断，并在新的字符串中返回被提取的部分|
|split()|把字符串分割为字符串数组|
|toLocaleLowerCase()|把字符串转换为小写|
|toLocaleUpperCase()|把字符串转换为大写|
|toLowerCase()|把字符串转换为小写|
|toUpperCase()|把字符串转换为大写|
|substr()|从起始索引号提取字符串中指定数目的字符|
|substring()|提取字符串中两个指定的索引号之间的字符|

##### 数组
|方法|描述|
|:---|:---|
|slice[start,end)|返回从原数组中指定开始下标到结束下标之间的项组成的新数组（不影响原数组）|
||1个参数：n.即：n到末尾的所有|
||2个参数：[start,end]|
|splice()|删除：2个参数，起始位置，删除的项数|
||插入：3个参数，起始位置，删除的项数，插入的项|
||替换：任意参数，起始位置，删除的项数，插入任意数量的项|
|pop()|删除数组的最后一个元素，减少数组的长度，返回删除的值。（无参）|
|push()|将参数加载到数组的最后，返回新数组的长度。 （参数不限）|
|shift()|删除数组的第一个元素,数组长度减1，返回删除的值。 （无参）|
|unshift()|向数组的开头添加一个或更多元素，并返回新的长度。（参数不限）|
|sort()|按指定的参数对数组进行排序 ，返回的值是经过排序之后的数组（无参/函数）|
|concat(3,4)|把两个数组拼接起来。 返回的值是一个副本 （参数不限）|
|join()|将数组的元素组起一个字符串，以separator为分隔符，省略的话则用默认用逗号为分隔符|
|indexOf()|从数组开头向后查找，接受两个参数，要查找的项(可选)和查找起点位置的索引|
|lastIndexOf()|从数组末尾开始向前查找，接受两个参数，要查找的项(可选)和查找起点位置的索引|
|every()|对数组中的每一项运行给定函数，如果该函数对每一项都返回true，则返回true。|
|filter()|对数组中的每一项运行给定函数，返回该函数会返回true的项组成数组。|
|forEach()|对数组的每一项运行给定函数，这个方法没有返回值。|
|map()|对数组的每一项运行给定函数，返回每次函数调用的结果组成的数组。|
|some()|对数组的每一项运行给定参数，如果该函数对任一项返回true，则返回true。以上方法都不会修改数组中的包含的值。|
|reduce()和reduceRight()|缩小数组的方法，这两个方法都会迭代数组的所有项，然后构建一个最终返回的值。|

##### Math
|方法|描述|
|:---|:---|
|ceil(x)|尽可能取最大。|
|floor(x)|尽可能取最小。|
|round(x)|把数四舍五入为最接近的整数。|
|max(x,y)|返回 x 和 y 中的最高值。|
|min(x,y)|返回 x 和 y 中的最低值。|
|pow(x,y)|返回 x 的 y 次幂。|
|random()|返回 0 ~ 1 之间的随机数。|
|sqrt(x)|返回数的平方根。|

##### 正则
|方法|描述|
|:---|:---|
|compile|编译正则表达式|
|exec|检索字符串中指定的值。返回找到的值，并确定其位置。|
|test|检索字符串中指定的值。返回 true 或 false。|
|search|检索与正则表达式相匹配的值。|
|match|找到一个或多个正则表达式的匹配。|
|replace|替换与正则表达式匹配的子串。|
|split|把字符串分割为字符串数组。|

## 对象构造器
我们使用一个函数来构造一个对象
```copy
function student(name,age,sexy){
    this.name = name,
    this.age = age,
    this.sexy = sexy
}

var boy = new student('peter','12','man');
```
>使用函数构造对象的时候，一般使用 `new` 关键字生成一个新的对象

## 对象初始化
对象初始化的三张方式：

#### 对象初始化器方式
对象初始化器方式一共有三种：`new`， `对象直接量` ，`Object.create()`

#### new 方法
语法：
```copy
function objectName(parameters1,parameters2,parametersx...){
    this.property1 = parameters1,
    this.property2 = parameters2,
    this.propertyx = parametersx,
}

var name1 = new  objectName(parameters1,parameters2,parametersx);
var name2 = new  objectName(parameters1,parameters2,parametersx);
```

举个例子：

```copy
function student(name,age,sexy){
    this.name = name,
    this.age = age,
    this.sexy = sexy,
}

var boy = new student('peter',12,'boy');
var girl = new student('sue',11,'girl');
```

#### 对象直接量方法
语法：
```copy
var objectName = {
    property1:value1, 
    property2:value2,…, 
    propertyN:valueN
}

objectName.property1 = newValue1;           //通过 `.` 方法可以改变属性值，或者新增属性和属性值。
```
>`property` 是对象的属性。<Br>
`value` 是对象的属性值。<Br>
`value` 可以是 `数字`，`字符串`，`对象` 三者之一。

例如：
```copy
var student = {
    name : 'peter',
    age : 12,                           //`数字`
    sexy : 'man',                       //`字符串`
    getHobby : {                        //`对象`
        sprots : 'backetball',          
        game : '王者荣耀'
    },
    getName : function(){               //`函数`
        return this.name;
    }
}

student.age = 14;                       //通过 `.` 方法修改属性值
//或者
student['age'] = 14;                    //通过 `字符串` 方法修改属性值

student.school = 'ABD Schoole';         //通过 `.` 方法新增 `school` 属性和对应的属性值 `ABD Schoole`
//或者
studen['school'] = 'ABD Schoole';       //通过 `字符串` 方法新增 `school` 属性和对应的属性值 `ABD Schoole`
```

#### Object.create() 方法
```copy
var objectName = {
    property1:value1, 
    property2:value2,…, 
    propertyN:valueN
}

var name1 = Object.create(objectName);
```

举个例子：
```copy
var student = {
    name : 'peter',
    age : 12,
    sexy : 'boy'
}

var boy = Object.create(student);       //通过 `Object.create` 实例化一个对象
boy.name = 'ken';                       //通过 `点` 方法修改属性值
//或者
boy['name'] = 'ken';                    //通过 `字符串` 方法修改属性值
```

>上面的例子中，要修改或者新增对象中的属性和属性值，则可以直接使用 `.` 或者  `['属性值']`方法进行操作。<br>
在对象的属性里有一个地方需要注意下：`prototype` 和 `__proto__` 。这两个详细区别后续我们会单独讲到<br>
`prototype` 是函数的内置属性。<Br>
`__proto__` 是对象的内置属性。<Br>

## 对象添加方法
第一种：
```copy
function student(){
    this.name = 'peter',
    this.age = 12,
    this.sexy = 'boy',
    this.getName = function getName(){      //内部直接定义 `getName()` 函数
        console.log(this.name);
    };
}

var boy = new student();
boy.getName();
```


方法可以直接写在对象中，也可以通过外部调用：
```copy
function getName(){             //外部定义 `getName()` 函数
    console.log(this.name);
}

function student(){
    this.name = 'peter',
    this.age = 12,
    this.xesy = 'man',
    this.getName = getName;     //内部调用
} 

var boy = new student();
boy.getName();
```