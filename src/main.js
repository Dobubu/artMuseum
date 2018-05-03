// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 載入設計
import './assets/reset.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js'
import '@fortawesome/fontawesome/styles.css'
import './assets/all.css'

//第三方
import $ from 'jquery'
import * as VueGoogleMaps from "vue2-google-maps"
// import all from '@/func/all.js'

// vue相關套件
import Vue from 'vue'
import App from '@/App'
import router from '@/func/router.js'
import store from '@/func/store.js'
import uploadAPI from '@/func/uploadAPI.js'

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyD_q0248Ol93QRoXvbC9ccDc-Y9lVutbr0",
    // libraries: "places" // necessary for places input
  }
});

// window.jQuery = window.$ = $

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
