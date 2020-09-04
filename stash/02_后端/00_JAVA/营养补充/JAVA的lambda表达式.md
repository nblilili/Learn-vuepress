---
title: JAVA的lambda表达式
---
# 简介

箭头函数（arrow function），就是C#中的lambda表达式，据说Java8也把它加入了。但不管怎样，JS正在从其它语言吸纳优秀的特性（比如yield, class, 默认参数等等），且不论这些特性好坏，这件事本身就是极好的（至少我们正在使用的是一个充满活力的工具）

只是Java用`->`箭头，C#用的箭头与JS一样：`=>`，这个箭头叫“lambda运算符”，行话读作”goes to”

lambda表达式（箭头函数）据说是定义函数最简洁的方法，语法上几乎没有冗余成分了。因为JS弱类型的特点，JS中的lambda表达式要比C#和Java中的更简洁（少了参数类型声明）

**一句话，箭头函数就是lambda表达式，提供了更简洁的function定义方式**

# lambda语法

## 什么是lambda表达式

### **将匿名函数复制给变量的简写方式的函数称为 lambda 表达式**

 1、java的场景中：把“一块代码”赋给一个Java变量

![img](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LOiP84hTfF6CS2a2KdA%2F-LP4C6J1xoT38RhCASTy%2F-LP4DPS2t_HNiKqJuSJg%2Fimage.png?alt=media&token=d5eb8318-e459-49ab-88e0-96c351807da3)

 这个是简化过程：

![img](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LOiP84hTfF6CS2a2KdA%2F-LP4C6J1xoT38RhCASTy%2F-LP4DXQOoKhblN6U0_tY%2Fimage.png?alt=media&token=42cf521b-0786-42e5-9ba2-d8885cc1e557)

## **Java的lambda表达式**

Lambda 表达式的作用其实就是匿名方法，而 Java 中并没有匿名方法这一语法。

不过 Java 中有匿名对象，当你直接 new 一个接口并实现接口方法的时候，Java 编译器实际是产生了一个类（匿名类）来实现这个接口，然后再返回这个类的一个实例，也就是匿名对象

**Lambda表达式本身就是一个接口的实现**。

![img](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LOiP84hTfF6CS2a2KdA%2F-LP4C6J1xoT38RhCASTy%2F-LP4DmTmoLzp0tV1itlb%2Fimage.png?alt=media&token=972a1ca2-879a-46a7-8098-a3c42bd7526c)

这种只有一个接口函数需要被实现的接口类型，我们叫它”函数式接口“。

为了避免后来的人在这个接口中增加接口函数导致其有多个接口函数需要被实现，变成"非函数接口”，我们可以在这个上面加上一个声明

![img](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LOiP84hTfF6CS2a2KdA%2F-LP4C6J1xoT38RhCASTy%2F-LP4DvYKflkttkjerkkm%2Fimage.png?alt=media&token=804b7f26-8a69-465b-8d61-bc5042f98e0f)

 下面是一个完整的案例：

```
@FunctionalInterface
public interface WorkerInterface {
    public void doSomeWork();
}

public class WorkerInterfaceTest {

    public static void execute(WorkerInterface worker) {
        worker.doSomeWork();
    }

    public static void main(String [] args) {

        //invoke doSomeWork using Annonymous class
        execute(new WorkerInterface() {
            @Override
            public void doSomeWork() {
                System.out.println("Worker invoked using Anonymous class");
            }
        });

        //invoke doSomeWork using Lambda expression
        execute( () -> System.out.println("Worker invoked using Lambda expression") );
    }

}
```

## lambda的常见使用场景

上面通过两个简单的案例演示了lambda，现在总结一下在Java和JavaScript常见的用法和使用常见。

### **java中常见的使用场景**

**1. 何时用？**

JAVA8中就提供了这种“函数式编程”的方法 —— lambda表达式，供我们来更加简明扼要的实现内部匿名类的功能。

函数式接口：Functional Interface. 定义的一个接口，接口里面必须 有且只有一个抽象方法 ，这样的接口就成为函数式接口。 在可以使用lambda表达式的地方，方法声明时必须包含一个函数式的接口。

**简单的说，凡是（java8以上）函数式接口都可以尽量使用lambda表达式**

注意：如果我们提供的这个接口包含一个以上的Abstract Method，那么使用lambda表达式则会报错。建议定义的接口加上`@FunctionalInterface`注解。
