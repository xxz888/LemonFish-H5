import Vue from "vue";
import "@/assets/style/index.less";
// import "vant/lib/index.css";
import App from "./App.vue";
import router from "./router/index";
// import "@/assets/style/font/iconfont.css";
import $axios from "@/utils/request";
import mixin from "./mixin/index";
import $store from "./store/index";
import "@/components/Vant";
// rem
import "amfe-flexible";
import touch from 'vue-directive-touch';
//main.js中引入：
import vueEsign from 'vue-esign'
import VueCookies from 'vue-cookies';
Vue.use(VueCookies)






//react最外层index.js里
import 'babel-polyfill';
import Es6Promise from 'es6-promise';
Es6Promise.polyfill();









Vue.use(vueEsign)


// 把变量挂载到vue的原型上
Vue.prototype.$axios = $axios;
// 把变量挂载到vue的原型上
Vue.prototype.$store = $store;
// Vue.mixin(mixin);
Vue.prototype.mixin = mixin;
Vue.config.productionTip = false;
Vue.use(touch);




new Vue({
  $store,
  router,
  render: h => h(App)
}).$mount("#app");
