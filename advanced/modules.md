# 模块化

## 如何理解前端模块化

前端模块化就是复杂的文件编程一个一个独立的模块，比如js文件等等，分成独立的模块有利于重用（复用性）和维护（版本迭代），这样会引来模块之间相互依赖的问题，所以有了commonJS 规范，AMD，CMD规范等等，以及用于js打包（编译等处理）的工具 webpack



## 说一下 Commonjs、AMD 和 CMD

一个模块是能实现特定功能的文件，有了模块就可以方便的使用别人的代码，想要什么功能就能加载什么模块。

- Commonjs：开始于服务器端的模块化，同步定义的模块化，每个模块都是一个单独的作用域，模块输出，modules.exports，模块加载require()引入模块。

- AMD：中文名异步模块定义的意思。

  - require JS 实现了 AMD 规范

    - 主要用于解决下述两个问题。
      1. 多个文件有依赖关系，被依赖的文件需要早于依赖它的文件加载到浏览器
      2. 加载的时候浏览器会停止页面渲染，加载文件越多，页面失去响应的时间越长。

    - 语法：requireJS 定义了一个函数 define，它是全局变量，用来定义模块。
    
    
    ```js
    //定义模块
    define(['dependency'], function(){
      var name = 'Byron';
      function printName(){
        console.log(name);
      }
      return {
        printName: printName
      };
    });

  	```
  	
  	```js
  	//加载模块
  	require(['myModule'], function (my){
  	  my.printName();
  	}
  	```

  

  - 总结 AMD 规范：require()函数在加载依赖函数的时候是异步加载的，这样浏览器不会失去响应，它指定的回调函数，只有前面的模块加载成功，才会去执行。
    因为网页在加载js的时候会停止渲染，因此我们可以通过异步的方式去加载js,而如果需要依赖某些，也是异步去依赖，依赖后再执行某些方法。

  