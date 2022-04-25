### vue 中 data 为什么是一个函数

```
vue组件是用来复用的，且 JS 里对象是引用关系，如果组件中 data 是一个对象，那么这样作用域没有隔离，子组件中的 data 属性值会相互影响，
如果组件中 data 选项是一个函数，那么每个实例可以维护一份被返回对象的独立的拷贝，组件实例之间的 data 属性值不会互相影响；
而 new Vue 的实例，是不会被复用的，因此不存在引用对象的问题。
为了保证组件的独立性和可复用性
```

### vue 组件的通信

```
①ref通信
②$children
③$parent
④props和$emit
	==>async修饰符
	==>this.$emit("update:变量",需要传递的值)
⑤eventBus事件总线
	==>vue.prototype.$EventBus = new Vue()
	==>import Vue from 'vue'---export const EventBus = new Vue()
⑥provide/inject
⑦vuex通信
⑧attrs/listeners 适用于 隔代组件通信
	==>inheritAttrs:false
	==> <childDomChild v-bind="$attrs" v-on="$listeners"></childDomChild>
⑨vue2.6新加的v-slot实现作用域插槽通信：在父组件中使用子组件的数据
	==><slot name="header" :data='user'>0000000000</slot>
	==><template v-slot:header='slotprops'> <p>{{slotprops.data}}</p></template>

```

### vuex 的原理

```
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。每一个 Vuex 应用的核心就是 store（仓库）。“store” 基本上就是一个容器，它包含着你的应用中大部分的状态 ( state )。
（1）Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
（2）改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化。
State: 驱动应用的数据源
Actions: 专门用来与后端backend API打交道
Mutations: Vuex中专门用于更新state
Modules:分模块管理vuex
Getters: 当于组件中的计算属性computed,与state相关，发生变化

1、可以用mapState、mapGetters在computed进行简写。
2、可以用mapMutations、mapActions在methods进行简写。
3、this.$store.dispatch触发actions上的方法进行调用后端数据。
4、this.$store.commit触发mutations上的方法修改state上的变量。

```

### vue 生命周期

```
vue的生命周期：Vue 实例从创建到销毁的过程；开始创建-->初始化数据-->编译模块-->挂载dom渲染页面-->更新dom渲染页面—>卸载。
生命周期钩子函数：组件不同阶段会触发相应的钩子函数
初始化阶段、模板编译阶段、挂载阶段、卸载阶段
beforecreat
	==>初始化事件、与data属性进行绑定
	该实例内的所有东西都还没有创建$el,data都是undefined。
creacted
	==>判断是否有el,如果有就继续往下编译，如果没有直到在该实例上调用vm.$mount(el)[也就是动态引入了el]。
	render函数>template选项>outer Html-------渲染的一个优先级
beforeMount
	==>此时是给vue实例对象添加$el成员，并且替换掉挂载的DOM元素。
mounted
beforeUpdate
	==>当vue发现data中的数据发生变化，会触发对对应组件的重新渲染，
	当数据改变后调用beforeupdata，当渲染完成后调用updated钩子函数。
updated
beforeDestroy
	==>官方解释：Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。
	移除事件监听器(EventBus.$off, window.addEventListener("scroll", 方法名))、关闭定时器、销毁所有的子实例
destroyed
activated
	==>keep-alive(组件激活时触发)
deactivated
	==>keep-alive(组件销毁时触发)
ErrorCaptured

beforeCreate	组件实例被创建之初，组件的属性生效之前
created	组件实例已经完全创建，属性也绑定，但真实 dom 还没有生成，$el 还不可用
beforeMount	在挂载开始之前被调用：相关的 render 函数首次被调用
mounted	el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子
beforeUpdate	组件数据更新之前调用，发生在虚拟 DOM 打补丁之前
update	组件数据更新之后
activited	keep-alive 专属，组件被激活时调用
deactivated	keep-alive 专属，组件被销毁时调用
beforeDestory	组件销毁前调用
destoryed	组件销毁后调用
```

### v-if 与 v-for 的优先级

```
当 Vue 处理指令时，v-for 比 v-if 具有更高的优先级；所以不一般不能用于同一个标签上
每一次判断都需要遍历整个数组，将会十分影响性能
所以在实际开发中，我们会先判断再循环
```

### v-if 和 v-show 的区别

```
①v-if是通过控制dom节点的存在与否来控制元素的显隐；v-show是通过设置DOM元素的display样式，block为显示，none为隐藏
②v-if切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；v-show只是简单的基于css切换；
如果是频繁的切换用v-show，否则用v-if
```

### vue 中 key 的作用

```
1、key的作用主要是为了高效的更新虚拟DOM
2、不能使用index作为v-for中的key；你删除一个数组长度为3的第二项，vue会认为你删除的是第三项，因为index也是连续的
3、当页面的数据发生变化时，Diff算法只会比较同一层级的节点
4、有相同父元素的子元素必须有独特的 key。重复的 key 会造成渲染错误

```

### 虚拟 dom

```
virtual DOM：是将真实的DOM的数据抽取出来，以对象的形式模拟树形结构
template模板（编译）==>渲染函数（执行）==>虚拟dom==>patch（patching算法）==>真实dom（视图）
虚拟DOM的最终目标是将虚拟节点渲染到视图上

```

### diff 算法

```
diff的过程就是调用名为patch的函数，比较新旧节点，一边比较一边给真实的DOM打补丁
虚拟DOM最核心的部分，它可以将vnode渲染成真实的DOM
1、用 JavaScript 对象结构表示 DOM 树的结构；然后用这个树构建一个真正的 DOM 树，插到文档当中
2、当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异
3、把所记录的差异应用到所构建的真正的DOM树上，视图就更新了
```

### conputed 和 watch 的区别

```
conputed
1. 支持缓存，只有依赖数据发生改变，才会重新进行计算
2. 不支持异步，当computed内有异步操作时无效，无法监听数据的变化
3.computed 属性值会默认走缓存，计算属性是基于它们的响应式依赖进行缓存的，也就是基于data中声明过或者父组件传递的props中的数据通过计算得到的值
4. 如果一个属性是由其他属性计算而来的，这个属性依赖其他属性，是一个多对一或者一对一，一般用computed
5.如果computed属性属性值是函数，那么默认会走get方法；函数的返回值就是属性的属性值；在computed中的，属性都有一个get和一个set方法，当数据变化时，调用set方法。
watch
1. 不支持缓存，数据改变，直接会触发相应的操作；
2.watch支持异步；
3.监听的函数接收两个参数，第一个参数是最新的值；第二个参数是输入之前的值；
4. 当一个属性发生变化时，需要执行对应的操作；一对多；
5. 监听数据必须是data中声明过或者父组件传递过来的props中的数据，当数据变化时，触发其他操作，函数有两个参数，
immediate：组件加载立即触发回调函数执行，
deep: 深度监听，为了发现对象内部值的变化，复杂类型的数据时使用，例如数组中的对象内容的改变，注意监听数组的变动不需要这么做。注意：deep无法监听到数组的变动
```

### vue 的自定义指令

```
{{}}插值语法
v-html插入html片段,可以防止xss攻击,类似innerHTML
v-once只渲染一次
v-text插入文本,不解析html,类似innerText
v-model 在表单元素上实现:双向数据绑定
	==>v-bind绑定一个value属性；v-on指令给当前元素绑定input事件。
v-on
v-bind
v-show
v-if
v-else-if
v-else
v-for

```

### $nextTick

```
==>在js中属于微任务
==>$nextTick 是在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后使用 $nextTick，则可以在回调中获取更新后的 DOM，
==>Vue生命周期的created()钩子函数进行的DOM操作一定要放在Vue.nextTick()的回调函数中，原因是在created()钩子函数执行的时候DOM 其实并未进行任何渲染，
而此时进行DOM操作无异于徒劳
```

### v-on 可以监听多个方法

```
<input type="text" v-on="{ input:onInput,focus:onFocus,blur:onBlur, }">
```

### keep-alive

```
keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。
实现keep-alive的方式
1、  <router-view v-if="$route.meta.keepAlive"></router-view>
2、include等于组件名：<keep-alive include="test-keep-alive">
  <!-- 将缓存name为test-keep-alive的组件 -->
  <component></component>
</keep-alive>

```

### 路由跳转传参 params 和 query 的区别

```
1、接收参数的方式不同
	==>this.$route.params/this.$route.query
2、query的方法传参url路径会显示传递的参数
3、params刷新页面会丢失参数
4、params是用name属性，query是用path属性来编写传参地址

```

### $router和$route

```
$router：$router对象是全局路由的实例，是router构造方法的实例
$route：$route对象表示当前的路由信息，包含了当前 URL 解析得到的信息。包含当前的路径，参数，query对象等
this.$router.push()
this.$router.replace()
this.$router.go(n)
this.$router.back()
```

### Vue-router 跳转和 location.href 有什么区别

```
①vue-router使用pushState进行路由更新，静态跳转，页面不会重新加载；location.href会触发浏览器，页面重新加载一次
②vue-router使用diff算法，实现按需加载，减少dom操作
③vue-router是路由跳转或同一个页面跳转；location.href是不同页面间跳转；
④vue-router是异步加载this.$nextTick(()=>{获取url})；location.href是同步加载

```

### Vue-router 导航守卫有哪些

```
beforeRouteEnter(to, from,) {
	console.log("to", to)
	console.log("from", from)
	console.log("next", next)
	next(vm => {
	// 通过 `vm` 访问组件实例
	})
	// 在渲染该组件的对应路由被 confirm 前调用
	// 不！能！获取组件实例 `this`
	// 因为当守卫执行前，组件实例还没被创建
},
beforeRouteUpdate(to, from, next) {
	// 在当前路由改变，但是该组件被复用时调用
	// 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
	// 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
	// 可以访问组件实例 `this`
},
beforeRouteLeave(to, from, next) {
	// 导航离开该组件的对应路由时调用
	// 可以访问组件实例 `this`
},
//全局的前置路由
router.beforeEach
```

### vue-router 中常用的 hash 和 history 路由模式实现原理

```
//hash 路由
早期的前端路由的实现就是基于 location.hash 来实现的。其实现原理很简单，location.hash 的值就是 URL 中 # 后面的内容。比如下面这个网站，它的 location.hash 的值为 '#search'：
以使用 hashchange 事件来监听 hash 值的变化，从而对页面进行跳转（渲染）
// history 路由
history.pushState() 和 history.repalceState()。这两个 API 可以在不进行刷新的情况下，操作浏览器的历史纪录。唯一不同的是，前者是新增一个历史记录，后者是直接替换当前的历史记录
pushState 和 repalceState 两个 API 来操作实现 URL 的变化 ；
以使用 popstate 事件来监听 url 的变化，从而对页面进行跳转（渲染）
history.pushState() 或 history.replaceState() 不会触发 popstate 事件，这时我们需要手动触发页面跳转（渲染）。
```

### vuex 和 localStorage 的区别

```
1、vuex的数据刷新页面会丢失，而localStorage的数据是永久存储的，除非手动清除。
2、vuex存储在内存，localstorage（本地存储）则以文件的方式存储在本地,永久保存；
sessionstorage( 会话存储 ) ,临时保存。localStorage和sessionStorage只能存储字符串类型，
对于复杂的对象可以使用ECMAScript提供的JSON对象的stringify和parse来处理
3、应用场景：vuex用于组件之间的传值，localstorage，sessionstorage则主要用于不同页面之间的传值。
4、vuex的数据是响应式的
5、localstorage无法存储function.
```

### vue 中的动态路由

```
像后台管理系统的左边菜单的导航栏，要做角色权限的一个控制；路由由后端返回
简单的角色权限：管理员权限和普通用户
复杂的路由权限：OA系统，门店用户，个人用户，区域用户
```

### vue 的插槽 v-slot

```
父组件需要在子组件内放一些DOM，那么这些DOM是显示、不显示、在哪个地方显示、如何显示，就是slot分发负责的活。
在vue2.6版本以上使用v-slot代替了slot 和 scope-slot ，vue3.0中也弃用了。
v-slot 只能添加到template 或自定义组件上
可以在子组件上写插槽的默认内容：<slot name='header'>11111111111</slot>
1、默认的插槽
	==>任何没有被包裹在带有 v-slot 的 组件标签 中的内容都会被视为默认插槽的内容。
	        没有名字的 隐含有一个 “default” 名称
2、具名插槽
	==><template v-slot:header> <p>111111111</p> </template>
	==><template #header> <p>111111111</p> </template>
3、作用域插槽
	==><slot name="header" :data='user'>0000000000</slot>
	==><template v-slot:header='slotprops'> <p>{{slotprops.data}}</p></template>
4、动态插槽名
	==><template v-slot:[dynamicSlotName]> 00000000 </template>
1、父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。
2、<slot></slot>标签里面的内容会作为后备内容且有默认的名字default
3、(特殊：独占默认插槽的缩写语法)---只要出现多个插槽，请始终为所有的插槽使用完整的基于 <template> 的语法，v-slot 只能添加在 <template> 上
4、作用域插槽:绑定在 <slot> 元素上的 attribute 被称为插槽 prop
5、#简写： #default="{ user }"
```

### vue 中的混入 minx

```
1、混入对象的钩子将在组件自身钩子之前调用。
mixins:局部混入
mixin:全局混入，一旦使用全局混入对象，将会影响到所有之后创建的 Vue 实例
```

### vue 中的过滤器

```
双花括号插值
1、 当有局部和全局两个名称相同的过滤器时候，会以就近原则进行调用，即：局部过滤器优先于全局过滤器被调用！
2、 一个表达式可以使用多个过滤器。过滤器之间需要用管道符“|”隔开。其执行顺序从左往右
```

### 请谈谈你对 mvvm 的理解

```
vue是实现了双向数据绑定的mvvm框架，当视图改变更新模型层，当模型层改变更新视图层。在vue中，使用了双向绑定技术，就是View的变化能实时让Model发生变化，而Model的变化也能实时更新到View。
MVVM 由 Model、View、ViewModel 三部分构成
Model： 代表数据模型，也可以在 Model 中定义数据修改和业务逻辑；
View ：代表 UI 组件，它负责将数据模型转化成 UI 展现出来；
ViewModel ：是一个同步View 和 Model的对象；
响应式开发
组件化开发
Vue的核心思想就是数据驱动页面，所谓数据驱动，就是页面的dom结构由数据的映射产生，开发者不用去管界面的渲染，只需要管理数据的修改

//暴露的问题
1、开发者在代码中大量调用相同的 DOM API, 处理繁琐 ，操作冗余，使得代码难以维护。
2、大量的DOM 操作使页面渲染性能降低，加载速度变慢，影响用户体验。
3、当 Model 频繁发生变化，开发者需要主动更新到View ；当用户的操作导致 Model 发生变化，开发者同样需要将变化的数据同步到Model 中，这样的工作不仅繁琐，而且很难维护复杂多变的数据状态。

Vue.js 可以说是MVVM 架构的最佳实践，VUE并没有完全遵循MVVM，专注于 MVVM 中的 ViewModel，不仅做到了数据双向绑定，而且也是一款相对比较轻量级的JS 库，API 简洁，很容易上手
```

### MVC

```
MVC 是 Model-View-Controller 的缩写，即 模型—视图—控制器 。
Model：后端传递的 数据 。
View：所看到的 页面 。
Controller：页面 业务逻辑 。
```

### v-model 双向数据绑定的原理

```
ue数据双向绑定是通过数据劫持结合发布者-订阅者模式的方式来实现。
数据劫持的实现主要依赖于Object.defineProperty(),通过这个函数可以监听到get,set事件。
其中observer是最主要的部分，
用Object.defineProperty来实现数据的劫持，
然后用他的set,get方法来通知订阅者，触发update方法，从而实现更新视图
Object.defineProperty()
	==>给对象添加一个属性并指定该属性的配置。
vue 双向数据绑定是通过 数据劫持 结合 发布订阅模式的方式来实现的， 也就是说数据和视图同步，数据发生变化，视图跟着变化，视图变化，数据也随之发生改变；
核心：关于VUE双向数据绑定，其核心是 Object.defineProperty()方法。
```

### vue 中的修饰符

```
//事件修饰符
	.stop 阻止单机事件冒泡
	.prevent 阻止默认行为（比如 @submit.prevent 会阻止提交后刷新页面）
	.capture 添加事件侦听器时使用捕获模式
	.self 只有事件在元素本身（而不是子元素）触发时触发回调
	.once 只触发一次（组件也适用）
	.key 触发事件的按键
	.native 原生点击事件
//v-model 修饰符
	.lazy在输入框中，默认是在input事件中同步输入框的数据，使用 lazy修饰符会转变为在change事件中同步（失去焦点或按回车才更新）。
	. number将输入转换为Number类型，默认是String
	.trim 自动过滤输入的首尾空格

```

### vue 中的自定义指令

```
directives: 自定义指令
有三个钩子函数
bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。
el, binding, vnode,oldVnode：四个函数的入参
//el：指令所绑定的元素，可以用来直接操作 DOM。
//binding：一个对象，包含以下 property：
//vnode：Vue 编译生成的虚拟节点。移步 VNode API 来了解更多详情。
//oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。
```

###vue 框架的优点

```
轻量级框架：只关注视图层，是一个构建数据的视图集合，大小只有几十kb；
简单易学：国人开发，中文文档，不存在语言障碍 ，易于理解和学习；
双向数据绑定：保留了angular的特点，在数据操作方面更为简单；
组件化：保留了react的优点，实现了html的封装和重用，在构建单页面应用方面有着独特的优势；
视图，数据，结构分离：使数据的更改更为简单，不需要进行逻辑代码的修改，只需要操作数据就能完成相关操作；
虚拟DOM：dom操作是非常耗费性能的， 不再使用原生的dom操作节点，极大解放dom操作，但具体操作的还是dom不过是换了另一种方式；
运行速度更快:相比较与react而言，同样是操作虚拟dom，就性能而言，vue存在很大的优势。
```

### vue-loader 是什么

```
vue文件的一个加载器，将template/js/style转换成js模块。
用途：js可以写es6、style样式可以scss或less、template可以加jade等
```

### axios 的特点有哪些

```
从浏览器中创建XMLHttpRequests；
node.js创建http请求；
支持Promise API；
拦截请求和响应；
转换请求数据和响应数据；
取消请求；
自动换成json。
axios中的发送字段的参数是data跟params两个，两者的区别在于params是跟请求地址一起发送的，data的作为一个请求体进行发送
params一般适用于get请求，data一般适用于post put 请求。
```

### 封装 vue 组件的过程

```
1. 建立组件的模板，先把架子搭起来，写写样式，考虑好组件的基本逻辑。(os：思考1小时，码码10分钟，程序猿的准则。)
2. 准备好组件的数据输入。即分析好逻辑，定好 props 里面的数据、类型。
3. 准备好组件的数据输出。即根据组件逻辑，做好要暴露出来的方法。
4. 封装完毕了，直接调用即可
```

### 面对对象思想

```
面向对象的方法就是利用抽象、封装等机制，借助于对象、类、继承、消息传递等概念进行软件系统构造的软件开发方法。
面向对象，将所需要做的功能抽象成一个“对象”，然后反复调用这个对象来完成你想要的功能

```

### vue 初始化页面闪动问题

```
在css里加上[v-cloak] {
display: none;
}。
如果没有彻底解决问题，则在根元素加上style="display: none;" :style="{display: 'block'}"
```

### vue-router 实现路由懒加载

```
结合 Vue 的异步组件 (opens new window)和 Webpack 的代码分割功能 (opens new window)，轻松实现路由组件的懒加载
第一种：vue异步组件技术 ==== 异步加载，vue-router配置路由 , 使用vue的异步组件技术 , 可以实现按需加载 .但是,这种情况下一个组件生成一个js文件。
第二种：路由懒加载(使用import)。
第三种：webpack提供的require.ensure()，vue-router配置路由，使用webpack的require.ensure技术，也可以实现按需加载。这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。
```

### SPA 单页面的理解

```
优点：

用户体验好、快，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染；

基于上面一点，SPA 相对对服务器压力小；

前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理；

缺点：

初次加载耗时多：为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载，部分页面按需加载；

前进后退路由管理：由于单页应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，所有的页面切换需要自己建立堆栈管理；

SEO 难度较大：由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。
```

###Vue 的单向数据流

```
所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。

这样会防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流向难以理解。

额外的，每次父级组件发生更新时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。

子组件想修改时，只能通过 $emit 派发一个自定义事件，父组件接收到后，由父组件修改。
```

### Vue 的父组件和子组件生命周期钩子函数执行顺序

```
Vue 的父组件和子组件生命周期钩子函数执行顺序可以归类为以下 4 部分：

加载渲染过程

父 beforeCreate -> 父 created -> 父 beforeMount ->
 子 beforeCreate -> 子 created -> 子 beforeMount ->
子 mounted -> 父 mounted

子组件更新过程

父 beforeUpdate -> 子 beforeUpdate -> 子 updated -> 父 updated

父组件更新过程

父 beforeUpdate -> 父 updated

销毁过程

父 beforeDestroy -> 子 beforeDestroy -> 子 destroyed -> 父 destroyed
！！！子组件的updated 、mounted 和destroyed 优先于父组件执行
```

### SSR 服务器渲染

```
 BSR 客户端渲染(前后端分离)：视图与数据的组装是在客户端完成的
SSR 服务器渲染(前后端不分离)：视图和数据的组装是在服务端完成的
BSR的优势和劣势有哪些？
	服务器压力小
  前后端分离,代码更容易维护
  数据化应用，交互更加丰富
  前端工程师来讲价值更高
  在ToC产品上应用更广泛
SSR的优势和劣势有哪些？
  前后端不分离,对后端的要求非常高
  有利于SEO
  对客户端的压力比较小，服务器压力较大
  在ToB产品上应用比较广泛

```

### vue 项目的前端代码优化

```
路由懒加载
图片懒加载：data-src
cdn静态资源加速
第三方插件的按需引入
开启gzip压缩

防抖和节流
减少回流和重绘呀
v-if和v-show的使用
离开路由时销毁定时器和监听事件
keep-alive

```

### vue3 有了解吗

```
（1）监测机制的改变：Proxy 替换了Object.defineProperty 去监听数据的变化
（2）模板： 3.0 把作用域插槽改成了函数的方式，这样只会影响子组件的重新渲染，提升了渲染的性能。
（3）对象式的组件声明方式：3.0 修改了组件的声明方式，改成了类式的写法
Vue 3.0 正走在发布的路上，Vue 3.0 的目标是让 Vue 核心变得更小、更快、更强大，因此 Vue 3.0 增加以下这些新特性：
Proxy 的优势如下:

Proxy 可以直接监听对象而非属性；（$set）

Proxy 可以直接监听数组的变化；

Proxy 有多达 13 种拦截方法,不限于 apply、ownKeys、deleteProperty、has 等等是 Object.defineProperty 不具备的；

Proxy 返回的是一个新对象,我们可以只操作新的对象达到目的,而 Object.defineProperty 只能遍历对象属性直接修改；

Proxy 作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利；

Object.defineProperty 的优势如下:

兼容性好，支持 IE9，而 Proxy 的存在浏览器兼容性问题,而且无法用 polyfill 磨平，因此 Vue 的作者才声明需要等到下个大版本( 3.0 )才能用 Proxy 重写。

```

### webpack

```
本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器
入口(entry):
输出(output):
loader:
插件(plugins):目的在于解决 loader 无法实现的其他事

Webpack打包顺序流程
1.初始化参数：读取命令行传入或者webpack.config.js文件，初始化本次构建的配置参数
2.开始编译 用上一步得到的参数初始Compiler对象，加载所有配置的插件，通过执行对象的run方法开始执行编译
3.确定入口 根据配置中的 Entry 找出所有入口文件
4.编译模块 从入口文件出发，调用所有配置的 Loader 对模块进行编译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理
5.完成模块编译 在经过第4步使用 Loader 翻译完所有模块后， 得到了每个模块被编译后的最终内容及它们之间的依赖关系
6.输出资源 根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk,再将每个 Chunk 转换成一个单独的文件加入输出列表中，这是可以修改输出内容的最后机会
7.输出完成 在确定好输出内容后，根据配置确定输出的路径和文件名，将文件的内容写入文件系统中。

```

### webpack 的常见 loader

```
file-loader：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件
url-loader：和 file-loader 类似，但是能在文件很小的情况下以 base64 的方式把文件内容注入到代码中去
source-map-loader：加载额外的 Source Map 文件，以方便断点调试
image-loader：加载并且压缩图片文件
babel-loader：把 ES6 转换成 ES5
css-loader：加载 CSS，支持模块化、压缩、文件导入等特性
style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS。
eslint-loader：通过 ESLint 检查 JavaScript 代码
```

### Vue 的初始化过程（new Vue(options)）都做了什么？
+ 调用了5个初始化方法
```js
initMixin(Vue); //vue实例上定义了_init()方法，$options
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);
```
+ 找到 vue 的入口文件:通过debbuge的方法找到/src/core/instance/index.js入口文件
```js
合并配置项
初始化生命周期

/*
Vue 的初始化过程（new Vue(options)）都做了什么？
  ==>处理组件配置项
  ==>初始化根组件时进行了选项合并操作，将全局配置合并到根组件的局部配置上
  ==>初始化每个子组件时做了一些性能优化，将组件配置对象上的一些深层次属性放到 vm.$options 选项中，以提高代码的执行效率
  ==>初始化组件实例的关系属性，比如 $parent、$children、$root、$refs 等
  ==>处理自定义事件
  ==>调用 beforeCreate 钩子函数
  ==>初始化组件的 inject 配置项，得到 ret[key] = val 形式的配置对象，然后对该配置对象进行响应式处理，并代理每个 key 到 vm 实例上
  ==>数据响应式，处理 props、methods、data、computed、watch 等选项
  ==>解析组件配置项上的 provide 对象，将其挂载到 vm._provided 属性上
  ==>调用 created 钩子函数
  ==>如果发现配置项上有 el 选项，则自动调用 $mount 方法，也就是说有了 el 选项，就不需要再手动调用 $mount 方法，反之，没提供 el 选项则必须调用 $mount
  ==>接下来则进入挂载阶段
*/
```
