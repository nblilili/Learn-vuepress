---
title: [其他]修改linux时间为网络时间
---
---
title: [其他]修改linux时间为网络时间
---

古凡之 2018-09-22 20:44:39  647  收藏
展开
在修改这里主要使用到命令有date和ntpdated，主要是使用date来查看当前的时间，使用ntpdate来设置网络时间。ntpdate本地可能没有，那就需要先下载ntpdate模块。

下载ntpdate命令：sudo apt install ntpdate

等安装好之后，依次按照如下输入命令设置：

cd /usr/share/zoneinfo/Asia             //进入到相应的时区文件夹之下

cp ./Shanghai /etc/localtime             //将中国上海的时区文件拷贝到etc，命令为localtime，用于设置时区

sudo ntpdate time.windows.com       //使用微软的时间服务器

date                                                 //查看一下时间是否正确
