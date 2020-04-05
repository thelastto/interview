# 数据类型

<!-- toc -->

## 基本数据类型

Undefined、Null、Boolean、Number 、String、Symbol

### symbol

- 语法：

  ```javascript
  // 不能用 new
  let s = Symbol()
  
  // 可以接受一个字符串作为参数，表示对 Symbol 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。
  let s1 = Symbol('foo');
  let s2 = Symbol('bar');
  
  s1 // Symbol(foo)
  s2 // Symbol(bar)
  
  s1.toString() // "Symbol(foo)"
  s2.toString() // "Symbol(bar)"
  ```

- 作用：定义一个独一无二的值

  - 用作对象的属性名

    - 不会出现在`for...in`、`for...of`循环中，也不会被`Object.keys()`、`Object.getOwnPropertyNames()`、`JSON.stringify()`返回。
    - `Object.getOwnPropertySymbols()`方法，可以获取指定对象的所有 Symbol 属性名。该方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。
    - `Reflect.ownKeys()`方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。

  - 用于定义一组常量

    ```javascript
    log.levels = {
      DEBUG: Symbol('debug'),
      INFO: Symbol('info'),
      WARN: Symbol('warn')
    };
    ```

- 类型转换：

  - 转成字符串

    ```javascript
    String(sym) // 'Symbol(My symbol)'
    sym.toString() // 'Symbol(My symbol)'
    ```

  - 转成布尔值

    ```javascript
    Boolean(sym)
    !sym
    ```

  - 不能转成数字

  - 不能与其他类型的值进行运算

    ```javascript
    let sym = Symbol('My symbol');
    
    "your symbol is " + sym
    // TypeError: can't convert symbol to string
    `your symbol is ${sym}`
    // TypeError: can't convert symbol to string
    ```

- 属性：Symbol.prototype.description
- Symbol.for()，Symbol.keyFor()
  
  - 在全局环境中登记 Symbol 值。之后不会再重复生成

## 如何判断类型

typeof()，instanceof，Object.prototype.toString.call()

- `typeof `操作符

  - "undefined"——如果这个值未定义; 
  - "boolean"——如果这个值是布尔值; 
  - "string"——如果这个值是字符串;
  - "number"——如果这个值是数值;
  - "object"——如果这个值是对象或 null; 
  - "function"——如果这个值是函数。
  - "symbol"——es6新增的symbol类型

- `instanceof`：用来判断对象是不是某个构造函数的实例。会沿着原型链找的

- `Object.prototype.toString.call()`

  ```js
  var toString = Object.prototype.toString;
  
  toString.call(new Date); // [object Date]
  toString.call(new String); // [object String]
  toString.call(Math); // [object Math]
  toString.call([]); // [Object Array]
  toString.call(new Number) // [object Number]
  toString.call(true) // [object Boolean]
  toString.call(function(){}) // [object Function]
  toString.call({}) // [object Object]
  toString.call(new Promise(() => {})) // [object Promise]
  
  toString.call(new Map) // [object Map]
  toString.call(new RegExp) // [object RegExp]
  toString.call(Symbol()) // [object Symbol]
  toString.call(function *a(){}) // [object GeneratorFunction]
  toString.call(new DOMException()) // [object DOMException]
  toString.call(new Error) // [object Error]
  
  toString.call(undefined); // [object Undefined]
  toString.call(null); // [object Null]
  
  // 还有 WeakMap、 WeakSet、Proxy 等
  ```

## 判断是否是数组

1. `Array.isArray(arr)`
2. `Object.prototype.toString.call(arr) === '[Object Array]' `
3. `arr instanceof Array`



## 字符串转数字

`parseInt(string, radix)`