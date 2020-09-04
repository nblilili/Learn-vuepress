---
title: 07_原型(prototype)
---
### 查找逻辑

1. 当我们访问对象的属性时，它会现在对象自身中寻找，如果有则直接使用，如果没有则去原型中找。
2. 如果没有则去原型的原型中找，直到找到 Object 的原型
3. Object 对象的原型 没有原型，如果 Object 中依然没有找到则返回 undefined

```js
function MyClass(){

}
// 向 MyClass 的原型中添加属性 a
MyClass.prototype.a = 123;
// 向 MyClass 的原型中添加方法
MyClass.prototype.sayHello = function(){
  alert("Hello");
}
```

以后创建构造函数时，可以将这些对象共有的属性和方法，统一添加到构造函数的原型对象汇总，这样不用分别为每一个对象添加，也不会影响到全局作用域。

## toString 方法

- 当我们直接在页面中打印一个对象时，实际上是输出了对象的 toString()函数的返回值

- 如果我们希望在输出对象时不输出[Object, Object],可以为对象添加一个 toString()方法

- 我们可以通过修改对象原型中的 toString() 函数，这样子所有的类对象的方法都修改了

  ```
  Person.prototype.toString = function(){
   return "Person[name =" + this.name + "]";
  }
  ```
