---
title: 09_执行函数(callapply)
---
---
title: 09_执行函数(callapply)
---

- 都是函数对象的方法

- 调用后都会执行函数

- 在调用call()和apply()时，可以将一个对象指定为第一个参数

  - 此时这个对象会成为函数执行的 this

  ```
  function fun(a,b){
   console.log(this.name)
  }
  fun.call(obj2)
  ```

- call()方法可以将实参在对象之后依次传递

  ```
  fun.call(obj, 2, 3)
  ```

- apply()方法需要将实参封装到一个数组中统一传递

- this的情况：

  - 以函数形式调用时，this永远都是window
  - 以方法的形式调用时，this是调用方法的对象
  - 以构造函数的形式调用时，this是新创建的那个对象
  - 使用call和apply调用时，this是指定的那个对象
