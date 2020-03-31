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



## 图像 ping

