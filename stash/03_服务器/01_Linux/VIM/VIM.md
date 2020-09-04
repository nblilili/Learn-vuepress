---
title: VIM
---
---
title: VIM
---

1.在初始安装好ubuntu之后使用vi会出现一些错误，主要是由于ubuntu自带的vi不完整的原因，需要卸载掉重新安装。

2.解决方法:

a.首先卸载自带的vim

sudo apt-get remove --purge vim (--purge 是完全删除，会连配置文件一起删除)

sudo apt-get remove --purge vim-gtk vim-doc cscope

sudo apt-get clean

b.重新安装vim

sudo apt-get install vim

sudo apt-get install vim-gtk vim-doc cscopeS
