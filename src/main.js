import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import GAuth from "vue-google-oauth2";
const gauthOption = {
  clientId:
    "301011597401-j4gu1rgmkgm92lv7djr3v2o0vem522as.apps.googleusercontent.com",
  scope: "profile email",
  prompt: "select_account",
};
Vue.use(GAuth, gauthOption);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
