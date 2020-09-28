#!/bin/bash

function walk()  
{  
  for file in `ls $1`  
  do  
    local path=$1"/"$file  
    if [ -d $path ];then
      walk $path
    else
      filename=$(basename ${path} ".md")
      echo "filename: "$filename
      if [ $filename = "Android" ];then
        echo "yes: "$filename
        gsed -i 's|(interfacecom|(https://developer.juphoon.com/portal/reference/V2.3/android/interfacecom|g' ${path}
        gsed -i 's|(classcom|(https://developer.juphoon.com/portal/reference/V2.3/android/classcom|g' ${path}
      elif [ $filename = "iOS" -o $filename = "macOS" ];then
        echo "yes: "$filename
        gsed -i 's|(interfacecom|(https://developer.juphoon.com/portal/reference/V2.3/ios/interfacecom|g' ${path}
        gsed -i 's|(classcom|(https://developer.juphoon.com/portal/reference/V2.3/ios/classcom|g' ${path}
      elif [ $filename = "Windows" ];then
        echo "yes: "$filename
        gsed -i 's|(interfacecom|(https://developer.juphoon.com/portal/reference/V2.3/windwos/interfacecom|g' ${path}
        gsed -i 's|(classcom|(https://developer.juphoon.com/portal/reference/V2.3/windwos/classcom|g' ${path}
      elif [ $filename = "C++" ];then
        echo "yes: "$filename
        gsed -i 's|(interfacecom|(https://developer.juphoon.com/portal/reference/V2.3/c++/interfacecom|g' ${path}
        gsed -i 's|(classcom|(https://developer.juphoon.com/portal/reference/V2.3/c++/classcom|g' ${path}
      fi

      gsed -i 's|^# 客户端 API|## 客户端 API|g' ${path}
      gsed -i 's|^概览|### 概览|g' ${path}
      gsed -i 's|# | |g' ${path}
      # 最后使用markdownlint-cli 整理 md
      markdownlint -f ${path}
      echo "path: " $(dirname ${path})
      cp -rf $(dirname ${path})"/" /Users/lilili/Documents/juphoon/vuepress/docs/cn/01_o2o_video/99_api_reference/00_client_api/  
      cp -rf $(dirname ${path})"/" /Users/lilili/Documents/juphoon/vuepress/docs/cn/02_mult_audio/99_api_reference/00_client_api/
      cp -rf $(dirname ${path})"/" /Users/lilili/Documents/juphoon/vuepress/docs/cn/03_mult_video/99_api_reference/00_client_api/ 
      cp -rf $(dirname ${path})"/" /Users/lilili/Documents/juphoon/vuepress/docs/cn/04_audio_live/99_api_reference/00_client_api/ 
      cp -rf $(dirname ${path})"/" /Users/lilili/Documents/juphoon/vuepress/docs/cn/05_video_live/99_api_reference/00_client_api/ 
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





