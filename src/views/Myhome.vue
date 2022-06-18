<template>
<div class="myhome">
  <div class="tab">
    <span></span>
    <input id="menu1" class="tab-input" name="menu" type="radio" checked="checked">
    <label for="menu1" class="tab-item"><router-link to="/myhome" id="Link">🏚HOME</router-link></label>
    <input id="menu2" class="tab-input" name="menu" type="radio">
    <label for="menu2" class="tab-item"><router-link to="/graph" id="Link">GRAPH</router-link></label>
    <input id="menu3" class="tab-input" name="menu" type="radio">
    <label for="menu3" class="tab-item"><router-link to="/list" id="Link">LIST</router-link></label>
    <input id="menu4" class="tab-input" name="menu" type="radio">
    <label for="menu4" class="tab-item"><router-link to="//mypage" id="Link">Mypage/Menu⚙︎</router-link></label>
  </div>
  <Calendar/>
  <div class="title3">
    <ul>
      <li class="total_S">
        <span>今月の支出総額 {{total_S}}10000円</span>
      </li>
      <li class="total_I"> 
        <span>今月の収入総額 {{total_I}}1000000円</span>
      </li>
    </ul>
    <h1>今月の支出内容と支出日</h1>
    <ul class="type9">
      <li class='thisMonth_S'>
        <span>{{category}}自動車</span>
        <span>{{day}}2022/04/23</span>
      </li>
    </ul>
      <h1>今月の収入内容と収入日</h1>
    <ul class="type9">
      <li class="thisMonth_I">
        <span>{{category}}給料</span>
        <span>{{day}}2022/04/23</span>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
import Calendar from '../components/Calendar.vue';

export default {
  name: 'App',
  components: {
    Calendar
  },
  data() {
    return {
      total_S: '',
      total_I: '',
      category: '',
      day: '',
      showContent: false,
    }
  },
}
</script>
<style>
#Link {
  color: rgb(255, 255, 255);
}
input[type="radio"] {
  display: none;
}
.tab {
  width: 100%;
  max-width: 100%;
  margin: auto;
  display: flex;
  flex-flow: wrap;
  background-color: rgb(255, 145, 0);
}
.tab-item {
  display: block;
  width: calc(100% / 4);
  text-align: center;
  padding: 10px 0;
  cursor: pointer;
}
.tab-input:checked + .tab-item {
  border-bottom: 3px solid rgb(255, 255, 255);
}
</style>


