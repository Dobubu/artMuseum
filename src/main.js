// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 載入設計樣
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js'
import '@fortawesome/fontawesome/styles.css'

// 第三方套件模組
import $ from 'jquery'
import BootstrapVue from 'bootstrap-vue'

// vue相關套件
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(BootstrapVue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
