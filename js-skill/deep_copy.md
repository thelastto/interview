# 深拷贝

需要特殊判断的类型：对象、数组、Symbol、function

- 基本类型：不需要拷贝，直接返回

- 数组或对象

  ```js
  JSON.parse(JSON.stringify(arr) )
  ```

- 