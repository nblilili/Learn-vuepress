const fs = require('fs');
const path = require('path');

var platformUtil = require('./docs/.vuepress/map/platformMap.js');
// var folderFilterSet = require('../map/folderFilterSet.js');

var tagMap = new Map();


recursion("./docs/cn");


function recursion(filePath){

    fs.readdir(filePath,function(err,files){
      if(err){
        console.warn(err)
      }else{
        files.forEach( (filename) => {
          //获取当前文件的绝对路径
          var fileDir = path.join(filePath, filename);
          //根据文件路径获取文件信息，返回一个fs.Stats对象
          fs.stat(fileDir,function(eror,stats){
            if(eror){
                console.warn('获取文件stats失败');
            }else{
              if(stats.isFile()){
                // file
                console.log("fileDir: "+ fileDir);
                // 文件名
                var basename = path.basename(fileDir);
                // 如果在平台中
                if(platformUtil.has(basename)){
                    basename = path.basename(fileDir, ".md");
                    console.log("basename: "+ basename);
                    // 没有文件名的路径
                    var basedir = path.dirname(fileDir, basename)+"/";
                    // 去除上面路径的前缀,并调整系统路径符号,作为 map 的 key
                    var relativePath = path.relative("docs/", basedir).split(path.sep).join('/');
                    // 添加数组
                    var platforms;
                    if(tagMap.has(relativePath)){
                        console.log("tag");
                        platforms = tagMap.get(relativePath);
                        platforms.push(basename);
                        tagMap.set(relativePath, platforms);
                    }else{
                        platforms = new Array();
                        platforms.push(basename);
                        tagMap.set(relativePath, platforms);
                    }
                    let obj= Object.create(null);
                    for (let[k,v] of tagMap) {
                        obj[k] = v;
                    }
                    console.log("----zuihou----"+JSON.stringify(obj, null, 4));
                }
              }else{
                // folder
                console.log("fileDir: "+ fileDir);
                recursion(fileDir);
              }
            }
          })
        })      
      }
    })
    return tagMap;
}