## 如何实现一个私有变量，用getName方法可以访问，不能直接访问

1. 配置属性

   ```js
   obj={
     name: 'xujiahui',
     getName:function(){
       return this.name
     }
   }
   object.defineProperty(obj,"name",{
   //不可枚举不可配置
   
   });
   ```

   

2. ```js
   function product(){
     var name='xujiahui';
     this.getName=function(){
       return name;
     }
   }
   var obj=new product();
   ```