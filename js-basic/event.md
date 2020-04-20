# 事件



## 事件流

HTML中与javascript交互是通过事件驱动来实现的，例如鼠标点击事件onclick、页面的滚动事件onscroll等等，可以向文档或者文档中的元素添加事件侦听器来预订事件。想要知道这些事件是在什么时候进行调用的，就需要了解一下“事件流”的概念。

什么是事件流：事件流描述的是从页面中接收事件的顺序,DOM2级事件流包括下面几个阶段。

- 事件捕获阶段
- 处于目标阶段
- 事件冒泡阶段

IE只支持事件冒泡。

## 什么是事件监听

`addEventListener()`方法，用于向指定元素添加事件句柄，它可以更简单的控制事件，语法为

`element.addEventListener(event, function, useCapture)`;

- 第一个参数是事件的类型(如 "click" 或 "mousedown").

- 第二个参数是事件触发后调用的函数。

- 第三个参数是个布尔值用于描述事件是冒泡还是捕获。该参数是可选的。

```tsx
target.addEventListener(type, listener, options: EventListenerOptions);
target.addEventListener(type, listener, useCapture: boolean);
target.addEventListener(type, listener, useCapture: boolean, wantsUntrusted: boolean  );  // Gecko/Mozilla only
```

```typescript
interface EventListenerOptions {
  capture?: boolean // 表示 listener 会在该类型的事件捕获阶段传播到该 EventTarget 时触发
  once?: boolean // 表示 listener 在添加之后最多只调用一次。如果是 true， listener 会在其被调用之后自动移除
  passive?: boolean // 设置为true时，表示 listener 永远不会调用 preventDefault()。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告
}
```



## mouseover 和 mouseenter 的区别  

- mouseover：当鼠标移入元素或其子元素都会触发事件，所以有一个重复触发，冒泡的过程。对应的移除事件是mouseout
- mouseenter：当鼠标移除元素本身（不包含元素的子元素）会触发事件，也就是不会冒泡，对应的移除事件是mouseleave



## 事件委托以及冒泡原理

简介：事件委托指的是，不在事件的发生地（直接dom）上设置监听函数，而是在其父元素上设置监听函数，通过事件冒泡，父元素可以监听到子元素上事件的触发，通过判断事件发生元素DOM的类型，来做出不同的响应。

举例：最经典的就是ul和li标签的事件监听，比如我们在添加事件时候，采用事件委托机制，不会在li标签上直接添加，而是在ul父元素上添加。

好处：比较合适动态元素的绑定，新添加的子元素也会有监听函数，也可以有事件触发机制。



## 事件代理在捕获阶段的实际应用

可以在父元素层面阻止事件向子元素传播，也可代替子元素执行某些操作。