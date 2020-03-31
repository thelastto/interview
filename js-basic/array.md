# 数组

<!-- toc -->

## 数组常用方法

push()，pop()，shift()，unshift()，splice()，sort()，reverse()，map()等

## 数组去重

要注意的是对象咋去重

1. 双重循环

   每次插入一个元素的时候都和前面的每个元素比较一下

   ```js
   var array = [1, 1, '1', '1'];
   
   function unique(array) {
       // res用来存储结果
       var res = [];
       for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
           for (var j = 0, resLen = res.length; j < resLen; j++ ) {
               if (array[i] === res[j]) {
                   break;
               }
           }
           // 如果array[i]是唯一的，那么执行完循环，j等于resLen
           if (j === resLen) {
               res.push(array[i])
           }
       }
       return res;
   }
   
   console.log(unique(array)); // [1, "1"]
   ```

2. `indexOf`

   原理和双重循环是一样的

   ```js
   var array = [1, 1, '1'];
   
   function unique(array) {
       var res = [];
       for (var i = 0, len = array.length; i < len; i++) {
           var current = array[i];
           if (res.indexOf(current) === -1) {
               res.push(current)
           }
       }
       return res;
   }
   
   console.log(unique(array));
   ```

3. 排序后去重

   对于排好序的数组，可以将每个元素与前一个比较

   ```js
   var array = [1, 1, '1'];
   
   function unique(array) {
       var res = [];
       var sortedArray = array.concat().sort();
       var seen;
       for (var i = 0, len = sortedArray.length; i < len; i++) {
           // 如果是第一个元素或者相邻的元素不相同
           if (!i || seen !== sortedArray[i]) {
               res.push(sortedArray[i])
           }
           seen = sortedArray[i];
       }
       return res;
   }
   
   console.log(unique(array));
   ```

4. Object 键值对

   把每一个元素存成 object 的 key。例如 `['a']`，存成`{'a': true}`

   ```js
   var array = [1, 2, 1, 1, '1'];
   
   function unique(array) {
       var obj = {};
       return array.filter(function(item, index, array){
           return obj.hasOwnProperty(item) ? false : (obj[item] = true)
       })
   }
   
   console.log(unique(array)); // [1, 2]
   ```

   我们可以发现，是有问题的，因为 1 和 '1' 是不同的，但是这种方法会判断为同一个值，这是因为对象的键值只能是字符串，所以我们可以使用 `typeof item + item` 拼成字符串作为 key 值来避免这个问题：

   ```js
   var array = [1, 2, 1, 1, '1'];
   
   function unique(array) {
       var obj = {};
       return array.filter(function(item, index, array){
           return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
       })
   }
   
   console.log(unique(array)); // [1, 2, "1"]
   ```

   然而，即便如此，我们依然无法正确区分出两个对象，比如 {value: 1} 和 {value: 2}，因为 `typeof item + item` 的结果都会是 `object[object Object]`，不过我们可以使用 JSON.stringify 将对象序列化：

   ```js
   var array = [{value: 1}, {value: 1}, {value: 2}];
   
   function unique(array) {
       var obj = {};
       return array.filter(function(item, index, array){
           console.log(typeof item + JSON.stringify(item))
           return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : (obj[typeof item + JSON.stringify(item)] = true)
       })
   }
   
   console.log(unique(array)); // [{value: 1}, {value: 2}]
   ```

5. ES6 Set去重

   ```js
   function unique(array) {
      return Array.from(new Set(array));
   }
   ```

   ```js
   function unique(array) {
       return [...new Set(array)];
   }
   ```

6. ES6 Map

   ```js
   function unique (arr) {
       const seen = new Map()
       return arr.filter((a) => !seen.has(a) && seen.set(a, 1))
   }
   ```

   