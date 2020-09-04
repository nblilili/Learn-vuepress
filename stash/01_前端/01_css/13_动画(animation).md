---
title: 13_动画(animation)
---
## 动画

- 动画与过渡类似，都是可以实现一些动态的效果
- 不同的是过渡需要时机触发，但是动画不需要
- 设置动画效果，必须设置一个关键帧，关键帧设置了动画的每一个步骤

```
@keyframes test {
 from{
  margin-left: 0;
 }
 
 to{
  margin-left 700px;
 }
}
```

### animation-name

- 要对当前元素生效的关键帧的名字

### animation-duration

- 动画的执行时间

### animation-delay

- 动画的演示

### animation-timing-function

- 动画的函数

### animation-iteration-count

- 动画执行的次数
- 可选值
  - 次数
  - infinite 无限执行

### animation-direction

- 指定动画运行的方向
  - normal 从 from 向 to 运行（默认值）
  - reverse 表示从 to 向 from 运行
  - alternate 从 from 向 to 运行，重复执行动画时反向执行
  - alternate-reverse 从 to 向 from 运行，重复执行动画时反向执行

### animation-play-state

- 设置动画执行的状态
  - running 动画执行（默认值）
  - paused 动画暂停

### animation-fill-mode

- 动画的填充模式

  - none 动画执行完毕回到原来的位置（默认值）

  - forwards 动画执行完毕元素会停止在动画结束的位置

  - backwards 动画延时等待时，元素就会处于开始位置

  - both 结合了两者
