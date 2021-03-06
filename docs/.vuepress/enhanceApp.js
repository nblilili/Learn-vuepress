import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
// import {Pagination} from 'element-ui';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import InstantSearch from "vue-instantsearch";

import store from './store'

Vue.prototype.$EventBus = new Vue()
// // Install BootstrapVue
// // Vue.use(BootstrapVue)
// Vue.use(Pagination);

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer, // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  // ...做一些其他的应用级别的优化
  Vue.mixin({ store })
  Vue.use(InstantSearch);
}
