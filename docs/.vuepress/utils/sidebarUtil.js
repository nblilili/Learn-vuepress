const fs = require('fs');
const path = require('path');
var translatorMapEN = require('../map/translatorMapEN.js');
var translatorMapCN = require('../map/translatorMapCN.js');
var platformSelectorMap = require('../map/platformSelectorMap.js');
var folderFilterSet = require('../map/folderFilterSet.js');

var sidebar = new Object();
var basePath = '';

module.exports = {
  getSidebarConf(filePath) {
    // 处理 sidebar 对象
    divideProducts(filePath);
    // console.log("----- this is sidebar!-----");
    return sidebar;
  }
}

/**
 * 划分六个产品（一级跟后续不一样需要单独写）
 * @param {文档入口路径} filePath 
 * @param {侧边栏对象} sidebar 
 */
function divideProducts(filePath) {
  fs.readdir(filePath, (err, files) => {
    if (err) {
      console.warn(err);
    } else {
      files.forEach(function (dirname) {
        // console.log("----------"+dirname);
        //获取当前文件的绝对路径
        var fileDir = path.join(filePath, dirname);
        fs.stat(fileDir, function (error, stats) {
          if (error) {
            // console.log(error);
          } else {
            if (stats.isDirectory() && fileDir != filePath) {
              // 展示所有的文件
              fileDisplay(fileDir, sidebar);
            } else {
              //is file do nothing
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
function fileDisplay(filePath, sidebar) {
  basePath = filePath;
  // 一级的 title
  var title = path.basename(path.parse(filePath).dir) + "/" + path.basename(filePath);
  // console.log("title: "+ title);
  // 一级的 sidebar 对象 "$title": [],
  var arr = new Array();
  sidebar['/' + title + '/'] = arr;
  getChildren(filePath, arr);
}

/**
 * 每个文件夹都是一个对象
 * @param {文件夹的名字} objTitle 
 * @param { group 中的 children } children 
 * @param {是否能折叠} collapsible 
 */
function makeDirObj(objTitle, children, collapsible, filePath) {
  var obj = new Object();
  obj.title = translateGroupTitle(objTitle, filePath);
  obj.children = children;
  obj.collapsible = collapsible
  return obj
}

/**
 * 将英文路径改为中文
 * @param { group 对象的 title } objTitle 
 * @param { 文件路径 } filePath 
 */
function translateGroupTitle(objTitle, filePath) {
  // 对 title 进行判断
  var cnTitle = "no matched name"
  if (filePath.includes("cn")){
    translatorMapCN.has(objTitle) ? cnTitle = translatorMapCN.get(objTitle) : cnTitle = objTitle;
  }else if(filePath.includes("en")){
    translatorMapEN.has(objTitle) ? cnTitle = translatorMapEN.get(objTitle) : cnTitle = objTitle;
  }
  return cnTitle
}

/**
 * 递归获取子元素
 * @param {路径} filePath 
 * @param {子数组} childArr 
 */
function getChildren(filePath, childArr) {
  // 这里使用同步方法，防止顺序出错
  var files = fs.readdirSync(filePath);
  files.forEach((filename) => {
    //获取当前文件的绝对路径
    var fileDir = path.join(filePath, filename);
    //根据文件路径获取文件信息，返回一个fs.Stats对象
    var stats = fs.statSync(fileDir);
    if (stats.isFile()) {
      // console.log("fileDir: "+ fileDir);
      filename= path.basename(filename, ".md");
      var relativePath = path.relative(basePath, fileDir).split(path.sep).join('/');
      if (!platformSelectorMap.has(filename)) {
        filename == 'README' ? childArr.splice(0, 0, '') : childArr.push(relativePath);
        // console.log("---sidebar---: "+ JSON.stringify(sidebar, null, 4));
      } else {
        // console.log("fileDir: " + fileDir + " and do nothing");
      }
    } else {
      // folder
      if (folderFilterSet.has(filename)) {
        // console.log("floderDir: "+ fileDir);
        getChildren(fileDir, childArr);
      } else {
        var subChildArr = new Array();
        childArr.push(makeDirObj(filename, subChildArr, true, filePath));
        getChildren(fileDir, subChildArr);
      }
    }
  })
}