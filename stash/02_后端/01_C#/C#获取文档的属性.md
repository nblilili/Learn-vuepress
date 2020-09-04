---
title: C#获取文档的属性
---
---
title: C#获取文档的属性
---

尝试获取office文档的属性

了解到workBook中有个属性为`BuiltInDocumentProperties`

```c#
var builtinProps = doc.BuiltInDocumentProperties;
```

但是在属性的使用上遇到了问题

发现可以使用`Microsoft.Office.Interop.Word.WdStatistic.wdStatisticPages`来获取word文件的页数

那么可不可以使用同样的方法获取其他属性呢?

我们可以看到获取文档页数的方法是

```c#
//word的页数
Word.WdStatistic stat = Word.WdStatistic.wdStatisticPages;
int pages = doc.ComputeStatistics(stat, Type.Missing);
Console.WriteLine(pages + "");
```

wdStatistic和ComputeStatistics似乎是一起使用的

那么WdBuiltInProperty是否也和BuiltInDocumentProperties一起使用呢

现在问题就变成了 how to use Word.WdBuiltInProperty.

在文档中验证了我们的猜想

> Used with the **BuiltInDocumentProperties** collection of the **Document** or **Template** object. Most built-in document properties can be found interactively in the Properties dialog box available by clicking Properties on the File menu.

但是我该如何使用这个属性呢

最终发现了这个方法..需要注意的是这个方法在编译的时候会出错,不过可以运行

```C#
 //word的appName
Word.WdBuiltInProperty appname  = Word.WdBuiltInProperty.wdPropertyAppName;
var name = doc.BuiltInDocumentProperties(appname).Value.ToString();
//string name = doc.BuiltInDocumentProperties(appname);
Console.WriteLine(name + "");
```

> Word.BuiltInProperty只是用来描述下标的api

以此方式获取的属性是文档的详细信息里的属性...注意在获取的时候对属性进行判断

所以一开始我们的方式就是正确的, ,发生这上述一切的原因有二

1. 是由于编译器报错
2. 是由于对属性为null的情况没有进行判断

end
