import Vue from 'vue'
import LoadScript from 'vue-plugin-load-script';
import App from './App.vue'
import vuetify from './plugins/vuetify';
Vue.use(LoadScript);
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')



