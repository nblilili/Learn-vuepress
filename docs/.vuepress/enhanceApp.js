import Vue from 'vue'
import {Message} from 'bootstrap-vue'
// import {Pagination} from 'element-ui';


import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import InstantSearch from "vue-instantsearch";

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
  Vue.use(Element)
  // Vue.use(InstantSearch);
  router.beforeEach((to, from, next) => {
    // @pdai: 对每个页面点击添加百度统计
    // if (typeof _hmt != 'undefined' && to.path) _hmt.push(['_trackPageview', to.fullPath]);

    if (from.path == "/") {
      if (typeof _hmt != 'undefined' && to.path) _hmt.push(['_trackPageview', to.fullPath]);
      next()
    }
    else if ((to.path).substring(0, to.path.lastIndexOf("/") + 1) == (from.path).substring(0, from.path.lastIndexOf("/") + 1)) {
      if (typeof _hmt != 'undefined' && to.path) _hmt.push(['_trackPageview', to.fullPath]);
      next()
    } else {
      var TagsConfig = {};
      var url = to.path
      var array = [];
      if (url.indexOf("/cn/") > -1) TagsConfig = siteData.themeConfig.locales["/cn/"].tagConfig;
      else if (url.indexOf("/en/" > -1)) TagsConfig = siteData.themeConfig.locales["/en/"].tagConfig;

      for (let i in TagsConfig) {
        if (url.indexOf(i) > -1) {
          TagsConfig[i].forEach((e) => {
            let name = e;
            if (name == "C++") name = "Windows C++";
            else if (name == "Windows") name = "Windows C#";
            array.push({
              name: name,
              active: decodeURI(url).indexOf(e) > -1 ? true : false,
              href: e + ".html",
            });
          });
        }
      }
      let check = false // 用来判断需不需要制定next()
      array.forEach((e) => { if (e.href == localStorage.platform) check = true });
      if (check) {
        if ((to.path).indexOf(localStorage.platform) > -1) {
          if (typeof _hmt != 'undefined' && to.path) _hmt.push(['_trackPageview', to.fullPath]);

          next();
        } else if ((to.path).substring(to.path.lastIndexOf("/") + 1) == 'iOS.html') {
          if (localStorage.platform) {
            if (
              localStorage.platform == 'iOS.html' ||
              localStorage.platform == 'Android.html' ||
              localStorage.platform == 'Windows.html' ||
              localStorage.platform == 'C++.html' ||
              localStorage.platform == 'macOS.html'
            ) {
              if ((to.path).indexOf('FAQ') > -1) {
                if (typeof _hmt != 'undefined' && to.path) _hmt.push(['_trackPageview', to.fullPath]);
                next()
              } else {
                if (typeof _hmt != 'undefined' && to.path) _hmt.push(['_trackPageview', (to.path).substring(0, to.path.lastIndexOf("/") + 1) + localStorage.platform]);
                next({
                  path: (to.path).substring(0, to.path.lastIndexOf("/") + 1) + localStorage.platform,
                });
              }
            } else {
              if (typeof _hmt != 'undefined' && to.path) _hmt.push(['_trackPageview', to.fullPath]);
              next();
            }

          } else {
            if (typeof _hmt != 'undefined' && to.path) _hmt.push(['_trackPageview', to.fullPath]);
            next()
          }
        } else {
          if (typeof _hmt != 'undefined' && to.path) _hmt.push(['_trackPageview', to.fullPath]);
          next();
        }
      } else {
        if (typeof _hmt != 'undefined' && to.path) _hmt.push(['_trackPageview', to.fullPath]);
        next()
      }
    }

    // console.log(check, localStorage.platform)
    // if (check) {
    //   if ((to.path).indexOf(localStorage.platform) > -1) {
    //     console.log(1)
    //     next();
    //   } else if ((to.path).substring(to.path.lastIndexOf("/") + 1) == 'iOS.html') {
    //     console.log(2)

    //     if (localStorage.platform) {
    //       console.log(to.path)
    //       console.log(to.path.lastIndexOf("/"))
    //       // if(pla2.includes(thispla))
    //       if (
    //         localStorage.platform == 'iOS.html' ||
    //         localStorage.platform == 'Android.html' ||
    //         localStorage.platform == 'Windows.html' ||
    //         localStorage.platform == 'C++.html' ||
    //         localStorage.platform == 'macOS.html'
    //       ) {
    //         if ((to.path).indexOf('FAQ') > -1) {
    //           next()
    //         } else {
    //           next({
    //             path: (to.path).substring(0, to.path.lastIndexOf("/") + 1) + localStorage.platform, // 未登录则跳转至login页面
    //           });
    //         }
    //       } else {
    //         next();
    //       }

    //       // if (
    //       //   from.path.indexOf('iOS.html') > -1 ||
    //       //   from.path.indexOf('Android.html') > -1 ||
    //       //   from.path.indexOf('Windows.html') > -1 ||
    //       //   from.path.indexOf('C++.html') > -1 ||
    //       //   from.path.indexOf('macOS.html') > -1 ||
    //       //   from.path.indexOf('通用问题.html') > -1 ||
    //       //   from.path.indexOf('WebRTC.html') > -1
    //       // ) {
    //       //   next();
    //       // } 

    //     } else {
    //       next()
    //     }
    //   } else {
    //     console.log(3)
    //     next();
    //   }
    // } else {
    //   next()
    // }
    // console.log(to.path)
    // let pla = ['iOS.html', 'Android.html', 'Windows.html', 'C++.html', 'macOS.html', '通用问题.html', 'WebRTC.html'];
    // let pla2 = ['iOS.html', 'Android.html', 'Windows.html', 'C++.html', 'macOS.html'];
    // let thispla = (to.path).substring(to.path.lastIndexOf("/") + 1)

    // console.log(pla.includes(thispla))
    // console.log((to.path).substring(0, to.path.lastIndexOf("/") + 1))
    // if((to.path).indexOf('iOS')>-1){
    //   next();
    // }else
    // if ((to.path).indexOf(localStorage.platform) > -1) {
    //   console.log(1)
    //   next();
    // } else if ((to.path).substring(to.path.lastIndexOf("/") + 1) == 'iOS.html') {
    //   console.log(2)

    //   if (localStorage.platform) {
    //     console.log(to.path)
    //     console.log(to.path.lastIndexOf("/"))
    //     // if(pla2.includes(thispla))
    //     if (
    //       localStorage.platform == 'iOS.html' ||
    //       localStorage.platform == 'Android.html' ||
    //       localStorage.platform == 'Windows.html' ||
    //       localStorage.platform == 'C++.html' ||
    //       localStorage.platform == 'macOS.html'
    //     ) {
    //       if ((to.path).indexOf('FAQ') > -1) {
    //         next()
    //       } else {
    //         next({
    //           path: (to.path).substring(0, to.path.lastIndexOf("/") + 1) + localStorage.platform, // 未登录则跳转至login页面
    //         });
    //       }
    //     } else {
    //       next();
    //     }

    //     // if (
    //     //   from.path.indexOf('iOS.html') > -1 ||
    //     //   from.path.indexOf('Android.html') > -1 ||
    //     //   from.path.indexOf('Windows.html') > -1 ||
    //     //   from.path.indexOf('C++.html') > -1 ||
    //     //   from.path.indexOf('macOS.html') > -1 ||
    //     //   from.path.indexOf('通用问题.html') > -1 ||
    //     //   from.path.indexOf('WebRTC.html') > -1
    //     // ) {
    //     //   next();
    //     // } 

    //   } else {
    //     next()
    //   }
    // } else {
    //   console.log(3)
    //   next();
    // }
    // next();
  })
}