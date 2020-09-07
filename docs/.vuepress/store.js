import Vue from "vue";
import Vuex from "vuex";
import Cookies from 'js-cookie'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    silderShow:"",
    silder:Cookies.set("silder")
  },
  mutations: {

  },
  actions: {

  },
  getters: {

  }
});