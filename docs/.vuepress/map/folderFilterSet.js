/**
 * 作用
 *   隐藏不想显示在 sidebar 中的文件夹
 * 使用方式
 *   添加文件夹名称即可。这样做文件夹中的子元素会被加给上级。
 */

module.exports = new Set()
  .add("00_download")
  .add("00_run_demo")
  .add("01_integ_sdk")
  .add("00_dev_environment")
  .add("01_login")
  .add("02_achieve")
  .add("02_download")
  .add("00_call_management")
  .add("01_audio_management")
  .add("02_video_management")
  .add("03_intelligent_hardware")
  .add("05_channel_management")
  .add("99_api_reference")
  .add("06_FAQ")
  .add("00_sdk_download");