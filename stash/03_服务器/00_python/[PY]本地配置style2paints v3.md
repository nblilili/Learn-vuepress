# Style2paints V3 本地配置教程

估计来看这篇教程的都知道Style2paints是啥了吧，这里不过多赘述了。  我不是专业玩家，这篇教程写的不容易，跌跌撞撞，总算把环境配置出来，这里提到了一些常见问题以及解决方案，希望大家不会再踩坑了。

如果我有说错的地方请指正，谢谢。  

本教程是完全基于GPU加速运行程序的，相比CPU运算速度更快，但是请注意，你的图形卡必须是NVIDIA图形卡，而且算力强烈建议要高于Geforce GTX 1050Ti，否则可能会造成反效果（GPU出图比CPU更慢）。  言归正传，我们开始教学。

  https://github.com/lllyasviel/style2paints/issues/100  这是官方的教程，但现在有一些问题，我会讲。 

 第一步：下载Python运行环境 https://www.anaconda.com/ 但是！我们不能从这这里下载！  

（Style2paints V3 使用Tensorflow 1.10.0 版本，需要Python3.6.X，但是anaconda官网目前提供的是3.7，Python3.7无法安装Tensorflow1.10.0，只能安装1.13.X以上版本，1.13.X以上版本是无法运行Style2paints V3 的！这点很重要！） 

 我们必须选择老版本，这里可以使用清华大学开源软件镜像站 https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/ 下载anaconda历史版本  32位电脑选上面，64位电脑选下面 

下载好先不要安装，我们还需要下载NVIDIA CUDA工具包和cuDNN工具包来提供必要的组件。  

CUDA下载地址 https://developer.nvidia.com/cuda-toolkit-archive  CUDA 9.0版本 如图选择 下载即可 下载完安装  安装好了之后（一定要安装好再往下） 

就开始安装cuDNN https://developer.nvidia.com/rdp/cudnn-archive cuDNN可能需要注册NVIDIA开发者，注册很快，比较方便，注册即可。  

选择v7.6.0 for CUDA 9.0 登录后即可下载 cuDNN是个压缩包 解压会得到一些文件夹  将这些文件夹（bin之类的）复制到C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v9.0 目录下，即可。 

 这时可以安装anaconda了，默认安装即可。  安装完之后，进入anaconda命令窗口，依次输入命令（下载比较慢可以。。。）： 

```python
pip install tensorflow-gpu==1.10.0  
pip install keras  
pip install bottle  
pip install gevent  
pip install h5py  
pip install opencv-python  
pip install scikit-image  
pip install paste
```

  都安装好后可以关闭窗口  下载Style2paints 主程序和模型 放入server文件夹  

主程序在 https://github.com/lllyasviel/style2paints 点击Download即可下载压缩包  

模型：https://pan.baidu.com/s/1r-JzgMwI6_mWUbHnJJj7tw 提取码:8346 （6个.net文件）  

记得把模型放入server文件夹！（不是一个文件夹叫server，是一个文件夹里面有server.py文件，模型放那里即可）  

运行 server.py  当你看到“Listening to 0.0.0.0:port”字样时，打开浏览器，输入网址：http://127.0.0.1:port/，即可使用！

作者：TechiKuZiR
https://www.bilibili.com/read/cv3531499/
出处： bilibili