# BOM

## js 的各种位置，比如 clientHeight, scrollHeight, offsetHeight, 以及 scrollTop, offsetTop, clientTop 的区别？

- `clientHeight`：表示的是可视区域的高度，不包含`border`和滚动条

- `offsetHeight`：表示可视区域的高度，包含了`border`和滚动条

- `scrollHeight`：表示了所有区域的高度，包含了因为滚动被隐藏的部分。

- `clientTop`：表示边框`border`的厚度，在未指定的情况下一般为 0

- `scrollTop`：滚动后被隐藏的高度，获取对象相对于由`offsetParent`属性指定的父坐标(css定位的元素或body元素)距离顶端的高度。

