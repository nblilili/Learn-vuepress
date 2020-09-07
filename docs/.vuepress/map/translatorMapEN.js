
/**
 * 作用
 *   源文件夹为英文名称，使其在网页上显示应为中文。
 * 使用方式
 *   map 的 key 表示需要文件夹的英文名称
 *   map 的 value 表示在 sidebar 中显示的中文名称（或其他的自定义名称）
 */

module.exports = new Map()
  .set("02_download", "Download")
  .set("03_quick_start", "Quick Start")
  .set("04_basic_func", "Basic Functions")
  .set("05_adv_func", "Advanced Functions")
  .set("99_api_reference", "API Reference")
  .set("03_console_description","Console description")
  .set("04_TianSai_eagle_eyes", "TianSai eagle eyes")
  .set("05_download", "Download")
  .set("06_FAQ", "FAQ");