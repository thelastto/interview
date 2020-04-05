function flat1(arr) {
    var result = [];
    arr.forEach(function (element) {
        if (Array.isArray(element)) {
            result = result.concat(flat1(element));
        }
        else {
            result.push(element);
        }
    });
    return result;
}
function flat2(arr) {
    // 有缺陷，toString 后无法保持之前的类型
    return arr.toString().split(',');
}
function flat3(arr) {
    // 本质和 flat1 一样的，都是递归
    return arr.reduce(function (pre, next) {
        return pre.concat(Array.isArray(next) ? flat3(next) : next);
    }, []);
}
function flat4(arr) {
    while (arr.some(function (item) { return Array.isArray(item); })) {
        // 相当于 [].concat('1', 2, [3, 4])
        // concat 方法本身就会把参数中的数组展开
        arr = [].concat.apply([], arr);
    }
    return arr;
}
function flat5(arr) {
    // flat() 方法会移除数组中的空项
    return arr.flat(Infinity);
}
var test = ['1', 2, [3, 4], [[[5, 6], [7, [8, [9]]], [10]], function () { }]];
console.log(flat1(test));
console.log(flat2(test));
console.log(flat3(test));
console.log(flat4(test));
console.log(flat5(test));
//# sourceMappingURL=flat.js.map