# 核心对象
为了便于开发工作，JavaScript提供了处理 `字符串 `、`数学运算` 、`日期和时间` 、`正则表达式` 和 `数值` 等一系列的内置对象，它们

## Arrays-对象
`数组对象` 是使用单独的变量名来存储一系列的值。

## 创建数组
语法：
```copy
new Array('元素1','元素2','元素3');     //直接存储元素
new Array(3)                           //显示存储元素的数量
```
举个例子：
```copy
var cars = new Array('宝马','保时捷','奥迪')     //一个变量来存储一系列的值。
```
#### 其他的方式创建数组
你可以声明一个数组，并且告知储存的元素数量，然后在添加元素。
```copy
var cars = new Array(3);        //`3` 是存储元素的数量，可添加可不添加
cars[0] == '宝马';              //添加第一个元素
cars[1] == '保时捷';            //添加第二个元素
cars[2] == '奥迪';              //添加第三个元素
```

字面量创建一个数组。
```copy
var cars = ['宝马','保时捷','奥迪']；
```

`var cars = []` 是一种字面量定义数组的方法。<br>
`var cars = new Array()` 是调用数组结构函数生成的而方法。

>`var cars = []` 这种字面量定义数组的方法可能更为简单方便和直接。

## 访问数组
通过 `数组名` 加 `索引` 可以访问数组的元素。

语法:
```copy
数组名字[索引]
```
一下实例可以访问 `cars` 的第一个值。
```copy
var cars = ['宝马','保时捷','奥迪'];
console.log(cars[0]);       //'宝马'    =>cars 是数组名字，[0]是索引值
```
>`[0]` 是数组第一个元素，`[1]` 是数组的第二个元素。<br>
索引值永远比个数少一。<br>

>注意：访问数组以外的索引，返回 `undefined` 。

## 数组属性和方法
`Javascript` 有很多内置的属性和方法。

* `length` 属性：<br>
`length` 属性可以返回数组的元素数量。
```copy
var cars = ['宝马','保时捷','奥迪']。
console.log(cars.length);
```

* `concat()` 方法：<br>
`concat()` 方法可以合并两个数组并 `创建` 一个新的数组。
```copy
var carsOne = ['宝马','保时捷','奥迪'];
var carsTwo = ['大众','奔驰','法拉利'];
var allCars = carsOne.concat(carsTwo);      //`concat` 让 `carsOne` 和 `carsTwo` 合并，并创建一个新的数组
console.log(allCars);       //'宝马','保时捷','奥迪','大众','奔驰','法拉利'
```
>`concat()` 的操作不会影响到 `carsOne` 和 `carsTwo` ，它会产生新的数组。

## 关联数组
文本 `命名索引` 的数组成为 `关联数组`。

>`关联数组` 中,`数字索引` 被替换成了 `文本索引` 。<br>
`关联名称` 放在 `[]` 中。

我们来看一个实例：
```copy
var student = [];
student['name'] = 'peter';
student['age'] = 12;
```
从上面的实例看出，`student` 已经变成了一个对象，不再是一个数组。
>`student` 作为对象时，数组的方法和属性不产生作用了，`student.length` 返回 `0`

>`Javascript` 中，数组总是用 `数字` 来进行索引。如果你想要 `文本` 来进行索引，使用 `对象` 可能会好一点。


## Math-对象
`Javascript` 中 `Math` 执行的是计算的任务。`Math` 提供了多重算数类型和函数。

#### Math 对象属性
|属性|描述|
|:--|:--|
|E|返回算术常量 e，即自然对数的底数（约等于2.718）。|
|LN2|返回 2 的自然对数（约等于0.693）。|
|LN10|返回 10 的自然对数（约等于2.302）。|
|LOG2E|返回以 2 为底的 e 的对数（约等于 1.414）。|
|LOG10E|返回以 10 为底的 e 的对数（约等于0.434）。|
|PI|返回圆周率（约等于3.14159）。|
|SQRT1_2|返回返回 2 的平方根的倒数（约等于 0.707）。|
|SQRT2|返回 2 的平方根（约等于 1.414）。|


#### Math 对象方法
|属性|描述|
|:--|:--|
|abs(x)|返回算返回数的绝对值。|
|acos(x)|返回数的反余弦值。|
|asin(x)|返回数的反正弦值。|
|atan(x)|以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。|
|atan2(y,x)|返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）。|
|ceil(x)|对数进行上舍入。|
|cos(x)|返回数的余弦。|
|exp(x)|返回 e 的指数。|
|floor(x)|对数进行下舍入。|
|log(x)|返回数的自然对数（底为e）。|
|max(x,y)|返回 x 和 y 中的最高值。|
|min(x,y)|返回 x 和 y 中的最低值。|
|pow(x,y)|返回 x 的 y 次幂。|
|random()|返回 0 ~ 1 之间的随机数。|
|round(x)|把数四舍五入为最接近的整数。|
|sin(x)|返回数的正弦。|
|sqrt(x)|返回数的平方根。|
|tan(x)|返回角的正切。|
|toSource()|返回该对象的源代码。|
|valueOf()|返回 Math 对象的原始值。|

## Date-对象
`Javascript` 中 `Date` 处理的是 `日期` 和 `时间` 。

#### Date 对象属性
|属性|描述|
|:--|:--|
|constructor|返回对创建此对象的 Date 函数的引用。|
|prototype|使您有能力向对象添加属性和方法。|

#### Date 对象属性
|属性|描述|
|:--|:--|
|Date()|返回当日的日期和时间。|
|getDate()|从 Date 对象返回一个月中的某一天 (1 ~ 31)。|
|getDay()|从 Date 对象返回一周中的某一天 (0 ~ 6)。|
|getMonth()|从 Date 对象返回月份 (0 ~ 11)。|
|getFullYear()|从 Date 对象以四位数字返回年份。|
|getYear()|请使用 `getFullYear()` 方法代替。|
|getHours()|返回 Date 对象的小时 (0 ~ 23)。|
|getMinutes()|返回 Date 对象的分钟 (0 ~ 59)。|
|getSeconds()|返回 Date 对象的秒数 (0 ~ 59)。|
|getMilliseconds()|返回 Date 对象的毫秒(0 ~ 999)。|
|getTime()|返回 1970 年 1 月 1 日至今的毫秒数。|
|getTimezoneOffset()|返回本地时间与格林威治标准时间 (GMT) 的分钟差。|
|getUTCDate()|根据世界时从 Date 对象返回月中的一天 (1 ~ 31)。|
|getUTCMonth()|根据世界时从 Date 对象返回月份 (0 ~ 11)。|
|getUTCFullYear()|根据世界时从 Date 对象返回四位数的年份。|
|getUTCHours()|根据世界时返回 Date 对象的小时 (0 ~ 23)。|
|getUTCMinutes()|根据世界时返回 Date 对象的分钟 (0 ~ 59)。|
|getUTCSeconds()|根据世界时返回 Date 对象的秒钟 (0 ~ 59)。|
|getUTCMilliseconds()|根据世界时返回 Date 对象的毫秒(0 ~ 999)。|
|parse()|返回1970年1月1日午夜到指定日期（字符串）的毫秒数。|
|setDate()|设置 Date 对象中月的某一天 (1 ~ 31)。|
|setMonth()|设置 Date 对象中月份 (0 ~ 11)。|
|setFullYear()|设置 Date 对象中的年份（四位数字）。|
|setYear()|请使用 setFullYear() 方法代替。|
|setHours()|设置 Date 对象中的小时 (0 ~ 23)。|
|setMinutes()|设置 Date 对象中的分钟 (0 ~ 59)。|
|setSeconds()|设置 Date 对象中的秒钟 (0 ~ 59)。|
|setMilliseconds()|设置 Date 对象中的毫秒 (0 ~ 999)。|
|setTime()|以毫秒设置 Date 对象。|
|setUTCDate()|根据世界时设置 Date 对象中月份的一天 (1 ~ 31)。|
|setUTCMonth()|根据世界时设置 Date 对象中的月份 (0 ~ 11)。|
|setUTCFullYear()|根据世界时设置 Date 对象中的年份（四位数字）。|
|setUTCHours()|根据世界时设置 Date 对象中的小时 (0 ~ 23)。|
|setUTCMinutes()|根据世界时设置 Date 对象中的分钟 (0 ~ 59)。|
|setUTCSeconds()|根据世界时设置 Date 对象中的秒钟 (0 ~ 59)。|
|setUTCMilliseconds()|根据世界时设置 Date 对象中的毫秒 (0 ~ 999)。|
|toSource()|返回该对象的源代码。|
|toString()|把 Date 对象转换为字符串。|
|toTimeString()|把 Date 对象的时间部分转换为字符串。|
|toDateString()|把 Date 对象的日期部分转换为字符串。|
|toDateString()|把 Date 对象的日期部分转换为字符串。|
|toGMTString()|请使用 `toUTCString()` 方法代替。|
|toUTCString()|根据世界时，把 Date 对象转换为字符串。|
|toLocaleString()|根据本地时间格式，把 Date 对象转换为字符串。|
|toLocaleTimeString()|根据本地时间格式，把 Date 对象的时间部分转换为字符串。|
|toLocaleDateString()|根据本地时间格式，把 Date 对象的日期部分转换为字符串。|
|UTC()|根据世界时返回 1970 年 1 月 1 日 到指定日期的毫秒数。|
|valueOf()|返回 Date 对象的原始值。|