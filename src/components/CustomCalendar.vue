<template>
  <div class="custom-calendar-container">
    <table id="custom-calendar">
      <caption class="calendar-main-title">Set schedule</caption>
      <thead class="calendar-header">
        <tr class="calendar-header-row">
          <th colspan="2" class="calendar-header-cell--empty"></th>
          <th colspan="2" class="calendar-header-cell--all-day">all day</th>
          <th colspan="3" class="calendar-header-cell--time"
              v-for="timestamp in timestamps" 
              :key="timestamp">
              <span class="cell-time-span">{{ timestamp }}</span>
          </th>
        </tr>
      </thead>
      <tbody class="calendar-body" v-for="(day, dayTitle) in weekdays" :key="dayTitle" >
        <tr is="day" 
        class="calendar-day"
        :title="dayTitle" 
        :day-timestamp="day"
        @changeDay="changeDay"></tr>
      </tbody>
    </table>
    <div class="calendar-buttons">
      <button type="button" class="clear-btn" @click="clearDay">Clear</button> 
      <button type="button" class="save-btn" @click="saveDay">Save Changes</button> 
    </div>
  </div>
</template>

<script>
import Day from "./Day.vue";
export default {
  name: "custom-calendar",
  components: {
    Day
  },
  props: ["value"],
  watch: {
    value: function() {}
  },
  data: () => {
    return {
      // timestamps for table header
      weekdays: {},
      timestamps: Array(8)
        .fill()
        .map((item, index) => {
          let time = index * 3;
          return time < 10 ? `0${time}:00` : `${time}:00`;
        })
    };
  },
  created() {
    this.weekdays = this.value ? this.value : this.setEmptyWeekdays();
  },
  methods: {
    changeDay(timestamp, key) {
      let dayArr = [];
      let index = 0;
      timestamp.forEach(element => {
        if (element.isActive) {
          if (!dayArr[index]) dayArr[index] = {};

          dayArr[index].et
            ? dayArr[index].et + 1 === element.bt
              ? (dayArr[index].et = element.et)
              : (index++, (dayArr[index] = { et: element.et, bt: element.bt }))
            : (dayArr[index] = { et: element.et, bt: element.bt });
        }
      });
      this.weekdays[key] = dayArr;
    },
    clearDay() {
      this.weekdays = Object.assign({}, this.setEmptyWeekdays());
    },
    saveDay() {
      console.log(JSON.stringify(this.weekdays));
    },
    setEmptyWeekdays() {
      return ["mo", "tu", "we", "th", "fr", "sa", "su"].reduce((obj, item) => {
        obj[item] = [];
        return obj;
      }, {});
    }
  }
};
</script>

<style lang="sass">
  @import '../styles/vars.sass'
  @import '../styles/calendar.sass'
</style>
