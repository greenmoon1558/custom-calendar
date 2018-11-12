<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <custom-calendar/>
  </div>
</template>

<script>
import CustomCalendar from "./components/CustomCalendar.vue";

export default {
  name: "app",
  components: {
    CustomCalendar
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
