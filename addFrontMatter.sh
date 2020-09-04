#!/bin/bash

# 添加 FrontMatter，并且使用 markdownlint 整理了 md 文档
function addFrontMatter()  
{  
  # 递归文件夹
  for file in `ls $1`  
  do  
    local path=$1"/"$file
    echo "path $path"
    if [ -d $path ]
      then  
      echo "DIR $path"   
      
      addFrontMatter $path 
    else  
      echo "FILE $path" 
      if [ ."${path##*.}"x = ".md"x ];then
        # 清空标题上的内容
        lineNum=$(grep -n -m 1 "# .*" ${path} | cut -f1 -d:)
        echo linenum:$lineNum
        # 以路径为 title
        title=$(basename $path ".md")
        # 以一级标题为title
        # title=$(grep -n -m 1 "# .*" ${path} | cut -f2 -d#)
        echo title: $title
        # 删除标题前的内容
        let lineNum--
        sed -i "" "1,$lineNum"d"" ${path}
        # front matter
        gsed -i '1 i ---' ${path}
        # gsed -i "1 i date: \{\{ date \}\}" ${path}
        gsed -i "1 i title: ${title}" ${path}
        gsed -i '1 i ---' ${path}

        # 最后使用markdownlint-cli 整理 md
        # markdownlint -f ${path}
      else
        echo "非${old}文件"
        rm -rf $path
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
  addFrontMatter $1  
fi
