<template class="day">
    <tr class="day-row" :class="{active: this.dayTimestamp.length>0}">
        <td colspan="2" class="day-title">{{title}}</td>
        <td colspan="2" class="day-allday"  @click="selectAllDay" :class="{ active: this.allDayActive }">
          <div class="checkbox-circle">
            <div class="checkbox-checkmark"></div>
          </div>
        </td>
        <td v-for="(t,index) in timestamp" :key="index" class="timestamp"  
          @mousedown="mousedown(index)" @mouseup="mouseup" 
          @mouseenter="mouseenter(index)" :class="{ active: t.isActive }">
        </td>
    </tr>
</template>

<script>
export default {
  props: ["title", "dayTimestamp", "changeDay"],
  data: () => {
    return {
      isMouseDown: false,
      timestamp: [],
      allDayActive: false
    };
  },
  created: function() {
    this.timestamp = this.updateTimestamp();
    this.allDayActive = this.updateallDayActive();
  },
  watch: {
    dayTimestamp() {
      this.timestamp = this.updateTimestamp();
      this.allDayActive = this.updateallDayActive();
    }
  },
  methods: {
    updateallDayActive(){
      return this.dayTimestamp.length &&
        this.dayTimestamp[0].et ===
        this.timestamp[this.timestamp.length - 1].et &&
        this.dayTimestamp[0].bt === this.timestamp[0].bt
    },
    mousedown(index) {
      this.isMouseDown = true;
      this.timestamp[index].isActive = !this.timestamp[index].isActive;
    },
    mouseup() {
      this.isMouseDown = false;
      this.$emit("changeDay", this.timestamp, this.title);
    },
    mouseenter(index) {
      if (this.isMouseDown) {
        this.timestamp[index].isActive = true;
      }
    },
    updateTimestamp() {
      let index = 0;
      return Array(24)
        .fill()
        .reduce((result, item, ind) => {
          let startTime = ind * 60;
          let endTime = startTime + 59;
          let isActive = Boolean(
            this.dayTimestamp[index] &&
              this.dayTimestamp[index].bt <= startTime &&
              this.dayTimestamp[index].et >= endTime
          );
          isActive && this.dayTimestamp[index].et <= endTime ? index++ : false;
          result.push({
            bt: startTime,
            et: endTime,
            isActive: isActive
          });
          return result;
        }, []);
    },
    selectAllDay() {
      this.allDayActive ? this.timestamp.forEach(element => {
            element.isActive = false;
          })
        : this.timestamp.forEach(element => {
            element.isActive = true;
          });

      this.$emit("changeDay", this.timestamp, this.title);
    }
  }
};
</script>

<style lang="sass">
  @import '../styles/vars.sass'
  @import '../styles/day.sass'
</style>
