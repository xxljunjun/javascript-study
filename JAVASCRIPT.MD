### 什么是 javascript

```
ECMAScript 是一个国际通过的标准化脚本语言。JavaScript 由 ECMAScript 和 DOM、BOM 三者组成。
ECMAScript:ECMAScript 是 JavaScript 的语言规范，JavaScript 是 ECMAScript 的实现和扩展。
DOM:文档对象模型
BOM:浏览器对象模型
```

### 数据类型

```
基本数据类型
null
undefinde
boolean
string
number
symbol（ES6新增）:不能使用new;在 for...in 迭代中不可枚举;Symbols 与 JSON.stringify()以 symbol 值作为键的属性会被完全忽略
引用数据类型(复杂数据类型)
function
Array
Object
Map（ES6新增）：它是“键控集合“
Set（ES6新增）：据结构Set类似于数组，但是成员都是唯一的，没有重复的值;类数组对象

```

### 判断数据类型的方法

```
typeof 检测数据：
 缺点:无法判断null和object
 返回值:数据类型
检测数据 instanceof：
 缺点:无法判断字面量创建的基本数据类型
 返回值:boolean
 原理：实际上就是查找目标对象的原型链
检测数据.constructor.name：
 返回值:数据类型
Object.prototype.toString.call(检测数据)：
 返回值:"[object Number]"
```

### 事件循环机制

```
概念：同步和异步任务分别进入不同的执行环境，同步的进入主线程，即主执行栈，异步的进入任务队列(Event Queue )。
主线程内的任务执行完毕为空，会去任务队列读取对应的任务，推入主线程执行。 上述过程的不断重复就是我们说的 Event Loop (事件循环)。
宏任务(Macro Task )：script( 整体代码)、setTimeout、setInterval、I/O、UI 交互事件、setImmediate(Node.js 环境)
微任务(Micro Task)：Promise、MutaionObserver、process.nextTick(Node.js 环境)
在异步任务中，采取一个先进先出的一个原则；微任务先于宏任务执行原则
```

### 垃圾回收机制和内存泄漏

```
什么是垃圾回收机制：在JavaScript中，一般来说没有被引用的对象就是垃圾，就是要被清除；
    有个例外如果几个对象引用形成一个环，互相引用，但根访问不到它们，这几个对象也是垃圾，也要被清除。
如何执行：JavaScript 引擎中有一个后台进程称为垃圾回收器，它会通过‘标记-清除 算法’监视所有对象，并删除那些不可访问的对象。
什么叫做根：本地函数的局部变量和参数。当前嵌套调用链上的其他函数的变量和参数。全局变量。还有一些其他的，内部的
内存泄露：是指当一块内存不再被应用程序使用的时候，由于某种原因，这块内存没有返还给操作系统或者内存池的现象。
 闭包常驻内存
```

### 闭包

```
闭包==>就是能够读取其他函数内部变量的函数。(定义在一个函数内部的函数)
函数内部声明变量的时候，一定要使用var命令。如果不用的话，你实际上声明了一个全局变量！
一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。
```

### 递归

```
递归本质上是将原来的问题，转化为更小的同一问题
一个函数不断的调用自己
```

### 原型和原型链、构造函数、实例对象、原型对象

```
构造函数：每一个函数或者对象在被创建时，都会添加一个prototype属性，默认指向它的原型对象。
原型对象：原型对象的constructor 指向所创建它的构造函数
实例对象：构造函数通过new方法创建一个实例对象；实例对象上的__proto__默认指向它的原型对象。
原型：js中万物皆对象，每一个对象都有自己的属性和方法，因为要解决属性或方法的共享问题，所以就出现了原型。
原型链：js在查找属性或方法的过程中，如果在自己的属性中找不到就会沿着__proto__去找原型对象，
如果原型对象中还找不到，就继续沿着原型对象的__proto__中查找，这种通过__proto__查找的过程就叫做原型链
```

### 创建对象的方式

```
字面量隐式创建：var obj = new Object()
字面量创建对象：var c = {a: 1,b: 2}
Object.assign()：通过复制一个或多个对象来创建一个新的对象。
Object.create()：使用指定的原型对象和属性创建一个新对象。
使用 class 关键字创建的对象
```

### 复制对象的方式

```
1、JSON.parse(JSON.stringify(obj)) 深复制
2、object.assign() 
3、for...in...
4、{...}

```

### 深拷贝和浅拷贝

```
浅拷贝是拷贝一层，基本数据类型就是值的复制,对象级别的就拷贝引用；
	==>用 = 号赋值引用地址
	==>for...in...存在嵌套对象时
	===>Object.assign()存在嵌套对象时
	===>{...}一层时
深拷贝是拷贝多层，每一级别的数据都会拷贝出来；在引用数据类型嵌套引用数据类型
	==>JSON.parse(JSON.stringify())
		==>缺点：时间对象字符串的形式，RegExp空对象，丢弃对象的constructor
	==>for…in不存在嵌套对象时
	==>Object.assign()不存在嵌套对象时
	==>递归的形式
	===>{...}多层时
	==>数组的slice方法
	==>数组的concat的方法
```

### 判断对象为空的方法

```
1、Object.keys()
	==>返回一个包含所有给定对象自身可枚举属性名称的数组。
2、Object.getOwnPropertySymbols()
	==>返回一个数组，它包含了指定对象自身所有的符号属性。
3、将json对象转化为json字符串，再判断该字符串是否为"{}"
4、for in 循环判断
var obj = {};
var b = function() {
for(var key in obj) {
return false;
}
return true;
}

```

### 普通函数和箭头函数的区别

```
写法不一样：箭头函数使用箭头定义，普通函数没有
箭头函数的this指向取决于它上一级的this指向，普通函数的this指向调用他的对象
箭头函数不能作为构造函数，不能使用new
箭头函数没有原型，不能继承
箭头函数没有arguments,如果要用，可以用剩余运算符代替 (注意在node环境下是有arguments的)
箭头函数为匿名函数，普通函数可以为具名函数，也可为匿名函数（自执行函数）
```

### 改变 this 指向的方法

```
obj.myfun.call(db, '城都', '上海') //junjun
obj.myfun.apply(db, ['城都', '上海']) //junjun  //除了第一个是this指向，其他参数必须放在一个数组里面传进去
obj.myfun.bind(db, '城都', '上海')() //junjun  返回的是一个函数需要调用才会执行

```

### 回流和重绘

```
1、html被html解析器解析成DOM树
2、css被css解析器解析成CSS规则树
3、将HTML和CSS合成render树
4、生成布局(flow),即将所有渲染树的所有节点进行平面合成
5、将布局绘制(repaint)到屏幕上
重绘(repaint)：当元素样式的改变不影响页面布局时，比如元素的颜色，浏览器将对元素进行的更新，称之为重绘
回流(reflow)：也叫做重排。当元素的尺寸或者位置发生了变化，就需要重新计算渲染树，这就是回流，比如元素的宽高、位置，浏览器会重新渲染页面，称为回流，又叫重排（layout）。
关系：回流必定会触发重绘，重绘不一定会触发回流。重绘的开销较小，回流的代价较高。
如和减少回流和重绘？使用class类名来控制样式的改变;对于复杂的动画效果可以使其脱离文档流;免循环操作DOM/避免循环读取offsetLeft等属性
```

### cookies，sessionStorage 和 localStorage

```
cookie:生命周期为人为设置，在过期时间之前都是有效的。每次http请求都会携带cookie。大小约为4kb
sessionStorage:生命周期为仅在当前浏览器窗口关闭之前有效，关闭页面或者浏览器会被清除。不参与和服务器的通信。大小约5M或者更大
localStorage：永久有效，窗口或者浏览器关闭也会一直保存，除非手动永久清除。不参与和服务器的通信。大小约5M或者更大
removeItem()/setItem()/clear()/getItem()

```

### promise 的理解

```
1、promise是一个构造函数，通过new方法可以用来创建一个Promise对象
2、Promise是ES6新增的解决传统的回调地狱的解决方案，promise用来将这种繁杂的做法简化，
可以将异步操作以同步的流程表达出来，避免了层层嵌套的回调函数，让程序更具备可读性，可维护性。
3、promise有三种状态，peddding reslove rejected，状态一旦改变，就无法再次改变状态，一个promise对象只能改变一次
4、promise.all()用于将多个 Promise 实例，包装成一个新的 Promise 实例
 ==> promise1和promise2都成功才会调用success1
5、Promise.race()方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例
 ==>promise1和promise2只要有一个成功就会调用success1
```

### ES6 的新特性

```
promise
class类
let,const,
结构赋值
箭头函数
函数参数的默认值default
Spread / Rest 操作符
	==>rest操作符让函数的所有参数可由一个变量统一接收 ，帮助我们创建更加灵活的函数
	==>spread运算符比较经常数组的解析与构造
for...of 和 for...in
	==>for…in是遍历数组(尽量不用)、对象的key:不仅遍历数字键名，还会遍历手动添加的其它键，甚至包括原型链上的键
	==>for…of是遍历数组,类数组，Map,Set的value
对象超类：使用super关键字可以调用父级的方法
	==>Object.setPrototypeOf(child,parent)：设置置child的对象的原型（即内部 [[Prototype]] 属性）
数字前面添加 0o 或者0O 即可将其转换为八进制值：

```

### 变量提升

```
预编译阶段和执行阶段
js引擎在正式执行代码前会进行一次预编译，会把var所定义的变量以及函数当前作用域的顶部声明。

```

### 函数提升

```
JavaScript中的函数是一等公民，函数声明的优先级最高，会被提升至当前作用域最顶端
函数提升会在变量提升之前

```

### 作用域和作用域链

```
JavaScript有全局作用域和函数作用域、块作用域。
1、作用域最大的用处就是隔离变量，不同作用域下同名变量不会有冲突。
2、所有末定义直接赋值的变量自动声明为拥有全局作用域
3、作用域是分层的，内层作用域可以访问外层作用域的变量，反之则不行。
作用域链：如果父级也没呢？再一层一层向上寻找，直到找到全局作用域还是没找到，就宣布放弃。
这种一层一层的关系，就是 作用域链 。
执行上下文在运行时确定，随时可能改变；作用域在定义时就确定，并且不会改变。

```

### let、var 和 const 的区别

```
let/const 声明并不会被提升到当前代码块的顶部，因此你需要手动将 let/const 声明放置到顶部，
以便让变量在整个代码块内部可用。
块级作用域：1、在一个函数内部；2、在一个代码块（由一对花括号包裹）内部
禁止重复声明
var定义的变量，没有块的概念，可以跨块访问, 不能跨函数访问。
let定义的变量，只能在块作用域里访问，不能跨块访问，也不能跨函数访问。
const用来定义常量，使用时必须初始化(即必须赋值)，只能在块作用域里访问，而且不能修改。

```

### this 指向

```
1.在浏览器中，在全局范围内this 指向window对象
2.在函数中，this永远指向最后调用他的那个对象；
3.构造函数中，this指向new出来的那个新的对象；
4.call、apply、bind中的this被强绑定在指定的那个对象上；
	==>js给函数内置的一些API，调用他们可以为函数指定this的执行,同时也可以传参。
5.箭头函数中this比较特殊,箭头函数this为父作用域的this，不是调用时的this.要知道前四种方式,都是调用时确定,也就是动态的,而箭头函数的this指向是静态的,声明的时候就确定了下来；
```

### 具名函数和匿名函数

```
具名函数和匿名函数的区别：看关键字·function后的函数名称，有函数名称的是具名函数，没有的是匿名函数
立即调用函数表达式
(function(){
    console.log('自执行函数')
}()}
```

### GET 和 POST 的区别

```
1、get请求是获取数据的，而post请求是提交数据的。
2、get请求能被缓存，post请求不能被缓存
3、get请求对数据长度的限制；当发送数据时，GET 方法向 URL 添加数据get请求的传送数据会拼接在url后面
4、GET在浏览器回退时是无害的，而POST会再次提交请求。
5、GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。
6、GET参数通过URL传递，POST放在Request body中。
```

### 同源策略

```
同源策略是浏览器最核心也最基本的安全功能，是禁止浏览器跨域请求数据，目的是保护信息安全。
域名、协议、端口号
```

### 跨域

```
域名、协议、端口号三者有一个不同的话都是属于一个跨域行为
nginx代理跨域
通过jsonp跨域
postMessage跨域
document.domain + iframe跨域
location.hash + iframe
window.name + iframe跨域

```

### 输入 url 后会发生什么？

```
1.DNS域名解析；
2.建立TCP连接；
3.发送HTTP请求；
4.服务器处理请求并返回响应结果；
5.关闭TCP连接；
6.浏览器解析HTML并布局渲染；
```

### ==和===的区别

```
 ===比较类型和值，==只比较值。
js在比较的时候如果是 == 会先做类型转换，再判断值是否相等
```

### null 和 undefined 的区别

```
console.log(null==undefined)//true
console.log(null===undefined)//false
Null类型，代表“空值”，代表一个空对象指针，使用typeof运算得到 “object”，所以你可以认为它是一个特殊的对象值。
 undefined： Undefined类型，当一个声明了一个变量未初始化时，得到的就是undefined。
null:
1作为函数的参数，表示该函数的参数不是对象。
2作为对象原型链的终点。
undefined：
1变量被声明了，但没有赋值时，就等于undefined。
2调用函数时，应该提供的参数没有提供，该参数等于undefined。
3对象没有赋值的属性，该属性的值为undefined。
4函数没有返回值时，默认返回undefined。
```

### 事件委托/事件代理

```
事件委托就是利用事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。
是利用事件冒泡的特性，将本应该注册在子元素上的事件处理程序注册在了父组件身上，
这样点击子元素时，发现其没有相应事件就会到父元素上寻找做做出响应，这样做的优势有：
１、减少dom操作，提高性能
２、随时都可以添加子元素，子元素也有相应的事件处理程序

```

### 事件流模型

```
1. 事件冒泡(fasle/不写)：当触发一个节点的事件是，会从当前节点开始，依次触发其祖先节点的同类型事件，直到DOM根节点。
2. 事件捕获(true)：当初发一个节点的事件时，会从DOM根节点开始，依次触发其祖先节点的同类型事件，直到当前节点自身。
3. 什么时候事件冒泡？什么时候事件捕获？
 ① 当使用addEventListener绑定事件，第三个参数传为true时表示事件捕获；
 ② 除此之外的所有事件绑定均为事件冒泡。
```

### 阻止事件冒泡和默认事件

```
阻止事件冒泡：

 ① IE10之前，e.cancelBubble = true;
 ② IE10之后，e.stopPropagation();

阻止默认事件：

 ① IE10之前：e.returnValue = false;
 ② IE10之后：e.preventDefault();
```

### arguments

```
arguments 是一个对应于传递给函数的参数的类数组对象。
arguments对象是所有（非箭头）函数中都可用的局部变量。
//转换成真正的数组
var args = Array.from(arguments)
var args = [...arguments]
```

### 数组的方法

```
//不改变原数组的方法
==>array.join():转成字符串，把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔,与split()方法相对应。
	返回值是字符串，不改变原数组
	返回值是排序后的数组，不改变原数组
==>array.indexOf(item):找出某个元素在数组中的索引
	返回值是所查询的数组元素的下标，不改变原数组
==>array.concat(数组)：方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
	返回值是合并后的新数组，不改变原数组
==>array.toString()：把数字转换为字符串/强转字符串调用该方法的对象不是 Number 时抛出 TypeError 异常。
	返回值是字符串，不改变原数组
==>array.slice(start,end)：可从已有的数组中返回选定的元素
	返回值是一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素,不改变原数组
==>array.includes(item)：用来判断一个数组中是否包含一个指定的值，如果包含则返回true，否则返回false；
	返回值是boolean值,不改变原数组
==>array.reduce(function)：方法接收一个函数作为累加器（accumulator），数组中的每个值（从左到右）开始缩减，最终为一个值。
	返回计算结果
==>arr.filter(function)：返回新数组,不影响原数组
==>arr.map(function)：只是相当于把原数组克隆一份，把克隆的这一份的数组中的对应项改变了,不影响原数组
==>arr.forEach(function)：遍历数组中的每一项，没有返回值，不支持IE
==>Array.isArray(判断的变量):判断是否是一个数组
	返回值是boolean值

//改变原数组的方法
==>array.push(item,item2...):可向数组的末尾添加一个或多个元素，它直接修改 arrayObject，而不是创建一个新的数组
	返回值是新数组的长度
==>array.pop():可向数组的末尾删除一个元素，它直接修改 arrayObject，而不是创建一个新的数组
	返回值是删除的元素
==>array.shift():删除数组最前面（头部）的元素
	返回值是删除的那个元素
==>array.unshift(item,item2...):添加一个或多个元素到数组的头部
	返回值是新数组的长度
==>array.splice(索引，删几个，添加1个，添加2个):通过索引删除某几个元素
	返回值是被删除的数组
==>array.reverse():数组反转
	返回值是相反的数组(原数组和返回值是一样的)
==>array.sort()：数组排序，可以对按字母顺序进行排序
	返回值是排序之后的数组(原数组和返回值是一样的)

```

### orEach/map/filter 方法

```
for循环：break
forEach:没有返回值
map:返回一个数组，适用于需要对数据结构进行重新整理或加工的数组
filter:返回一个符合条件的数组，用来过滤数据，配合return 使用，只保留数组中符合条件内容

array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
total	必需。初始值, 或者计算结束后的返回值。
currentValue	必需。当前元素
currentIndex	可选。当前元素的索引
arr	可选。当前元素所属的数组对象。
initialValue 	可选。传递给函数的初始值

```

### 对象的方法

```
Object.assign()
	==>通过复制一个或多个对象来创建一个新的对象。
Object.create()
	==>使用指定的原型对象和属性创建一个新对象。
Object.freeze()
	==>冻结对象：其他代码不能删除或更改任何属性。
Object.keys()
	==>返回一个包含所有给定对象自身可枚举属性名称的数组。
Object.getOwnPropertySymbols()
	==>返回一个数组，它包含了指定对象自身所有的符号属性。
Object.setPrototypeOf(child,parent)
	==>设置child的对象的原型（即内部 [[Prototype]] 属性）。
Object.defineProperty()
	==>给对象添加一个属性并指定该属性的配置。
Object.defineProperties()
	==>给对象添加多个属性并分别指定它们的配置。
Object.entries()
	==>返回给定对象自身可枚举属性的 [key, value] 数组。
Object.getOwnPropertyDescriptor()
	==>返回对象指定的属性配置。
Object.getOwnPropertyNames()
	==>返回一个数组，它包含了指定对象所有的可枚举或不可枚举的属性名。
Object.getPrototypeOf()
	==>返回指定对象的原型对象。
Object.is()
	==>比较两个值是否相同。所有 NaN 值都相等（这与==和===不同）。
Object.isExtensible()
	==>判断对象是否可扩展。
Object.isFrozen()
	==>判断对象是否已经冻结。
Object.isSealed()
	==>判断对象是否已经密封。
Object.preventExtensions()
	==>防止对象的任何扩展。
Object.seal()
	==>防止其他代码删除对象的属性。
Object.values()
	==>返回给定对象自身可枚举值的数组。
```

### string 方法

```
==>split():用于把一个字符串分割成字符串数组。与array.join是相反的。字符串变成数组
	返回值是一个数组
==>indexOf():可返回某个指定的字符串值在字符串中首次出现的位置。对大小写敏感。
	返回值是数字下标
==>concat():用于连接两个或多个字符串。
	返回值是连接后的字符串
==>replace():用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
	返回值是一个新的字符串
==>charAt():可返回指定位置的字符。获取字符串的某个字符有两种方法----------------'cat'[1]
	返回值是下标索引
==>charCodeAt():可返回指定位置的字符的 Unicode 编码.
	返回值是下标索引
==>sup():把字符串显示为上标。
==>toUpperCase():把字符串转换为大写。
==>toLowerCase():把字符串转换为小写。
==>slice():可提取字符串的某个部分，并以新的字符串返回被提取的部分。包前不包后
==>trim():从字符串的开始和结尾去除空格。参照部分 ECMAScript 5 标准
==>search():用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。
==>repeat(n):复制n次字符串
==>substr()
==>substring()
==>includes():判断字符串里是否存在数据
	返回值是boolean值
```

### 设计模式

```
一、单例模式
	==>确保只有一个实例，并且提供全局访问
	==>var a = {},但是会造成全局污染
二、策略模式
	==>策略模式的目的就是将算法的使用与算法的实现分离开来。
	==>定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。
三、代理模式
	==>图片懒加载实现的过程就是通过代理模式中的虚拟代理来实现的
	==>为其他对象提供一种代理以控制对这个对象的访问。在某些情况下，一个对象不适合或者不能直接引用另一个对象，而代理对象可以在客户端和目标对象之间起到中介的作用。
四、迭代器模式
	==>迭代器模式是指提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部表示。
	==>for循环
五、发布—订阅模式
	==>js事件就是经典的
	==>发布-订阅模式里面包含了三个模块，发布者，订阅者和处理中心。
六、命令模式
	==>命令模式中的命令(command)指的是一个执行某些特定事情的指令。
	==>通过不同的命令做不同的事情，常含有（关联）接收者。
	==>将一个请求封装为一个对象，从而使你可用不同的请求对客户进行参数化
七、组合模式
	==>组合模式将对象组合成树形结构，以表示“部分-整体”的层次结构。
	==>虚拟dom：将真实的DOM的数据抽取出来，以对象的形式模拟树形结构
八、模板方法模式
	==>一种只需使用继承就可以实现的非常简单的模式。
                ==>模板方法由两部分组成，一是抽象的父类，二是具体实现的子类。通常在抽象父类中封装了子类的算法框架，包括实现一些公共方法以及封装子类中所有方法的执行顺序。
                ==>ypescript中就有abstract中的抽象类和抽象方法就是使用的模板方法模式
九、装饰者模式
	==>允许向一个现有的对象添加新的功能，同时又不改变其结构。
	==>为对象添加新功能；不改变其原有的结构和功能
	==>ecorator 是 ES7 的一个新语法;装饰器语法
十、职责链模式
十一、中介者模式
十三、状态模式
十四、适配器模式
十五、外观模式
十六、享元模式

```

### 继承方式

```
原型链继承
	==>新实例的原型等于父类的实例；（per.prototype = new Person()）
借用构造函数继承(冒充对象)
	==>改变this指向；Preson.call(this,'jer')
组合继承
	==>per.prototype =new Person()
	==>Preson.call(this,'jer')
原型式继承
寄生式继承
寄生组合式继承
class继承
	==>extends关键字实现super
```

###Ts 的基本了解

```
TypeScript具有类型系统，且是JavaScript的超集。
元组类型：允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
	==>let arr:[Number,String] = [1,'xxl']
enum类（枚举）：
	==>enum flag={success=1,error=-1}
	==>let a:flag = flag.success
boolean：let b:Boolean= false
number：let b:Number=1
string：let b:String = 'xxl'
array：定义数组有三种方式
	==>var arr:any[] = [1,2,3]
	==>var arr:number[]=[1,2,3]
	==>var arr:Array<number>=[1,2,3]

any类型：let b:any = 1
void类型：定义的方法function没有返回值
null和undefinde：undefinde变量声明未赋值，
never类型:throw =new Error('错误')

```

### 浏览器的缓存机制也就是我们说的 HTTP 缓存机制

```
强缓存和协商缓存
	==>是浏览器在本地磁盘对用户最近请求过的文档进行存储，当访问者再次访问同一页面时，浏览器就可以直接从本地磁盘加载文档。
```

###TCP 的三次握手和四次挥手？

```
第一次握手：建立连接时，客户端发送syn包（syn=j）到服务器，并进入SYN_SENT状态，等待服务器确认；SYN：同步序列编号（Synchronize Sequence Numbers）。
第二次握手：服务器收到syn包，必须确认客户的SYN（ack=j+1），同时自己也发送一个SYN包（syn=k），即SYN+ACK包，此时服务器进入SYN_RECV状态；
第三次握手：客户端收到服务器的SYN+ACK包，向服务器发送确认包ACK(ack=k+1），此包发送完毕，客户端和服务器进入ESTABLISHED（TCP连接成功）状态，完成三次握手。

```

### script 标签后加 async 属性和 defer 属性有什么区别

```
1.<script src="example.js"></script>
	没有defer或async属性，浏览器会立即加载并执行相应的脚本。也就是说在渲染script标签之后的文档之前，不等待后续加载的文档元素，读到就开始加载和执行，此举会阻塞后续文档的加载；
2.<script async src="example.js"></script>
	有了async属性，表示后续文档的加载和渲染与js脚本的加载和执行是并行进行的，即异步执行；
3.<script defer src="example.js"></script>
 	有了defer属性，加载后续文档的过程和js脚本的加载(此时仅加载不执行)是并行进行的(异步)，js脚本的执行需要等到文档所有元素解析完成之后，DOMContentLoaded事件触发执行之前。
```

### AMD、CMD、ES6、CommonJS 的区别

```
js规范
1. 第一种是 CommonJS 方案，它通过 require 来引入模块，通过 module.exports 定义模块的输出接口。这种模块加载方案是服务器端的解决方案，它是以同步的方式来引入模块的，因为在服务端文件都存储在本地磁盘，所以读取非常快，所以以同步的方式加载没有问题。但如果是在浏览器端，由于模块的加载是使用网络请求，因此使用异步加载的方式更加合适。
2. 第二种是 AMD 方案，这种方案采用异步加载的方式来加载模块，模块的加载不影响后面语句的执行，所有依赖这个模块的语句都定义在一个回调函数里，等到加载完成后再执行回调函数。require.js 实现了 AMD 规范。
3. 第三种是 CMD 方案，这种方案和 AMD 方案都是为了解决异步模块加载的问题，sea.js 实现了 CMD 规范。它和require.js的区别在于模块定义时对依赖的处理不同和对依赖模块的执行时机的处理不同。
4. 第四种方案是 ES6 提出的方案，使用 import 和 export 的形式来导入导出模块。
 	==>1.commonjs输出的，是一个值的拷贝，而es6输出的是值的引用；
   	==>2.commonjs是运行时加载，es6是编译时输出接口；
```

### 深拷贝和浅拷贝（手写代码）

```
==>浅拷贝是拷贝一层，对象级别的就拷贝引用；
==>深拷贝是拷贝多层，每一级别的数据都会拷贝出来；
```

### 数组去重（手写代码）

```
==>Array.from(new Set(arr))
==>filter 加 indexOf 方法
==>forEach 加 incluse 方法
```

### 防抖和节流（手写代码）

```
==>防抖就是闭包加定时器
==>节流就是使用时间戳来实现的
```

### jsonp(手写代码)

```
==> JSONP 核心原理：script 标签不受同源策略约束，所以可以用来进行跨域请求，优点是兼容性好，但是只能用于 GET 请求；
==>img 标签，link 标签，script 标签
```

### 冒泡排序算法（手写代码）

### 斐波那契数列（手写代码）

### 如何实现 new 运算符（手写代码）

### 函数柯里化（手写代码）

### 偏函数（手写代码）

### 原生 js 实现 ajax(手写代码)

### 多维数组怎么变成一个一维数组(手写代码)

### 数组扁平化（手写代码）

### 封装 axios(手写代码)

### 图片懒加载的实现原理（手写代码）
