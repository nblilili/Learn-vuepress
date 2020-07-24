#!/bin/bash

function walk()  
{  
  for file in `ls $1`  
  do  
    local path=$1"/"$file  
    if [ -d $path ]  
     then  
      echo "DIR $path"  
      rm $path/index.md
      walk $path  
    else  
      # echo "FILE $path"  
      # for file in $(ls $path | grep .$old)
      #     do
      #     name=$(ls $file | cut -d. -f1)
      #     pandoc ${name}$old -f $old_format -t $new_formate -o ${name}$new
      #     echo "changing  ${name}$old to ${name}$new!"
      #     rm -f $file ${name}$old
      #     done
      echo "change done!"
    fi  
  done  

  echo "compleat!"
}  

if [ $# -ne 1 ]  
then  
  echo "USAGE: $0 TOP_DIR"  
else  
  walk $1  
fi



