---
title: [教程]使用__slote__
---
---
title: [教程]使用__slote__
---

正常情况下,当我们定义了一个class,创建了一个class的实例后,我们可以给实例绑定任何属性和方法,这就是动态语言的灵活性.

先定义class

``` python
class Student(Object):
 pass
```

然后，尝试给实例绑定一个属性：

但是给一个实例绑定的方法，对另一个实例是不起作用的

为了个所有实例都绑定方法，可以给class绑定方法

给class绑定方法后，所有实例均可调用

通常情况下，如果我们想要限制实例的属性怎么办？

比如，只允许对Student实例添加name和age属性

为了达到限制的目的，python允许在定义class的时候，定义一个特殊的`__slots__`变量，
来限制该class实例能添加的属性：

```
class Student(object):
 __slots__ = ('name', 'age')
```

除非在子类中也定义`__slots__`,这样，子类实例允许定义的属性就是自身的`__slots__`加上父类的
