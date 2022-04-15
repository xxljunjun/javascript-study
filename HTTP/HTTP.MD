### 原生 ajax

```js
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://way.jd.com", true);
xhr.send("city=深圳&appkey=7a85fc9df58cd155f764e033a257d879");
xhr.timeout = 7000;
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 || xhr.status == 200) {
    // if (config.dataType === "json") {
    //   console.log(JSON.parse(xhr.responseText))
    // } else {
    //   console.log(xhr.responseText);
    // }
  }
};
```

### jquery 中的 ajax

- $.ajax()使用发送 ajax 请求

```js
let config = {
  url: "http://way.jd.com", //请求路径
  data: {
    city: "深圳",
    appkey: "7a85fc9df58cd155f764e033a257d879",
  }, //携带参数
  type: "GET", //请求类型
  jsonp: "callbacks",
  timeout: 7000,
  contentType: "application/x-www-form-urlencoded",
  success(data) {
    console.log("请求成功了", data);
  },
  error(error) {
    console.log("请求失败了", error);
  },
};
$.ajax(config);
```

### axios 中的 ajax 和 promise

```js
首先需要知道：axios不是一种新的技术。
axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端。
本质上也是:`对原生XHR的封装，只不过它是Promise的实现版本`
// 符合最新的ES规范，有以下特点：
1、从浏览器中创建 XMLHttpRequests
2、从 node.js 创建 http 请求
3、支持 Promise API
4、拦截请求和响应
5、转换请求数据和响应数据
6、取消请求
7、自动转换 JSON 数据
8、客户端支持防御 XSRF
```

### fetch

```js
window的内置对象：fetch()
```

### HTTP 协议，即超文本传输协议

```JS
http协议是Hyper Text Transfer Protocol（超文本传输协议）的缩写;
`用于从万维网服务器传输超文本到本地浏览器的传送协议`，使用TCP/IP通信协议传输数据，面向对象简洁、快速、无连接、无状态。
// 超文本（Hypertext）
// 传输（Transfer）
// 协议（Protocol
// HTTP 是一个在计算机世界里专门在两点之间传输文字、图片、音频、视频等超文本数据的约定和规范
```

- General

```JS

```

- Resquest Headers

```js
'Content-Type': 'application/x-www-form-urlencoded','multipart/form-data; boundary=aBoundaryString','application/json;charset=UTF-8'
```

- Response Headers

```JS

```


### http

```js
// 因特网的协议栈由五个部分组成:
应用层 ===> 运输层 ===> 网络层 ===> 链路层 ===> 物理层
//OSI 模型是7层
`应用层` ===> `表示层` ===> 会话层 ===> 运输层 ===> 网络层 ===> 链路层 ===> 物理层
//两者之间的区别
表示层：主要包括数据压缩和数据加密以及数据描述，数据描述使得应用程序不必担心计算机内部存储格式的问题。
会话层：提供了数据交换的定界和同步功能，包括建立检查点和恢复方案。
```

- 应用层

```js
超文本传输协议：`HTTP`
电子邮件传送协议：`SMTP`
端系统文件上传协议：`FTP`
域名解析协议：`DNS `
// 应用层协议分布在多个端系统上，一个端系统应用程序与另外一个端系统应用程序交换信息分组，我们把位于应用层的信息分组称为 报文(message)。
```

- 运输层

```js
两种传输协议 TCP和 UDP
TCP协议
UDP协议
// 利用这两者中的任何一个都能够传输报文，不过这两种协议有巨大的不同。
```

- 网络层

```js
IP 协议
// 因特网的网络层负责将称为数据报的网络分层从一台主机移动到另一台主机。
网络层一个非常重要的协议是 IP 协议，所有具有网络层的因特网组件都必须运行 IP 协议，IP 协议是一种网际协议，除了 IP 协议外，网络层还包括一些其他网际协议和路由选择协议，一般把网络层就称为 IP 层，由此可知 IP 协议的重要性。
```

- 链路层

```js
为了将分组从一个节点（主机或路由器）运输到另一个节点，网络层必须依靠链路层提供服务
链路层的例子包括以太网、WiFi 和电缆接入的 DOCSIS 协议
因为数据从源目的地传送通常需要经过几条链路，一个数据包可能被沿途不同的链路层协议处理，我们把链路层的分组称为 帧(frame)
```

- 物理层

```js
虽然链路层的作用是将帧从一个端系统运输到另一个端系统，而物理层的作用是将帧中的一个个 比特 从一个节点运输到另一个节点，物理层的协议仍然使用链路层协议，这些协议与实际的物理传输介质有关，例如，以太网有很多物理层协议：关于双绞铜线、关于同轴电缆、关于光纤等等。
```

### 浏览器 Web Broser
+ World Wide Web 万维网
```js
谷歌
qq
ie
火狐
sari
欧朋
输入url后会发生什么？
  1、DNS域名解析
  2、构建浏览器和服务器的TCP链接（3次握手）
  3、浏览器发送HTTP请求
  4、服务器处理HTTP请求，并返回请求的资源（HTML，CSS，JS）
  5、浏览器解析并渲染界面
  6、断开TCP链接（4次挥手）

```
### 服务器 Web Server 
```js
// 前最主流的三个Web服务器是Apache、 Nginx 、IIS.

```

### CDN
```
CDN的全称是Content Delivery Network，即内容分发网络。
CDN的关键技术主要有内容存储和分发技术。
```
