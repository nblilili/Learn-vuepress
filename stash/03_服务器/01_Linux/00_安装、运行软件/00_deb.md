---
title: 00_deb
---
## deb的安装

### 第一种

```undefined
 双击deb文件，会出现一个install的页面，然后点击install，完成后即可，但是有的ubuntu版本install之后起不到作用，所以推荐用第二种。
```

### 第二种（推荐）

```css
 1.cd 到安装包的目录
 2b（如果是red hat linux的rpm格式，用rpm -ivh file.rpm）
```

## deb的简单用法

### 1、 dpkg -i

```undefined
  安装一个 Debian 软件包。
```

### 2、dpkg -c

```undefined
 列出的内容。
```

### 3、dpkg -I

```undefined
 从中提取包裹信息。
```

### 4、dpkg -r

```undefined
 移除一个已安装的包裹。
```

### 5、dpkg -P

```csharp
 完全清除一个已安装的包裹。和 remove 不同的是，remove 只是删掉数据和可执行文件，purge 另外还删除所有的配制文件。
```

### 6、dpkg -L

```css
列出安装的所有文件清单。同时请看 dpkg -c 来检查一个 .deb 文件的内容。
```

### 7、dpkg -s

```css
 显示已安装包裹的信息。同时请看 apt-cache 显示 Debian 存档中的包裹信息，以及 dpkg -I 来显示从一个 .deb
```
