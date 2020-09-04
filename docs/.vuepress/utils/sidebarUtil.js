const fs = require('fs');
const path = require('path');
var translaterUtil = require('../map/translaterMap.js');
var platformUtil = require('../map/platformMap.js');
var folderFilterSet = require('../map/folderFilterSet.js');

var sidebar = new Object();
var basePath = '';

module.exports = {
  getSidebarConf(filePath){
    divideProducts(filePath, sidebar);
    console.log("-----this is sidebar!-----");
    return sidebar;
  }
}
  
/**
 * 划分六个产品（一级跟后续不一样需要单独写）
 * @param {文档入口路径} filePath 
 * @param {侧边栏对象} sidebar 
 */
function divideProducts(filePath, sidebar){

  fs.readdir(filePath, (err, files) => {
    if(err){
      console.warn(err);
    }else{
      files.forEach(function(dirname){
        console.log("----------"+dirname);
        //获取当前文件的绝对路径
        var fileDir = path.join(filePath, dirname);
        fs.stat(fileDir, function(error, stats){
          if (error){
            console.log(error);
          }else{
            if (stats.isDirectory() && fileDir!=filePath){
              fileDisplay(fileDir, sidebar);
            }
          }
        })
      })
    }
  })
}

/**
 * 展开所有的文件
 * @param {加了一级的文档路径} filePath 
 * @param {侧边栏对象} sidebar 
 */
function fileDisplay(filePath, sidebar){
  basePath = filePath;
  // 一级的 title
  var title = path.basename(path.parse(filePath).dir)+ "/" + path.basename(filePath);
  console.log("title-----"+ title);
  // 一级的 sidebar 对象 "$title": [],
  var arr = new Array();
  sidebar['/' + title + '/'] = arr;
  getChildren(filePath, arr);
}

/**
 * 每个文件夹都是一个对象
 * @param {文件夹的名字} objTitle 
 * @param { group 中的 children } children 
 * @param {是否能折叠} collapsable 
 */
function makeDirObj(objTitle, children, collapsable){
  console.log("in makDirObj")
  console.log(children);
  var obj = new Object();
  obj.title =  translateGroupTitle(objTitle);
  obj.children = children;
  obj.collapsable = collapsable
  return obj
}

/**
 * 将英文路径改为中文
 * @param { group 对象的 title} objTitle 
 */
function translateGroupTitle(objTitle){
  var cnTitle = "no matched name"
  // 对 title 进行判断
  if(translaterUtil.has(objTitle)){
    cnTitle = translaterUtil.get(objTitle)
  }else{
    cnTitle = objTitle;
  }
  return cnTitle
}

/**
 * 递归获取子元素
 * @param {路径} filePath 
 * @param {子数组} childArr 
 */
function getChildren(filePath, childArr){
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
              console.log("fileDir: "+ fileDir);
              var relativePath = path.relative(basePath, fileDir).split(path.sep).join('/');
              //console.log(childArr);
              console.log(JSON.stringify(sidebar, null, 4));
              //relativePath.split('README.md')[0]
              if(!platformUtil.has(filename)){
                filename == 'README.md' ? childArr.splice(0,0,relativePath.split('README.md')[0]):childArr.push(relativePath);
              }else {
                console.log("fileDir: " + fileDir + " and do nothing");
              }
            }else{
              // folder
              if(folderFilterSet.has(filename)){
                console.log("floderDir: "+ fileDir);
                getChildren(fileDir, childArr);
              }else{
                var subChildArr = new Array();
                childArr.push(makeDirObj(filename, subChildArr, true));
                getChildren(fileDir, subChildArr);
              }
            }
          }
        })
      })      
    }
  })
}