### H5 的新特性

```
语义化标签
增强型表单
视频和音频audio和video
canvas
svg
Web Worker/Web Storage/WebSocket
本地存储localStorage和seessionStorage
拖拽
```

### css3 新特性

```
2D/3D转换
动画过渡transition
box-sizing
```

### div 盒子居中

```
1、====
 position: absolute;
     top:0;
     left:0;
     right:0;
     bottom:0;
     margin:auto;
2、====
无需知道宽度
position: absolute;
left: 50%;	/* 父盒子宽度的50% */
top: 50%;	/* 父盒子高度的50% */
transform: translate(-50%,-50%);	/* 子盒子自身宽高的50% */
3、===
display: flex;
justify-content: center;	/* 水平方向 居中*/
align-items: center;		/* 垂直方向 居中*/
```

### css 的弹性盒模型和怪异盒模型

```
标准盒模型:width和height分别应用到元素的内容框，在宽度和高度的范围之外绘制元素的内边距、边框、外边距
怪异盒模型:为元素设定的width和height属性决定了元素的边框盒，即为元素指定的任何内边距和边框都将在已设定的宽度和高度范围之内进行绘制，通过已设定的高度和宽度分别减去边框和内边距才能得到内容的高度和宽度
```

### css 实现三角形

```
#triangle-down {
    width: 0;
    height: 0;
    border-left:100px solid transparent;
    border-right: 100px solid transparent;
    border-top:100px solid yellow;
}
```

### 浏览器兼容前缀

```
-ms-:IE浏览器
-moz-:火狐浏览器
-o-:欧朋浏览器
-webkit-:谷歌、苹果浏览器
```

### 移动端适配

```
(1)用vw定制rem自适应布局
	==>/* 基于UI width=750px DPR=2的页面 */
	==>html:{font-size: calc(100vw / 750 * 100);}
(2) @media screen and (max-width: 600px) { /当屏幕尺寸小于600px时，应用下面的CSS样式/
	==>h5:{font-size: 20px;}
(3) var browserWidth = document.body.clientWidth;//获取浏览器可视区域的宽度。
	==>
```

### 两栏布局

```
a.左侧float:left;右侧margin-left;
b.左侧float:left; 右侧overflow:hidden;
c.绝对定位 .right{ position: absolute; top: 0; left: 200px; right: 0}
d.弹性布局

```

### flex 布局/弹性布局

```
display:flex;
```

### bfc 原理

```
BFC是一个独立的布局环境，其中的元素布局是不受外界的影响，并且在一个BFC中，行内元素水平排列，直到占满一行再换行，块元素则会独占完整的一个新行,在BFC中，它有自己的布局规则。

触发BFC：

1. 根元素
2. float 属性的属性值不为none
3. position属性的属性值为absolute或fixed
4. display属性的属性值为inline-block,table-cell,flex,inline-flex

作用：

1. 避免外边距重叠
2. 清除浮动
3. 阻止正常元素被浮动元素覆盖

```

### 动画使用

```
1、animation  @keyframes
2、transition  transform
3、/*setInterval(()=>{
	console.log('2222222')
	},100)*/
```

### 清除浮动

```
1、在后面加空div加上clear:both
2、在父元素添加clearfix类名====.clearfix:after{
    content:'clear';
    display:block;
    height:0;
    clear:both;
    overflow:hidden;
    visibility:hidden;
}
```
