# Function.\_\_proto\_\_ === ?

记住两点：

- 函数有`prototype`属性；

- 对象有`__proto__`属性。

因此：

- 对于对象来说，只需要考虑该对象是哪个函数的实例。`__proto__`属性就指向那个函数的原型。

- 对于函数
  - 当作对象看的话，函数本身是 Function 的实例，是通过`new Function`来的。 
  	- `任意函数.__proto__ === Function.prototype`，包括 `Object`、`Array` 等函数，甚至包括 `Function` 本身。
  - 从函数本身考虑，声明完之后就会有一个 `prototype` 指向原型了
    - 所有的原型都是一个对象

![Function.__proto__](../images/Function.__proto__.png)

