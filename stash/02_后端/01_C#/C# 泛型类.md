# C#中的泛型

泛型最常见的用途是泛型集合，命名空间System.Collections.Generic 中包含了一些基于泛型的集合类，使用泛型集合类可以提供更高的类型安全性，还有更高的性能，避免了非泛型集合的重复的装箱和拆箱。 
很多非泛型集合类都有对应的泛型集合类，下面是常用的非泛型集合类以及对应的泛型集合类：

| 非泛型集合类 | 泛型集合类 |
| ------------ | ---------- |
| ArrayList    | List       |
| HashTable    | DIctionary |
| Queue        | Queue      |
| Stack        | Stack      |
| SortedList   | SortedList |

## Dictionary的语法

1. 添加元素

   Dictionary[key] = value;

   相当于

   HashMap.put(key,  value)

2. 获取元素

   String value = Dictionary[key]

   (value的类型是泛型的类型)

3. 删除元素

   删除单个元素

   dic.Remove(key);

   删除所有元素

   dic.Clear();      

## 注意点

1. 与Java不同的是,在使用Dictionary的时候,若想使用List作为对象,必须使用泛型类List<Object>,而不能使用ArrayList