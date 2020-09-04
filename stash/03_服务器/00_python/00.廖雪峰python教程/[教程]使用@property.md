---
title: [教程]使用@property
---
# 多重继承

Minln在设计类的继承关系时，通常，主线都是单一继承下来的，例如，Ostich继承自Bird

# 定制类

list的切片方法，

对于FIb确报错， 原因是__getitem__()传入的参数可能是一个int,也可能是一个切片对象slice,所以要做判断:

``` python
class Fib(object):
    def __getitem__(self, n):
        # 如果传入的是数字则返回数字
        if isinstance(n, int):
            a, b = 1, 1
            for x in range(n):
                a, b = b, a + b
            return a
        # 如果传入的是切片对象slice
        if isinstance(n, slice):
            start = n.start
            stop = n.stop
            if start is None:
                start = 0
            a, b = 1, 1
            L = []
            for x in range(stop):
                if x >= start:
                    L.append(a)
                a, b = b, a + b
            return L
```

``` python
class Student(object):
    def __init__(self):
        self.name = 'Micharl'
    def __getattr__(self, attr):
        if attr == 'score':
            return 99
```

​ 

# 使用元类

## type（）

动态语言和静态语言最大的不同，就是函数和类的定义，不是编译时定义的，而是运动时动态创建的。

比方说我们要定义一个Hello的class，就写一个hello.py模块。

当Python解释器载入hello模块时，就会依次执行该模块的所有语句，执行结果就是动态创建出一个Hello的class对象，测试如下：

type（）函数可以查看一个类型或变量的类型，Hello是一个class，它的类型就是type，而h是一个实例，它的类型就是class Hello

我们说class的定义是运行时动态创建的，而创建class的方法就是使用type（）函数

type（）函数既可以返回一个对象的类型，又可以创建出新的类型，比如，我们可以通过type（）函数创建出Hello类，而无需通过class Hello（object）。。。的定义

要创建一个class对象，type（）函数依次传入3个参数:

1. class的名称；
2. 继承的父类集合，注意python支持多重继承，如果只有一个父类，别忘了tuple的单元素写法
3. class的方法名称与函数绑定，这里我们把函数fn绑定到方法名hello上。

通过type（）函数创建的类和直接写class是完全一样的，因为Python解释器遇到class定义时，仅仅是扫描一下class定义的语法，然后调用type（）函数创建出class。

正常情况下，我们都用class Xxx。。。来定义类，但是,type()函数也允许我们动态创建出类来,这和静态语言有非常大的不同,要在静态语言运行期创建类,必须构造源代码字符串再调用编译器,或者借助一些工具生成字节码实现,本质上都是动态编译, 会非常复杂.

metaclass

除了使用type()动态创建类以外,要控制类的创建行为,还可以使用metaclass.

metaclass,直译为元类,简单的解释就是:

当我们定义了类以后,就可以根据这个类创建出实例,所以:先定义类,然后创建实例

当时如果我们想创建出类呢?

那就必须根据mataclass创建出类,所以:先定义metaclass,然后创建类.

连接起来就是:先定义metaclass,就可以创建类,最后创建实例

所以,metaclass允许你创建类或者修改类.换句话说,你可以把类看成是metaclass创建出来的实例

metaclass是python面向对象里最难理解,也是最难使用的魔术代码,正常情况下,你不会碰到需要使用metaclass的情况,所以,一下内容看不懂也没关系,因为基本上你不会用到.

我们先看一个简单的例子,这个metaclass可以给我们自定义的metaclass结尾,以便清楚地表示这是一个metaclass

在ModelMetaclass中，一共做了几件事情：

1. 排除掉对Model类的修改
2. 在当前类（比如User）中查找定义的类的所有属性，如果找到一个Field属性，就把它保存到一个__mappings__的dict中, 同时从类属性中删除该Field属性,否则,容易造成运行时错误(实例的属性会遮盖类的同名属性);
3. 把表名保存到__table__中,这里简化为表名默认为类名
