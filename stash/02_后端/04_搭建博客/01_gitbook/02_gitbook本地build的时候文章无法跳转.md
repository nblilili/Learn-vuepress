---
title: 02_gitbook本地build的时候文章无法跳转
---
---
title: 02_gitbook本地build的时候文章无法跳转
---

- 打开 gitbook.js
- 找到下面的代码

````
if(m)for(n.handler&&
````

- 将if(m)改成if(false)
