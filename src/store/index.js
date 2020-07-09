import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import Home from './home'

export default new Vuex.Store({
    modules:{
        Home
    }
  })