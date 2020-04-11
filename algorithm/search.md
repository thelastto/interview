# 搜索

## 二分搜索

```js
function BinarySearch1 (arr, target) {
    return search(arr, target, 0, arr.length - 1)
    function search (arr, target, from, to) {
        if (from > to) {
            return -1
        }
        const mid = Math.floor((from + to)/2)
        if (arr[mid] > target) {
            return search(arr, target, from, mid - 1)
        } else if (arr[mid] < target) {
            return search(arr, target, mid + 1, to)
        } else {
            return mid
        }
    }
}

function BinarySearch2 (arr, target) {
    let from = 0
    let to = arr.length - 1
    let mid = Math.floor((from + to)/2)
    while (from <= to) {
        mid = Math.floor((from + to)/2)
        if (arr[mid] > target) {
            to = mid - 1
        } else if (arr[mid] < target) {
            from = mid + 1
        } else {
            return mid
        }
    }

    return -1
}
```

