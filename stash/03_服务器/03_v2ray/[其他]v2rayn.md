---
title: [其他]v2rayn
---
## 服务器

1. 下载程序

   ```
   bash <(curl -L -s https://install.direct/go.sh)
   ```

2. 查看配置文件

   ```
   cat /etc/v2ray/config.json
   ```

3. 防火墙放行监听的端口

   ```
   # firewalld放行端口（适用于CentOS7/8）
   firewall-cmd --permanent --add-port=23581/tcp # 23581改成你配置文件中的端口号
   firewall-cmd --reload
   # ufw放行端口（适用于ubuntu）
   ufw allow 23581/tcp # 23581改成你的端口号
   # iptables 放行端口（适用于CentOS 6/7）
   iptables -I INPUT -p tcp --dport 23581 -j ACCEPT
   # 设置开机启动
   systemctl enable v2ray
   # 运行v2ray
   systemctl start v2ray
   ```

## 客户端

\1. 安装客户端：找到下载的安装程序，找一个合适的目录**解压**（**不要**放在C盘的”Program Files”目录下，会有权限问题），**不要双击压缩文件中的v2rayN.exe直接打开！**

\2. 进入V2rayN-Core目录，双击“V2RayN.exe”，程序启动后**托盘**上会出现一个V图标（托盘就是桌面右下角，显示时间输入法那块）。如果程序没有反应，托盘下也没有出现图标，请先更新系统并安装 [.NET Framework 4.7.2](https://dotnet.microsoft.com/download/dotnet-framework/net472) 和 [Microsoft Visual C++ 2015 Redistributable (x86)](https://www.microsoft.com/en-us/download/details.aspx?id=53840) 再重新打开；

[![v2rayn logo](https://www.hijk.pw/wp-content/uploads/2019/12/Jietu20191207-182701.jpg)](https://www.hijk.pw/wp-content/uploads/2019/12/Jietu20191207-182701.jpg)

v2rayn logo

\3. 点击系统托盘的`V2RayN`图标，弹出程序主界面：

[![v2rayn 主界面](https://www.hijk.pw/wp-content/uploads/2019/12/v2rayn-%E4%B8%BB%E7%95%8C%E9%9D%A2.jpg)](https://www.hijk.pw/wp-content/uploads/2019/12/v2rayn-主界面.jpg)

v2rayn 主界面

\3. 点“服务器”下拉菜单中的添加“vmess”服务器，出现添加服务器界面：

[![v2rayN添加vmess服务器](https://www.hijk.pw/wp-content/uploads/2019/12/v2rayN%E6%B7%BB%E5%8A%A0vmess%E6%9C%8D%E5%8A%A1%E5%99%A8.jpg)](https://www.hijk.pw/wp-content/uploads/2019/12/v2rayN添加vmess服务器.jpg)

v2rayN添加vmess服务器

\4. 填写服务器地址（域名或ip）、端口、用户id、额外id，**加密方式一般都是auto，传输协议一般是tcp**（本站的一键脚本都会输出这些信息）。别名随便写就可以，比如“洛杉矶不限流量”。**如果使用了伪装等高级技术，**需要选择伪装类型(ws伪装类型选none)，伪装域名填写配置的主机名，输入伪装路径，底层传输安全选择tls，allowinsecure选择true（**没使用伪装不要动这些参数！**）

如果服务端信息是订阅，点击“订阅”下拉框的“订阅设置”，在弹框中点击“添加”，输入订阅网址，然后按确定：

[![v2rayN添加订阅](https://www.hijk.pw/wp-content/uploads/2019/12/v2rayN%E6%B7%BB%E5%8A%A0%E8%AE%A2%E9%98%85.jpg)](https://www.hijk.pw/wp-content/uploads/2019/12/v2rayN添加订阅.jpg)

v2rayN添加订阅

\5. 服务器信息配置好后，主界面下方会出现日志信息：

[![V2rayN日志](https://www.hijk.pw/wp-content/uploads/2019/12/V2rayN%E6%97%A5%E5%BF%97.jpg)](https://www.hijk.pw/wp-content/uploads/2019/12/V2rayN日志.jpg)

V2rayN日志

\6. 点击主界面上的“参数设置”，在“Core:基础设置”中将“Http代理”选择“开启PAC，并自动配置PAC（PAC模式）”；需要隐藏真实ip，或者某些网站打不开，可使用全局模式（也可以右键托盘图标，在”Http代理“中选择）：

[![v2rayN参数设置](https://www.hijk.pw/wp-content/uploads/2019/12/v2rayN%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.jpg)](https://www.hijk.pw/wp-content/uploads/2019/12/v2rayN参数设置.jpg)

v2rayN参数设置

\7. 接着点击“Core：路由设置”，域名策略选“AsIS”，然后点击“一键设置默认自定义路由规则”，然后点击下方的“确定”完成设置：

[![v2rayN选择路由策略](https://www.hijk.pw/wp-content/uploads/2019/12/v2rayN%E9%80%89%E6%8B%A9%E8%B7%AF%E7%94%B1%E7%AD%96%E7%95%A5.png)](https://www.hijk.pw/wp-content/uploads/2019/12/v2rayN选择路由策略.png)

v2rayN选择路由策略

如果系统防火墙弹出提示，选择“允许访问”。

配置没问题且服务器网络通畅的话，接下来就可以打开浏览器愉快的访问外网了

## 命令行

买好服务器，选定操作系统安装好后，请使用SSH或者远程桌面能连到服务器。接着打开一个终端（SSH用户无需重新开启新终端），确认当前用户是`root`。

在CentOS、Ubuntu等常用Linux系统上，直接执行如下命令安装`V2Ray`（如果已安装则更新程序）：

```
bash <(curl -L -s https://install.direct/go.sh)
```

配置文件中”inbounds”下的这几项信息需要留意：port（`端口`）、clients中的id（`用户id`）和alterId（`额外id`），它们将在配置客户端时用到。

配置文件无需任何改动即可正常使用。接下来防火墙放行监听的端口，设置开机启动并运行`V2Ray`：

```
# firewalld放行端口（适用于CentOS7/8）
firewall-cmd --permanent --add-port=23581/tcp # 23581改成你配置文件中的端口号
firewall-cmd --reload
# ufw放行端口（适用于ubuntu）
ufw allow 23581/tcp # 23581改成你的端口号
# iptables 放行端口（适用于CentOS 6/7）
iptables -I INPUT -p tcp --dport 23581 -j ACCEPT
# 设置开机启动
systemctl enable v2ray
# 运行v2ray
systemctl start v2ray
```

`ss -ntlp | grep v2ray` 命令可以查看v2ray是否正在运行。如果输出为空，大概率是被selinux限制了，解决办法如下：

\1. 禁用selinux：`setenforce 0`;

\2. 重启v2ray：`systemctl restart v2ray`

到此，服务端应该配置好了。如果服务器商层面还有防火墙（阿里云/Google/AWS购买的vps），请登录网页后台，放行v2ray的端口。

接下来介绍v2ray客户端的配置和使用。

##
