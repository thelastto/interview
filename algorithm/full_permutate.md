# 全排列

```js
function permutate(str) {
    var array = str.split('');
    function loop(array, pre = []) {
        if (array.length == 1) {
            return [pre.concat(array).join('')];
        }
        let res = [];
        for (let index = 0; index < array.length; index++) {
            var first = array.pop();
            res = res.concat(loop(array, [...pre, first]));
            array.unshift(first);
        }
        return res;
    }
    return Array.from(new Set(loop(array)))
}

```

