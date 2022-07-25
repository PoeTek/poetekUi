import Vue from 'vue'
import App from './App.vue'
// 导入组件库
import CjnUl from '../packages'

Vue.config.productionTip = false

Vue.use(CjnUl)

new Vue({
  render: h => h(App)
}).$mount('#app')
