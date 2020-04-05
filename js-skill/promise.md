# promise

`Promise` 是一个对象，保存着未来将要结束的事件，她有两个特征:

1、对象的状态不受外部影响，`Promise` 对象代表一个异步操作，有三种状态，pending进行中，fulfilled已成功，rejected已失败，只有异步操作的结果，才可以决定当前是哪一种状态，任何其他操作都无法改变这个状态，这也就是promise名字的由来

2、一旦状态改变，就不会再变，`Promise`对象状态改变只有两种可能，从pending改到fulfilled或者从pending改到rejected，只要这两种情况发生，状态就凝固了，不会再改变，这个时候就称为定型resolved

