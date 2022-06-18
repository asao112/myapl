<template>
  <div class="calendarPage">
    <h2>{{ displayDate }}</h2>
    <button class="backMonth button" @click="prevMonth">◀︎ 前の月</button>
    <button class="nextMonth button" @click="nextMonth">次の月 ▶︎</button>
    <div class="calendar">
      <div class="calendar-weekly">
        <div class="dayOfweek" v-for="n in 7" :key="n">
          {{ dayOfweek(n-1) }}
        </div>
      </div>
      <div class="calendar-weekly" v-for="(week, index) in calendars" :key="index">
      </div>
      <div class="week" v-for="(week, index) in calendars" :key="index">
        <div class="day" v-for="(day, index) in week" :key="index">
          {{ day.date }}
        </div>
      </div>
      <div class="custom-field">
        <textarea name="お名前" value="" required="required" class="memo" v-model="text"></textarea>
        <span class="placeholder">MEMO</span>
        <button @click="clear">クリア</button>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";

export default {
  data() {
    return {
      currentDate: moment(),
      text: ''
    };
  },
  methods: {
    clear() {
      this.text = ''
    },
    dayOfweek(dayIndex){
      const week = ["日", "月", "火", "水", "木", "金", "土"];
      return week[dayIndex];
    },
    getStartDate() {
      let date = moment(this.currentDate);
      date.startOf("month");
      const youbiNum = date.day();
      return date.subtract(youbiNum, "days");
    },
    getEndDate() {
      let date = moment(this.currentDate);
      date.endOf("month");
      const youbiNum = date.day();
      return date.add(6 - youbiNum, "days");
    },
     getCalendar() {
    let startDate = this.getStartDate();
    const endDate = this.getEndDate();
    const weekNumber = Math.ceil(endDate.diff(startDate, "days") / 7);

    let calendars = [];
    for (let week = 0; week < weekNumber; week++) {
      let weekRow = [];
      for (let day = 0;  day < 7; day++) {
        weekRow.push({
          date: startDate.get("date"),
        });
        startDate.add(1, "days");
      }
      calendars.push(weekRow);
    }
    return calendars;
    },
    nextMonth() {
      this.currentDate = moment(this.currentDate).add(1, "month");
    },
    prevMonth() {
      this.currentDate = moment(this.currentDate).subtract(1, "month");
    },
  },
  computed: {
    calendars() {
      return this.getCalendar();
    },
    displayDate(){
    return this.currentDate.format('YYYY/M/D')
    },
    currentMonth(){
      return this.currentDate.format('YYYY-MM')
    },
  },
}
</script>