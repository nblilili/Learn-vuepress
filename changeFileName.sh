#!/bin/bash

function walk()  
{  
  for file in `ls $1`  
  do  
    local path=$1"/"$file  
    if [ -d $path ]  
      then  
      walk $path  
    else  
      filename=$(basename ${path})
      # 将老的文件名改为新的文件名
      oldfilename="01_achieve.rst"
      newfilename="02_achieve.rst"
      if [ "${filename}" = "${oldfilename}" ];then
        echo "moving: "${path%/*}/${filename}" to " ${path} ${path%/*}/${newfilename}
        mv ${path} ${path%/*}/${newfilename}
      fi
      if [ "${filename}"  = "96_error_code.rst" ];then
        echo "deleting: "${path}
        rm -rf ${path}
      fi
    fi  
  done  
}  
echo "compleat!"$count

if [ $# -ne 1 ]  
then  
  echo "USAGE: $0 TOP_DIR"  
else  
  walk $1  
fi





