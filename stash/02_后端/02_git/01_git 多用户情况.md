## 简述

> 公司的 git 用的是公司的邮箱账号，我的 github 用的是自己的邮箱，所以全局这设置了自己的邮箱。
>
> 这一行为导致我在 push 到公司 git 仓库的时候没有权限。

## 解决方案

1. 查看远程仓库信息

   ```
   git remote -v
   ```

2. 设置远程

   ```
   git remote set-url origin https://UserA@github.com/UserA/repoA.git
   ```

---

## 另外还可以设置缓存

```
$ git config credential.helper store
$ git push https://github.com/owner/repo.git

Username for 'https://github.com': <USERNAME>
Password for 'https://USERNAME@github.com': <PASSWORD>
```

