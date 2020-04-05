# 跨域

## CORS 

CORS(Cross-Origin Resource Sharing，跨源资源共享) 背后的基本思想，就是使用自定义的 HTTP 头部 让浏览器与服务器进行沟通。

比如一个简单的使用 GET 或 POST 发送的请求，它没有自定义的头部，而主体内容是 text/plain。在 发送该请求时，需要给它附加一个额外的 Origin 头部，其中包含请求页面的源信息(协议、域名和端 口)，以便服务器根据这个头部信息来决定是否给予响应。下面是 Origin 头部的一个示例:

`Origin: http://www.nczonline.net`
 如果服务器认为这个请求可以接受，就在 Access-Control-Allow-Origin 头部中回发相同的源

信息(如果是公共资源，可以回发"*")。例如:

`Access-Control-Allow-Origin: http://www.nczonline.net`

如果没有这个头部，或者有这个头部但源信息不匹配，浏览器就会驳回请求。正常情况下，浏览器 会处理请求。注意，请求和响应都不包含 cookie 信息。

### IE

微软在 IE8 中引入了 XDR(XDomainRequest)类型。以下是 XDR 与 XHR 的一些不同之 处。

1. cookie 不会随请求发送，也不会随响应返回。
2. 只能设置请求头部信息中的 Content-Type 字段。 
3. 不能访问响应头部信息。 
4. 只支持GET和POST请求。

###其他浏览器

通过 XMLHttpRequest 对象实现了对 CORS 的原生支持

1. 不能使用 setRequestHeader()设置自定义头部。
2. 不能发送和接收 cookie。
3. 调用 getAllResponseHeaders()方法总会返回空字符串。



## JSONP

```js
function handleResponse(response){
alert("You’re at IP address " + response.ip + ", which is in " +
response.city + ", " + response.region_name);
}
var script = document.createElement("script");
script.src = "http://freegeoip.net/json/?callback=handleResponse"; document.body.insertBefore(script, document.body.firstChild);
```

- JSON只支持get，因为script标签只能使用get请求；
- JSONP需要后端配合返回指定格式的数据。

## 图像 ping



## 代理

起一个代理服务器，实现数据的转发

## 利用 iframe

- window.postMessage
- Cross Frame(aba)
- window.name

[http://lovelock.coding.me/javascript/2015-08-10-iframe%E9%97%B4%E9%80%9A%E4%BF%A1%E6%96%B9%E6%B3%95%E6%80%BB%E7%BB%93/#window-name](http://lovelock.coding.me/javascript/2015-08-10-iframe间通信方法总结/#window-name)



### window.postMessage

只支持到IE8及以上的IE浏览器，其他现代浏览器当然没有问题。

#### child 与 parent 通信

不受[同源策略](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)的限制

- 给接收数据的一方添加事件绑定：`addEventListener('message', receiveMessage);`

- 发送数据的一方拿到接收数据一方的window：`targetWindow.postMessage("Welcome to unixera.com", "http://iframe1.unixera.com");`

#### chilid 与 child 通信

有跨域问题，只适合站内不同子域间的通信（设置document.domain为同一级域名）



### Cross Frame

这是一个通用的方法，简单来说是A iframe包含B iframe，在B iframe中调用了相关的接口，完成调用之后获取到结果，`location.href`到和A iframe位于同一个域的C iframe，在C iframe中调用A iframe中定义的方法，将B iframe中获取的结果作为参数传到要跳转的url后，在C iframe中通过`location.search`变量来获取变量。

![iframe通信](https://tva1.sinaimg.cn/large/00831rSTly1gco3r27dd6j30ly0a4dg3.jpg)



### window.name

`window`对象的`name`属性是一个很特殊的属性，在设定了`window.name`之后，执行`location.href`跳转，`window.name`属性仍然不会发生变化，可以通过这种方式实现变量的传递。