### Object的方法分批记忆
+ Object.assign()：通过复制一个或多个对象来创建一个新的对象。
+ Object.create()：使用指定的原型对象和属性创建一个新对象。

+ Object.keys()  可枚举属性
+ Object.values()  可枚举属性值
+ Object.entries()  可枚举属性和属性值
+ Object.getOwnPropertyNames()  可枚举和不可枚举属性名
+ Object.getOwnPropertySymbols()  可枚举和不可枚举的symbols属性名

+ Object.defineProperty()：给对象添加一个属性并分别指定它们的配置。
+ Object.defineProperties()：给对象添加多个属性并分别指定它们的配置。
+ Object.getOwnPropertyDescriptor(obj,name):返回对象指定的属性配置。

+ Object.getPrototypeOf()：返回指定对象的原型对象。
+ Object.setPrototypeOf()：设置对象的原型（即内部 [[Prototype]] 属性）

+ Object.freeze：冻结对象，其他代码不能删除或更改任何属性。
+ Object.seal：防止其他代码删除对象的属性。
+ Object.preventExtensions：防止对象的任何扩展。

+ Object.is：判断比较两个值是否相同。所有 NaN 值都相等（这与==和===不同）。
+ Object.isExtensible：判断对象是否可扩展。
+ Object.isSealed：判断对象是否已经密封。
+ Object.isFrozen：判断对象是否已经冻结。
+ Object.isExtensible：判断对象是否可扩展。
+ object.hasOwnProperty：判断对象是否包含特定的自身（非继承）属性