---
title: 02_icarus主题使用
---
# icarus主题使用

> 这个放在自己的网站上用

```ymal
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: 'git'
  repository: git@nblilili.com:/home/git/blog.git
  branch: master
  message: update blog
```

clone完主题后

我们还需要下载以下的插件

```
ERROR Package bulma-stylus is not installed.
ERROR Package hexo-component-inferno is not installed.
ERROR Package hexo-renderer-inferno is not installed.
ERROR Package inferno is not installed.
ERROR Package inferno-create-element is not installed.
ERROR Please install the missing dependencies your Hexo site root directory:
ERROR npm install --save bulma-stylus@0.8.0 hexo-component-inferno@^0.2.4 hexo-renderer-inferno@^0.1.3 inferno@^7.3.3 inferno-create-element@^7.3.3
```

使用error中的命令行安装需要的插件

```
npm install --save bulma-stylus@0.8.0 hexo-component-inferno@^0.2.4 hexo-renderer-inferno@^0.1.3 inferno@^7.3.3 inferno-create-element@^7.3.3
```
