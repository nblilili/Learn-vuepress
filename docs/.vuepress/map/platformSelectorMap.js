/**
 * 作用
 *   1. 隐藏不想显示在 sidebar 中的文件
 *   2. 起到对平台排序的作用
 * 使用方式
 *   map 的 key 表示需要忽略的平台，需要隐藏的平台名称为 key。
 *   map 的 value 表示平台的顺序（在 js 中获取了该 value 自定义了排序规则），数字越小越靠前。不在 map 中的平台将在最前。
 * 
 */
module.exports = new Map()
  .set("Android", 1)
  .set("Windows", 2)
  .set("C++", 3)
  .set("macOS", 4)
  .set("WebRTC", 5)
  .set("通用问题", 6);
