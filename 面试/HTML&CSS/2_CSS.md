# css3 新特性
- 选择器
- 新样式
 + border
  - border-radius
  - border-image
 + box-shadow
 + background
  - background-clip
  - background-origin
  - background-size
  - background-break
 + word-wrap
 + text-overflow
- transition
- animation
- 渐变


# Flex 布局

flex 布局是把容器变成一个弹性容器，其中这个容器中的子元素被称为弹性项目，而在容器中默认有主轴和交叉轴，弹性项目根据这两根轴在弹性容器中进行排列布局，从而形成了 flex 布局

## 弹性容器有 6 个常见属性

- flex-direction
- flex-warp
- flex-flow
- justify-content
- align-items
- align-content

### flex-direction 决定主轴方向

包含属性：row | row-reverse | column | column-reverse

### flex-warp 决定 主轴上排列不够，换不换行

包含属性：nowrap | wrap | wrap-reverse

### flex-flow 属性是 flex-direction 和 flew-warp 属性的简写

### justify-content 定义项目在主轴上的对齐方式

包含属性： flex-start | flex-end | center | space-between | space-around;

### align-items 定义项目在交叉轴如何对齐

包含属性：flex-start | flex-end | center | baseline | stretch

### align-content 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

包含属性： align-content: flex-start | flex-end | center | space-between | space-around | stretch;

## 弹性项目

### order 属性定义项目的排列顺序。数值越小，排列越靠前，默认为 0

如果 item1 项目 order 为-2，item2 项目 order 为 -1，则他们排列顺序为 item1 -> item2

### flex-grow 属性定义了项目放大比例，默认为 1， 即如果存在剩余空间，也不放大。

### flex-shrink 定义了项目 属性定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。

### flex-basis 定义了分配多余空间之前，设置项目占据的主轴空间。它的默认值为 auto

### flex 属性是 flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto。后两个属性可选

### align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch

## 关于 flex: auto 、 flex: none 、 flex: 1 、flex：0 有什么区别

| 语法          | 等值           |
| :------------ | :------------- |
| flex: initial | flex: 0 1 auto |
| flex: 0       | flex: 0 1 0%   |
| flex: none    | flex: 0 0 auto |
| flex: 1       | flex: 1 1 0%   |
| flex: auto    | flex: 1 1 auto |
