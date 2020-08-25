
/**
 * 作用
 *   源文件夹为英文名称，使其在网页上显示应为中文。
 * 使用方式
 *   map 的 key 表示需要文件夹的英文名称
 *   map 的 value 表示在 sidebar 中显示的中文名称（或其他的自定义名称）
 */

module.exports = new Map()
  .set("02_download", "下载")
  .set("03_quick_start", "快速开始")
  .set("04_basic_func", "基本功能集成")
  .set("05_adv_func", "进阶功能集成")
  .set("99_api_reference", "API 参考")
  .set("03_console_description","控制台说明")
  .set("04_TianSai_eagle_eyes", "天塞鹰眼")
  .set("05_download", "下载")
  .set("06_FAQ", "FAQ");