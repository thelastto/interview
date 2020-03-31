# 实现一个once函数，传入函数参数只执行一次

```js
function once (func) {
  var done;
  return function () {
    if (!done) {
      func.apply(null, arguments)
      done = true
    }
  }
}
```

```js
function onlyDoOne = once(function() {
  console.log('1')
})
```

