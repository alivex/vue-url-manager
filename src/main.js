import Vue from "vue";
import App from "./App.vue";
import store from "./store/index";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en"; // lang i18n

import BootstrapVue from "bootstrap-vue";
import "./styles/global.scss";
Vue.use(BootstrapVue);

// set ElementUI lang to EN
Vue.use(ElementUI, { locale });

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
