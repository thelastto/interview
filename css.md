# CSS

<!-- toc -->

## 两列等高布局

1. padding 补偿，实现“看上去”相等

   ```css
   .parent {
     overflow: hidden;
   }
   // 预先给子元素设置一个很大的 padding
   // 这样其中某个元素的高度增大后，会撑起 parent，而另一个元素的 padding 就会补上这一块高度
   .left, .right {
     padding: 9999px;
     margin: -9999px;
   }
   ```

2. flex

   把 parent 设置成 flex 布局就ok

   