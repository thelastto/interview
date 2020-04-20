# 题目

## 1. 将数组扁平化并去除其中重复数据，最终得到一个升序且不重复的数组

```js
const func = (arr) => [...new Set(arr.flat(Infinity).sort((a, b) => a - b))]
```

划重点：扁平化、排序、去重

## 2. 使用 sort() 对数组 [3, 15, 8, 29, 102, 22] 进行排序，输出结果

是`[102, 15, 22, 29, 3, 8]`哦

`sort()` 方法用[原地算法](https://en.wikipedia.org/wiki/In-place_algorithm)对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的（来自[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)）

