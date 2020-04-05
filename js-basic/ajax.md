# ajax

## 实现一个 Ajax

```js
var xhr = new XMLHttpRequest()
// 必须在调用 open()之前指定 onreadystatechange 事件处理程序才能确保跨浏览器兼容性
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status >= 200 && xhr.status < 300 || xhr.status ==== 304) {
      console.log(xhr.responseText)
    } else {
      console.log('Error:' + xhr.status)
    }
  }
}
// 第三个参数表示异步发送请求
xhr.open('get', '/api/getSth',  true)
// 参数为作为请求主体发送的数据
xhr.send(null)
```



## Ajax 状态

0. 未初始化。尚未调用 open()方法。
1. 启动。已经调用 open()方法，但尚未调用 send()方法。
2. 发送。已经调用 send()方法，但尚未接收到响应。
3. 接收。已经接收到部分响应数据。
4. 完成。已经接收到全部响应数据，而且已经可以在客户端使用了。



## 将原生的 ajax 封装成 promise

```js
const ajax = (url, method, async, data) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
      // 已经接收到全部响应数据，而且已经可以在客户端使用了
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText))
        } else if (xhr.status > 400) {
          reject('发生错误')
        }
      }
    }
    xhr.open(url, method, async)
    xhr.send(data || null)
  })
}
```

