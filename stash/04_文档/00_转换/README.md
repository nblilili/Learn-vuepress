---
title: README
---
---
title: README
---

> 工作中需要将原有的 rst 文档转换成 md，但是 rst 中的 include 语法在md 中并不完全支持。
>
> rst 文件很多，将 include 语法替换成文本的工作内容不太容易。
>
> 我将转换成 md 文件分成了三步
>
> 1. 将 rst 文件转为 html（sphinx）
>
>    这一步的主要工作是编写一个除了文章本体没有其他内容（toc，footer 等）的主题
>
> 2. 将 html 转为 md（pandoc）
>
> 3. 编写脚本处理 md（这一步处理第一步中无法处理的问题）
