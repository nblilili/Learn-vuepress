---
title: 03_在centos创建docker
---
## 安装Docker CE

删除已有Docker

> sudo yum remove docker \
> docker-client \
> docker-client-latest \
> docker-common \
> docker-latest \
> docker-latest-logrotate \
> docker-logrotate \
> docker-selinux \
> docker-engine-selinux \
> docker-engine

安装必要的系统工具

> sudo yum install -y yum-utils device-mapper-persistent-data lvm2

添加软件源信息

> sudo yum-config-manager --add-repo <http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo>

更新yum缓存

> sudo yum makecache fast

安装Docker-ce

> sudo yum -y install docker-ce

启动Docker后台服务

> sudo systemctl start docker

重启后Doker会关闭，如果需要开机启动

> sudo systemctl enable docker

# 镜像加速

由于国内网络问题，需要配置加速器来加速。
需要修改配置文件，Docker 使用 /etc/docker/daemon.json来配置daemon。

> vi /etc/docker/daemon.json

在配置文件中加入

```
{"registry-mirrors": ["http://hub-mirror.c.163.com"]}
```

之后重新启动服务：

> sudo systemctl daemon-reload
> sudo systemctl restart docker
