---
title: 00_node安装
---
## ubuntu安装node.js

1. 安装

   ```
   sudo apt-get install nodejs
   sudo apt-get install npm
   ```

2. 升级

   ```
   sudo npm install npm -g
   npm install –g n
   ```

   ```
   n latest    #(升级node.js到最新版)npm config set registry http://registry.npm.taobao.org/
   n stable #（升级node.js到最新稳定版）
   ```

3. 镜像

   换成淘宝的

   ```
   npm config set registry http://registry.npm.taobao.org/
   ```

   换成原来的

   ```
   npm config set registry https://registry.npmjs.org/
   ```

## centOS
