import CustomCalendar from "./components/CustomCalendar.vue";

export default {
  install(Vue) {
    Vue.component(CustomCalendar.name, CustomCalendar);
  }
};

// Use automatically when global Vue instance detected
// if (typeof window !== "undefined" && window.Vue) {
//   window.Vue.use(CustomCalendar);
// }
