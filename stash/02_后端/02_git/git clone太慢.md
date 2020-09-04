1. 前提: 打开了vps代理。

2. 如果要设置全局代理，可以依照这样设置

```text
git config --global http.proxy http://127.0.0.1:1080
git config --global https.proxy https://127.0.0.1:1080
```

**但请注意，需要查看自己的端口是不是也是1080，可以打开你的SS查看代理设置**

![img](https://pic2.zhimg.com/50/v2-1d5b863661c5fbce60ed104752ddda4e_hd.jpg)![img](https://pic2.zhimg.com/80/v2-1d5b863661c5fbce60ed104752ddda4e_1440w.jpg)

如图所示，我的监听端口就是1087，所以我需要把后面的1080改成1087

3. 完成上面一步后，此时输入git clone xxxxxxx就可以利用代理进行下载了

**但同时，也请注意，这里指的是https协议，也就是**

```text
git clone https://www.github.com/xxxx/xxxx.git
```

这种

对于SSH协议，也就是

```text
git clone git@github.com:xxxxxx/xxxxxx.git
```

这种，依旧是无效的

4. 以上为总结，但我不推荐直接用全局代理

因为如果挂了全局代理，这样如果需要克隆coding之类的国内仓库，会奇慢无比

所以我建议使用这条命令，只对github进行代理，对国内的仓库不影响

```text
git config --global http.https://github.com.proxy https://127.0.0.1:1080
git config --global https.https://github.com.proxy https://127.0.0.1:1080
```

同时，如果在输入这条命令之前，已经输入全局代理的话，可以输入进行取消

```text
git config --global --unset http.proxy
git config --global --unset https.proxy
```



------------------------我是分割线-----------------------------

以上是http代理，有评论反映ss暴露的是socks5。但是我在mac上，直接使用http代理是有效的，评论也有人反映有效。但为了以防万一，附上socks5代理的方法。

1.首先查看自己socks5的端口号



![img](https://pic4.zhimg.com/50/v2-602f596434a3e19e708c225f457e9283_hd.jpg)![img](https://pic4.zhimg.com/80/v2-602f596434a3e19e708c225f457e9283_1440w.jpg)

2.我这里记下来是127.0.0.1:1086

![img](https://pic1.zhimg.com/50/v2-8b2c6525c1ec8de284062da5cf85d01a_hd.jpg)![img](https://pic1.zhimg.com/80/v2-8b2c6525c1ec8de284062da5cf85d01a_1440w.jpg)

3.然后输入命令

```text
git config --global http.https://github.com.proxy socks5://127.0.0.1:1086
git config --global https.https://github.com.proxy socks5://127.0.0.1:1086 
```