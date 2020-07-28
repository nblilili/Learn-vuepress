#!/bin/bash

# 生成 md
function genMarkdown() {  
  # change from old to new
  old='.html'
  new='.md'
  # pandoc 的转换
  old_format="html"
  new_format="commonmark"

  arr=('Android' 'iOS' 'macOS' 'Windows' 'C++')

  for file in `ls $1`  
  do  
    # 遍历文件
    local path=$1"/"$file  
    echo "path $path"
    if [ -d $path ]
      then  
      echo "DIR $path"   
      echo "delete index$old"
      rm -f $path/index$old_format
      mkdir -p docs/${path#*/}
      genMarkdown $path 
    else  
      echo "FILE $path" 
      # 这里用于转换，判断文件的后缀是不是符合
      if [ ."${path##*.}"x = "$old"x ];then
        
        # 如果上一级是 iOS 或 xx
        t1=${path%/*}
        
        upPath=${t1##*/} # ios
        upupPath=${t1%/*} # xxx
        echo "-----t1-----"$t1
        echo "-----upPath-----"$upPath
        echo "-----upupPath-----"$upupPath
        newbasename=$(basename $path $old) # name of file:yyy

        # 去除文件后缀的路径 即 xxx/index
        oldName=${path%%.*}$old
        new_path=''
        if [[ "${arr[@]}" =~ "$upPath" ]];then
          # 新建一个文件夹
          mkdir -p docs/${upupPath#*/}/$newbasename
          echo '-----making-----'docs/${upupPath#*/}/$newbasename
          # 删除老版本文件夹
          rm -rf docs/${upupPath#*/}/$upPath
          echo '-----deleting-----'docs/${upupPath#*/}/$upPath
          
          new_path=docs/${upupPath#*/}/$newbasename/$upPath$new
          echo '-----changednew_path-----'$new_path
        else
          # 一级菜单下的 00_overview 改为 README 文件
          if [ "$(basename $path $old)" = "00_overview" ];then
            t=${path%/*}/README${new}
            new_path=docs/${t#*/}
            echo '-----changednew_path-----'$new_path
          else
            t=${path%%.*}${new}
            new_path=docs/${t#*/}
            echo '-----changednew_path-----'$new_path
          fi  
        fi
        
        pandoc ${oldName} -f $old_format -t $new_format -o ${new_path}
        echo "changing  ${name}$old to ${new_path}!"
        handlingErrors ${new_path}
        

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

# 处理 md 文件中的错误
function handlingErrors() {
  new_path=$1
  echo "handling errors in "$new_path
  
  # 添加高亮
  # 获取高亮类型
  syntaxType=$(grep -n -m1 "highlight-.* " -o ${new_path} | cut -f2 -d-)
  
  # 逆序遍历以循环删除空行
  start_nums=($(grep -n "<div class=\"highlight\">" -o ${new_path} | cut -f1 -d:))
  for ((i=${#start_nums[@]}-1;i>=0;i--))
  do
    start_num=${start_nums[i]}
    echo "-----start_num-----: "$start_num
    # 替换 div 头, 这里选的不是 start_num 那一行
    gsed -i "${start_num}s|<div class=\"highlight\">|\`\`\`${syntaxType}|g" ${new_path}
    
    # 替换 div 尾
    val=$(sed -n "${start_num},10000p" ${new_path} | grep -n -m1 "<\/div.*>" | cut -f1 -d:)
    end_num=`expr ${val} + ${start_num} - 1`
    echo "-----end_num-----: "${end_num}
    gsed -i "${end_num}s|<\/div.*>|\`\`\`|g" ${new_path}
    
    let start_num++
    let end_num--
    # 代码块缩进
    gsed -i "${start_num},${end_num}s/^\s\{4\}//g" ${new_path}
    # 先删除 div 尾，后删除 div 头
    gsed -i "${end_num}d" ${new_path}
    gsed -i "${start_num}d" ${new_path}
  done
  

  # 处理错误内容

  sed -i "" "s|<span.*></span>||g" ${new_path}
  sed -i "" "s|\[¶\]\(.*\)||g" ${new_path}
  sed -i "" "s|<div.*>||g" ${new_path}
  sed -i "" "s|<\/div.*>||g" ${new_path}
  sed -i "" 's|](\/cn\/document\/V2.1|](https:\/\/developer.juphoon.com\/cn\/document\/V2.1|g' ${new_path}
  # 删除空行
  # gsed -i '/^$/d' ${new_path}

  # 清空标题上的内容
  lineNum=$(grep -n -m 1 "# .*" ${new_path} | cut -f1 -d:)
  echo linenum:$lineNum
  title=$(grep -n -m 1 "# .*" ${new_path} | cut -f2 -d#)
  echo title:$title
  let lineNum--
  sed -i "" "1,$lineNum"d"" ${new_path}
  # add front matter
  gsed -i '1 i ---' ${new_path}
  gsed -i "1 i title:${title}" ${new_path}
  gsed -i '1 i ---' ${new_path}
}


if [ $# -ne 1 ]  
then  
  echo "USAGE: $0 TOP_DIR"  
else  
  genMarkdown $1  
fi

