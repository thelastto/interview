# HTTP

## 常见的请求方法

HTTP 1.0

- GET：从指定的资源请求数据
- POST：向指定的资源提交要被处理的数据，例如
  - 提交表单
  - 将消息发布到公告板，新闻组，邮件列表，博客或类似的文章组；
- HEAD

  - 类似于get请求，只不过返回的响应中没有具体的内容，只有头部
  - 只请求资源的首部
  - 检查超链接的有效性
  - 检查网页是否被修改

HTTP1.1

- PUT：替换或创建指定资源
- DELETE：对指定资源进行删除

HTTP2.0

- OPTIONS： 用于获取目的资源所支持的通信选项，比如说服务器支持的请求方式等等。

- TRACE：实现沿通向目标资源的路径的消息环回（loop-back）测试 ，提供了一种实用的 debug 机制。

- CONNECT

  - 为代理服务器准备的

  - 在 HTTP 协议中，**`CONNECT`** 方法可以开启一个客户端与所请求资源之间的双向沟通的通道。它可以用来创建隧道（tunnel）。

    例如，**`CONNECT`** 可以用来访问采用了 [SSL](https://developer.mozilla.org/en-US/docs/Glossary/SSL) ([HTTPS](https://developer.mozilla.org/zh-CN/docs/Glossary/https)) 协议的站点。客户端要求代理服务器将 TCP 连接作为通往目的主机隧道。之后该服务器会代替客户端与目的主机建立连接。连接建立好之后，代理服务器会面向客户端发送或接收 TCP 消息流。



所有通用服务器必须支持GET和HEAD方法。所有其他方法都是可选的。

- 安全性：在[此规范](https://tools.ietf.org/html/rfc7231#section-4.1)定义的请求方法中，GET，HEAD，OPTIONS和TRACE方法被定义为安全的
- 幂等性：PUT，DELETE和安全Method是幂等的。
- 可缓存性：GET, HEAD, and POST。但大多数是只实现GET和HEAD可缓存
  - 表示浏览器是会自动缓存的，以应用于后续请求。除非response中有相关策略



## GET 和 POST 的区别

get参数通过url传递，post放在request body中。

get请求在url中传递的参数是有长度限制的，而post没有。

get比post更不安全，因为参数直接暴露在url中，所以不能用来传递敏感信息。

get请求只能进行url编码，而post支持多种编码方式

get请求会浏览器主动cache，而post支持多种编码方式。

get请求参数会被完整保留在浏览历史记录里，而post中的参数不会被保留。

GET和POST本质上就是TCP链接，并无差别。但是由于HTTP的规定和浏览器/服务器的限制，导致他们在应用过程中体现出一些不同。



## HTTP  状态码

- 1xx (Informational): 收到请求，正在处理
- 2xx (Successful): 该请求已成功收到，理解并接受
- 3xx (Redirection): 重定向
- 4xx (Client Error): 该请求包含错误的语法或不能为完成
- 5xx (Server Error): 服务器错误

## 301 和 302 有什么具体区别

301：永久移动，请求的网页已永久移动到新的位置，服务器返回此响应，会自动将请求者转到新位置

302：历史移动，服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来继续以后的请求，



## HTTP 常用请求头

![http_request_header](../images/http_request_header.png)