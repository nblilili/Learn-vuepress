---
title: 15_弹性盒(flex)
---
## 弹性容器（弹性盒）

- 要使用弹性盒，必须先将一个元素设置为弹性容器
- 我们通过 display 来设置弹性容器
  - display:flex 设置块级弹性容器
  - display:inline-flex 设置为行内的弹性容器

    ```css
    display: flex
    ```

### flex-direction

- 指定容器中弹性元素的排列方式
- row 默认值 弹性元素在容器中水平排列（左向右）
  - row-reverse 弹性元素在容器中反向水平排列（右向左）
- column 弹性元素纵向排列（自上向下）
  - column-reverse 弹性元素纵向排列（自下向上）

- 主轴
  - 弹性元素的排列方向称为主轴
- 侧轴
  - 与主轴垂直方向的称为侧轴

### flex-wrap

- 设置弹性元素是否在弹性容器中自动换行（换行都是对辅轴来说的）
- 可选值
  - nowrap 默认值，元素不会自动换行
  - wrap 元素沿着辅轴方向换行
  - wrap-reverse 元素沿着辅轴反方向换行

### flex-flow

这是 wrap 和 direction 的简写属性

```css
flex-flow: row nowrap
```

### justify-content

如何分配主轴上的空白空间（主轴上的元素如何排列）

- 可选值
  - flex-start 沿着主轴正向排列
  - flex-end 沿着主轴反向排列
  - center 元素居中排列
  - space-around 空白分布到元素两侧
  - space-between 空白均匀分布到元素间
  - space-evenly 空白分布到元素的单侧

### align-item

元素在辅轴上如何对齐

- 元素间的关系
- 可选值
  - stretch 默认值，将元素的长度设置为相同的值
  - flex-start 元素不会拉伸，沿着辅轴起边对齐
  - flex-end 沿着辅轴的终边对齐
  - center 居中对齐
  - baseline 基线对齐，沿着文字的基线对齐

### align-content

- 辅轴上的空白空间

### align-self

单独控制自身的属性

## 弹性元素

- 弹性容器的子元素是弹性容器（弹性项）
- 一个元素可以同时是弹性容器和弹性元素

### flex-grow

- 弹性元素的伸展的系数
- 当度元素有多余空间时，子元素如何伸展
- 父元素的剩余空间，会按照比例进行分配

### flex-shrink

- 弹性元素的缩减系数
- 调整的量根据元素大小和缩减系数来进行计算

### flex-basis

- 元素在主轴上的基础长度
  - 如果主轴是**横向的**则该值指定的就是元素的宽度
  - 如果主轴是**纵向的**的则指定的就是元素的高度
- 默认值是 auto

### flex

- 可以设置弹性元素的所有的三个样式
  - flex 增长 缩减 基础;
    - initial "flex: 0 1 auto"
    - auto "flex: 1 1 auto"
    - none "flex: 0 0 auto"弹性元素没有弹性

### order

- 指定顺序
