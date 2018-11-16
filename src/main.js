import Vue from "vue";
import App from "./App.vue";
import CustomCalendar from "./plugin.js";

Vue.config.productionTip = false;

Vue.use(CustomCalendar);

new Vue({
  render: h => h(App)
}).$mount("#app");
