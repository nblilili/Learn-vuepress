---
title: 00_LEARN_VUE
---
## 技术栈

- vue.js
- vue- router
- vuex
- bootstrap vue

```
⌨️ The Vue Instance
⌨️ Directives
⌨️ Methods
⌨️ Data-binding
⌨️ Events
⌨️ Filters
⌨️ Computed Properties
⌨️ Components
⌨️ Component Lifecycle


⌨️ Vue-cli
⌨️ Vue devtools
⌨️ Props & Slots
⌨️ Making API calls
⌨️ Vue-router
⌨️ Vuex
⌨️ Unit Testing
⌨️ Recommended Resources
```

步骤：

1. 新建项目

2. 导入 bootstrap-vue

   ```
   # main.js
   import Vue from 'vue'
   import BootstrapVue from 'bootstrap-vue'

   import 'bootstrap/dist/css/bootstrap.css'
   import 'bootstrap-vue/dist/bootstrap-vue.css'

   import App from './App.vue'

   Vue.config.productionTip = false
   Vue.use(BootstrapVue)

   new Vue({
     render: h => h(App),
   }).$mount('#app')

   ```

3. 创建 data
