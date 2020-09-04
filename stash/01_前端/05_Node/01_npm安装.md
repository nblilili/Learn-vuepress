---
title: 01_npm安装
---
## npm介绍

1. npm是nodejs的包管理器

2. cnpm是是淘宝国内镜像

## 参数介绍

1. -g 参数

   -g 参数表示 全局安装

   通过npm root  -g 查看全局安装位置

2. S 参数

   --save安装包信息将加入到dependencied(生产阶段的依赖)

3. -D 参数

    -D --save --dev 安装包信息将加入到devDependencies（开发阶段的依赖）。一般使用它

   -d 命令要是失败的话使用 npm init -f 初始化

4. i

   i 是install的缩写

## 通过npm安装

npm安装有三种方式：

1. 直接安装

   ```
   npm install -g vue-cli
   ```

2. 通过淘宝镜像来下载,这种方式下载速度快很多，但是每次都要加上后缀

   ```
   npm install -gd express --registry==http://registry.npm.taobao.org
   ```

3. 永久设置镜像位置

   ```
   npm config set registry http://registry.npm.taobao.org
   ```

## 通过cnpm安装

使用cnpm

1. 安装cnpm

   ```
   npm install -g cnpm --registry=http://registry.npm.taobao.org
   ```

2. 安装vue

   ```
   cnpm install -gd vue-cli
   ```
