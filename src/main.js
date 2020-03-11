import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import '@/assets/css/style.css'
import vGallery from 'v-gallery'
import axios from 'axios'
import VueAxios from 'vue-axios'


//require('@/assets/style.css')

Vue.use(VueAxios, axios)
Vue.use(vGallery)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
