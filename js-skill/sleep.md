## 如何实现sleep的效果（es5或者es6）

用 `Promise`

1. ```js
   function sleep (ms) {
     return new Promise((resolve) => {
       window.setTimeout(resolve, ms)
     })
   }
   
   sleep(1000).then(()=>{
     console.log('已经 sleep 1000ms')
   })
   ```

2. ```js
   function sleep (ms) {
     return new Promise((resolve) => {
       window.setTimeout(resolve, ms)
     })
   }
   
   // 使用async/await调用
   async function test () {
     var example = await sleep(1000)
     console.log('已经 sleep 1000ms')
   }
   ```

3. ```js
   // 使用 generator 定义 sleep 函数
   function *sleep (ms) {
     yield new Promise((resolve) => {
       window.setTimeout(resolve, ms)
     })
   }
   sleep(1000).next().value.then(()=>{
     console.log('已经 sleep 1000ms')
   })
   ```

   