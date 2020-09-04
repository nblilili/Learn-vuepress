## 添加 DOM 节点

1. 创建一个节点(createElement)

   需要一个标签名作为参数,返回创建好的对象

   ```js
   // 创建元素节点
   var li = document.createElement("li");
   
   // 创建文本节点
   var text = document.createTextNode("广州");
   
   // 添加两者的关系
   li.appendChild(text);
   ```

2. 添加节点

   ```js
   // 获取 html 中已经有的节点
   var city = document.getElementById("city")
   
   // 添加两者的关系
   city.appendChild(li);
   ```

## 其他方法

> 父类节点引出的方法

### insertBefore()

- 在指定的子节点前添加一个新的子节点
- 这个方法是父节点调用

```js
父节点.insertBefore(新节点, 旧节点);
```

### replaceChild()

- 使用指定的子节点替换已有的子节点
- 父节点调用

```js
父节点.replaceChild(新节点, 旧节点);
```

### removeChild()

- 删除子节点

```js
父节点.removeChild(子节点);
```

需要注意的是, 在调用的时候我们可能不知道子节点的父节点是什么,所以常用的方法是:

```js
子节点.parentNode.removeChild(子节点);
```

### innerHTML

- 使用 innerHTML 也可以实现添加节点的功能

```js
父节点.innerHTMl += "<li>广州</li>"
```

但是这个方式会删除所有的子节点然后重新添加所有节点,性能比较差,故一般使用上述方式:

```js
// 创建元素节点
var li = document.createElement("li");

// 添加文本
li.innerHTML = "广州";

// 添加到父节点
city.appendChild(li);
```



