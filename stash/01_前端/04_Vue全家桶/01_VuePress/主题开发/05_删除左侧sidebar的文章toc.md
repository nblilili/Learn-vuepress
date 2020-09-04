---
title: 删除左侧sidebar的文档
---
# 删除左侧 sidebar 文章 toc

> 因为右侧导航栏已经可以显示二级的目录
>
> 所以要去掉左侧导航栏自动跳出的下拉

1. 删除 sidebarLink.vue 中相关的内容

   ```
       const active = item.type === 'auto'
         ? selfActive 
         // || item.children.some(c => isActive($route, item.basePath + '#' + c.slug))  //删除了这部分
         : selfActive
   ```