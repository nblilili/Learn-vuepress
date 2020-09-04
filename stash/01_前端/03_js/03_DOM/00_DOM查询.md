---
title: 00_DOM查询
---
## 属性方法

> 以下方法主要是查询方法

### innerHTML

- element.innerHTML 能看到里面的元素内容

### innerText

- 相比 `innerHTML` 只有内容没有标签

### nodeValue

- 通过获取节点的值

- ```js
  bj.firsChild.nodeValue
  ```

### 读取元素节点属性

- 语法：元素.属性名
- 例子：元素.id 元素.name 元素.value
- 注意：class 属性不能采用这种方式
  - 读取 class 属性时需要使用元素.className

### 获取子节点(childNodes)

- childNodes会获取包括文本节点在的所有节点
- 它会获取空白,(会使数量变多所以一般不用)

```js
ele.ChildNodes
```

### 获取子节点children(children)

- children只返回元素

### 获取父节点和兄弟节点

- parentNode 父元素
- previousSibling 上一个兄弟元素
- nextSibling 下一个兄弟元素

### 获取 body(body)

- 不需要通过 tagName

```js
document.body
```

### 获取所有元素(all)

```js
document.all
```

### 根据 class 属性查询节点(getElementByClassName)

- IE9 以上的浏览器才支持

```js
document.getElementByClassName("calssName");
```

### querySelector()

- 用选择器的字符串作为参数.即:可以根据一个 css 选择器来查询元素节点对象
- 兼容性好

```js
document.querySelector()
```

### querySelectorAll()

- 与`querySelector`用法类似,但是会返回数组.即使只有一个结果也会返回数组
