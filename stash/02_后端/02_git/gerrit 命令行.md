---
title: gerrit 使用
tag: git,gerrit,sourceTree
---

因为不想用 sourceTree，但是 gerrit 的命令行有点区别。

## 前提

1. 安装了 git

2. 拥有 gerrit 的账号

   > gerrit 地址：http://192.168.0.251/

   ![image-20200722102826665](/Users/lilili/Library/Application Support/typora-user-images/image-20200722102826665.png)

## gerrit 的使用步骤

1. 设置（修改）全局的 git 用户名及邮箱

   ```
   git config --global user.name "haoli.li"
   ```

   ```
   git config --global user.email "haoli.li@juphoon.com.cn"
   ```

2. 生成 SSH key

   ```
   ssh-keygen -t rsa
   ```

3. 复制公钥内容到 gerrit 网站上

   ```
   cat ~/.ssh/id_rsa.pub
   ```

   点击自己的用户名-【setting】-【ssh public keys】-【粘贴刚刚复制的公钥的内容】

4. 在本地添加私钥代理

   ```
   git init
   ```

5. 打开 gerrit 网站，【project】-【List】-【选择自己的项目】

   勾选`Clone with commit-msg hook`和`ssh`.复制命令行运行

   ```
   git clone "ssh://haoli.li@gerrit.joynile.com:29418/JuphoonCloud/Doc" && scp -p -P 29418 haoli.li@gerrit.joynile.com:hooks/commit-msg "Doc/.git/hooks/"
   ```

6. 在本地新建分支并切换（不必要）

   ```
   git branch 新分支
   ```

   ```
   git checkout 新分支
   ```

7. 从远端分支 pull

   > 需要注意的是在 gerrit 上**建立**远端分支需要管理员权限）

   - 第一次：

     ```
     git pull origin DocCenter
     ```

   - 除了第一次：

     ```
     git pull --rebase origin 远端分支名
     ```

8. add

   ```
   git add .
   ```

   ```
   git commit -m "change 这次修改了什么内容"
   // 或者
   git commit -m "feature 这次添加了什么内容"
   ```

9. push

   ```
   git push origin HEAD:refs/for/NewDocCenter
   ```

   

   以上









