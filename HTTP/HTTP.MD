### HTTP 协议，即超文本传输协议

```JS
http协议是Hyper Text Transfer Protocol（超文本传输协议）的缩写;
`用于从万维网服务器传输超文本到本地浏览器的传送协议`，使用TCP/IP通信协议传输数据，面向对象简洁、快速、无连接、无状态。
//http请求：普通http请求通httpRequest象请求服务器接受请求返数据需要页面刷新
//AJAX请求：AJAX通xmlHttpRequest象请求服务器服务器接受请求返数据实现刷新交互
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

### 原生 ajax

```js
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://way.jd.com", true);
xhr.send('city=深圳&appkey=7a85fc9df58cd155f764e033a257d879');
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

### jquery中的 ajax

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

### axios中的 ajax和promise
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

