import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueSocialSharing from 'vue-social-sharing'
import titleMixin from './mixins/titleMixin'



Vue.config.productionTip = false
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// For Vue social buttons
Vue.use(VueSocialSharing)


Vue.mixin(titleMixin)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')