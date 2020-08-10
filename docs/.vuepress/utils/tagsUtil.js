const fs = require('fs');
const path = require('path');
const platformUtil = require('../map/platformSet');

var tagMap = new Map();

module.exports = {
    
    getTagsConf(filePath){
      var tags = new Object();
      recursion(filePath, function callback(err, data){
        // console.log(data);
        for(let[k,v] of data){
          tags[k] = v;
        }
        // console.log("tags: "+JSON.stringify(tags, null, 4));
      })
      
      return tags;
    }
}

/**
 * 递归文件夹
 * @param {入口路径} filePath 
 */
function recursion(filePath, callback){
  fs.readdir(filePath,function(err,files){
    if(err){
      console.warn(err);
      callback(err);
    }else{
      files.forEach((filename) => {
        //获取当前文件的绝对路径
        var fileDir = path.join(filePath, filename);
        //根据文件路径获取文件信息，返回一个fs.Stats对象
        fs.stat(fileDir,function(eror,stats){
          if(eror){
              console.warn('获取文件stats失败');
          }else{
            if(stats.isFile()){
              // file
              // console.log("fileDir: "+ fileDir);
              // 文件名
              var basename = path.basename(fileDir);
              // 如果在平台中
              if(platformUtil.has(basename)){
                  // console.log("basename: "+ basename);
                  basename = path.basename(basename, ".md");
                  // 没有文件名的路径
                  var basedir = path.dirname(fileDir, basename)+"/";
                  // 去除上面路径的前缀,并调整系统路径符号,作为 map 的 key
                  var relativePath = path.relative("docs/", basedir).split(path.sep).join('/');
                  // 添加数组
                  var platforms;
                  if(tagMap.has(relativePath)){
                      platforms = tagMap.get(relativePath);
                      platforms.push(basename);
                      tagMap.set(relativePath, platforms);
                  }else{
                      platforms = new Array();
                      // 先添加一个 Android
                      platforms.push("Android");
                      platforms.push(basename);
                      tagMap.set(relativePath, platforms);
                  }
              }else{
                // 不在平台中，do nothing
              }
            }else{
              // folder
              // console.log("fileDir: "+ fileDir);
              recursion(fileDir, callback);
            }
            //结束后返回回调
            callback(null ,tagMap); 
          }
        })
      })    
      // callback(err, tagMap);  
    }
  })
}