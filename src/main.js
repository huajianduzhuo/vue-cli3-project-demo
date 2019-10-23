import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import TipFormItem from './plugins/TipFormItem'
import './registerServiceWorker'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(TipFormItem)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
