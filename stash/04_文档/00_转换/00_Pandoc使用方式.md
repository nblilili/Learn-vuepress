---
title: 00_Pandoc使用方式
---
## 使用

> 完整内容可以查看[官方指导](https://pandoc.org/MANUAL.html)

### 查看版本

```
pandoc --version
```

### md 转 html

1. 新建一个 test1.md 并添加内容

   ```md
   ---
   title: Hello Pandoc
   ---
   # Hello World

   now i'm trying to use pandoc

   ```

2. 执行：

   ```
   pandoc test1.md -f markdown -t html -s -o test1.html
   ```

### html 转 md

1. 我找了shpinx 生成的 html 文件`00_overview`

2. 执行

   ```
   pandoc 00_overview.html -f html -t markdown  -o 00_overview.md
   ```

3. 但是发现转换出来的 md 文档是经过扩展的

   在官方文档上了解到，文档的样式：

   - `markdown` ([Pandoc’s Markdown](https://pandoc.org/MANUAL.html#pandocs-markdown))
   - `markdown_mmd` ([MultiMarkdown](https://fletcherpenney.net/multimarkdown/))
   - `markdown_phpextra` ([PHP Markdown Extra](https://michelf.ca/projects/php-markdown/extra/))
   - `markdown_strict` (original unextended [Markdown](https://daringfireball.net/projects/markdown/))

4. 我选择了`markdown_strict`：

   ```
   pandoc 00_overview.html -f html -t markdown_strict -o 00_overview.md
   ```

5. 转换完成。

## 后续内容

但是我发现我不需要主题 sphinx 生成的 html 的 toc 等内容。

于是在 sphinx 中写了一份主题，主题中只有文档主要内容

这部分内容我写在《删改 Sphinx 主题》
