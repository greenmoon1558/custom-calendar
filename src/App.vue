<template>
  <div id="app">
    <custom-calendar v-model="weekdays" />
  </div>
</template>

<script>
import CustomCalendar from "./components/CustomCalendar.vue";

export default {
  name: "app",
  components: {
    CustomCalendar
  },
  data: () => {
    return {
      weekdays: {
        mo: [
          {
            bt: 240,
            et: 779
          }
        ],
        tu: [],
        we: [],
        th: [
          {
            bt: 240,
            et: 779
          },
          {
            bt: 1140,
            et: 1319
          }
        ],
        fr: [
          {
            bt: 660,
            et: 1019
          }
        ],
        sa: [
          {
            bt: 0,
            et: 1439
          }
        ],
        su: []
      }
    };
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
