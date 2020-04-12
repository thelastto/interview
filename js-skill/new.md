# 实现一个 new

```js
const _new = function (fun, ...args) {
  // 创建一个新对象
  const obj = Object.create(fn.prototype);
  const result = fn.apply(obj, args);
  // 返回 null 和 undefined 不处理，依然返回obj
  return ret instanceof Object ? result : obj;
}
```

