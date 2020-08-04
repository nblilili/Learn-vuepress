#!/bin/bash

function genMarkdown()  
{  
  # change from old to new
  old='.md'
  new='.md'

  # pandoc 的转换
  #   old_format="html"
  #   # new_format="markdown_strict"
  #   new_format="commonmark"

  for file in `ls $1`  
  do  
    local path=$1"/"$file
    echo "path $path"
    if [ -d $path ]
      then  
      echo "DIR $path"   
      echo "delete index$old"
      genMarkdown $path 
    else  
      echo "FILE $path" 
      if [ ."${path##*.}"x = "$old"x ];then
        # 新旧路径
        oldName=${path%.*}$old
        newName=${path%.*}$new
        
        # 处理错误内容
        # sed -i "" "s|<span.*></span>||g" ${newName}
        # sed -i "" "s|\[¶\]\(.*\)||g" ${newName}
        # sed -i "" "s|<div.*>||g" ${newName}
        # sed -i "" "s|<\/div.*>||g" ${newName}
        # sed -i "" 's|](\/cn\/document\/V2.1|](https:\/\/developer.juphoon.com\/cn\/document\/V2.1|g' ${newName}

        
        # 清空标题上的内容
        lineNum=$(grep -n -m 1 "# .*" ${newName} | cut -f1 -d:)
        echo linenum:$lineNum
        title=$(basename $path $old)
        echo title:$title
        let $lineNum--
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