# 数组展开

1. 递归

```js
function flat1 (arr) {
    let result = []
    arr.forEach(element => {
        if (Array.isArray(element)) {
            result = result.concat(flat1(element))
        } else {
            result.push(element)
        }
    });
    return result
}
```



2. toString

``` js
function flat2 (arr) {
    // 有缺陷，toString 后无法保持之前的类型
    return arr.toString().split(',')
}
```



3. reduce

```js
function flat3 (arr) {
    // 本质和 flat1 一样的，都是递归
    return arr.reduce((pre, next) => {
        return pre.concat(Array.isArray(next) ? flat3(next) : next)
    }, [])
}
```



4. rest运算符

```js
function flat4 (arr) {
    while (arr.some(item => Array.isArray(item))) {
        // 相当于 [].concat('1', 2, [3, 4])
        // concat 方法本身就会把参数中的数组展开
        arr = [].concat(...arr);
    }
    return arr;
}
```



5. ES6 flat

```js
function flat5 (arr: any[]) {
    // flat() 方法会移除数组中的空项
    return arr.flat(Infinity)
}
```

