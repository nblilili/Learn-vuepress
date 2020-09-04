---
title: [JAVA]对象的共享
---
### 简介

> 同步还有一个重要的方面:内存可见性
>
> 不仅希望防止某个线程正在使用对象状态而另一个线程在同时修改该状态
>
> 而且希望确保当一个线程修改了对象状态后,其他线程能够看到发生的状态变化

## 可见性

为了确保多个线程之间对内存写入操作的可见性,必须使用同步机制

```java
public class NoVisibility {
    private static boolean ready;
    private static int number;

    private static class ReaderThread extends Thread{
        @Override
        public void run(){
            while (!ready) {
                Thread.yield();
            }
            System.out.println(number);
        }
    }

    public static void main(String[] args) {
        new ReaderThread().start();
        number =42;
        ready =true;
    }
}
```

这里理论上有三种可能:

 1. 正常

 2. NoVisibility可能会持续循环

    因为读线程可能永远看不到`ready`的值

 3. NoVisibility可能会输出0,因为线程可能看到了写入`ready`的值,但却没有看到写入`number`的值,

    这种现象被称为"重排序(Reordering)"

ps:虽然在实验过程中我并没有发生第二和第三种情况

## 1. 失效数据

当读线程查看ready变量时,可能会得到一个已经失效的值

失效值会导致一些严重的安全问题或者活跃性问题

## 2. 非原子的64位操作

当线程没有同步的情况下可能会读取到失效值,但是至少这个值是由之前某个线程设置的

这种安全性保证被称为**最低安全性**

但是对于非volatile类型的long和double变量,JVM允许将其分解成两个32位的操作,那么很可能会读取到某个值的高32位和另一个值的低32位

因此即使不考虑失效数据的问题,仍应用关键字volatile来声明他们,或者用锁保护起来

## 3.加锁与可见性

内置锁可以用来确保某个线程以一种可预测的方式来查看另一个线程的执行结果

加锁的含义不仅仅局限于互斥行为,还包括内存可见性

## 4. Volatile变量

> 这是java语言提供的一种稍弱的同步机制,
>
> 由于不会执行加锁操作,就不会使执行线程阻塞,比sychronized更轻量级

当被声明位volatile类型,编译器与运行时都会注意到这个变量是共享的

因此不会将该变量上的操作与其他内存操作一起**重排序**

volatile的正确使用方式包括:

1. 确保他们自身状态的可见性
2. 确保他们所引用对象的状态的可见性
3. 标识一些重要的程序声明周期事件的发生

**但是volatile不足以保证操作的原子性**

> 加锁机制可以确保可见性和原子性
>
> volatile只能确保可见性

当且仅当:

1. 对变量的写入操作不依赖变量的当前值,或者可以确保只有单个线程更新变量
2. 该变量不会与其他状态变量一起纳入不变性条件中
3. 在访问变量时不需要加锁
