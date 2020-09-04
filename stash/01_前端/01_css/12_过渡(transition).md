---
title: 12_过渡(transition)
---
## transition-property

- 要执行过渡的属性

- 多个属性间用逗号隔开

- 大部分属性都支持过渡效果，要从有效属性向另一个有效数值进过渡

## transition-duration

- 指定过渡的持续时间
- 时间单位：s，ms

## transition-timing-function

- 过渡的时序函数
- 指定过渡的执行方式

### ease

- 默认值，慢速开始，先加速，在减速

### linear

- 匀速运动

### ease-in

- 加速运动

### ease-out

- 减速运动

### ease-in-out

- 先加速，后减速

### cubic-bazier() 来指定时序函数

- <http://cubic-bzaier.com>

### steps

- 分步执行过渡效果

  ```
  step(2)
  ```

  表示分为两步

- 可以设置第二个值

  - end，在时间结束时执行过渡
  - start，在时间开始时执行过渡

## transition-delay

- 过渡效果的延迟，等待一段时间后再执行过渡

### transition

- 可以同时设置过渡相关的所有属性，除了时间，其余属性不分先后

- 如果要写延迟，则两个时间中第一个是持续时间，第二个是延迟时间
