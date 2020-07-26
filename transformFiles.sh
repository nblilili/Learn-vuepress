#!/bin/bash

function genMarkdown()  
{  
  # change from old to new
  old='.html'
  new='.md'

  # pandoc 的转换
  old_format="html"
  # new_format="markdown_strict"
  new_format="commonmark"

  for file in `ls $1`  
  do  
    # 遍历文件
    local path=$1"/"$file  
    echo "path $path"
    if [ -d $path ]
      then  
      echo "DIR $path"   
      echo "delete index$old"
      rm -f $path/index$old
      # 新建文件夹
      # 1. 获取文件的最后一段 ${path##*/}
      # 2. 把最后一段改名。获取这个的后半段。
      # 3. 然后把这个的文档的内容删除
      # 4. 文档
      # echo "mdDoc/${path#*/}"
      mkdir -p stash/${path#*/}
      genMarkdown $path 
    else  
      echo "FILE $path" # xxx/iOS/yyy.md
      # 这里用于转换，判断文件的后缀是不是符合
      if [ ."${path##*.}"x = "$old"x ];then
        # 去除去除文件后缀的路径 即 xxx/index
        oldName=${path%%.*}$old
        # newName=${path%%.*}${new}
        t=${path%%.*}${new}
        newName=stash/${t#*/}

        pandoc ${oldName} -f $old_format -t $new_format -o ${newName}
        echo "changing  ${name}$old to ${newName}!"
        # 处理错误内容
        sed -i "" "s|<span.*></span>||g" ${newName}
        sed -i "" "s|\[¶\]\(.*\)||g" ${newName}
        sed -i "" "s|<div.*>||g" ${newName}
        sed -i "" "s|<\/div.*>||g" ${newName}
        sed -i "" 's|](\/cn\/document\/V2.1|](https:\/\/developer.juphoon.com\/cn\/document\/V2.1|g' ${newName}

        
        # 清空标题上的内容
        lineNum=$(grep -n -m 1 "# .*" ${newName} | cut -f1 -d:)
        echo linenum:$lineNum
        title=$(grep -n -m 1 "# .*" ${newName} | cut -f2 -d#)
        echo title:$title
        let lineNum--
        sed -i "" "1,$lineNum"d"" ${newName}
        # front matter
        gsed -i '1 i ---' ${newName}
        gsed -i "1 i title:${title}" ${newName}
        gsed -i '1 i ---' ${newName}

        # 删除原有内容
        #rm -rf ${name}$old 
      else
        echo "非${old}文件"
      fi
      echo "change done!"
    fi  
    
  done  
}  
echo "complete!"

if [ $# -ne 1 ]  
then  
  echo "USAGE: $0 TOP_DIR"  
else  
  genMarkdown $1  
fi



# if [$new_format = "markdown_strict"];then
#           # 将网址相对路径调整为绝对路径
#           sed -i "" 's|href="/cn/document/V2.1/|href="https://developer.juphoon.com/cn/document/V2.1/|g' $name$new
#           # 删除 span
#           sed -i "" "s|<span.*></span>||g" $name$new
#           # 删除 a
#           sed -i "" "s|<a href=.*>¶</a>||g" $name$new
#         else