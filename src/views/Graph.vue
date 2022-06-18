<template>
<div class="mypage" >
  <div class="tab">
    <span></span>
    <input id="menu1" class="tab-input" name="menu" type="radio">
    <label for="menu1" class="tab-item"><router-link to="/myhome" id="Link">🏚HOME</router-link></label>
    <input id="menu2" class="tab-input" name="menu" type="radio" checked="checked">
    <label for="menu2" class="tab-item"><router-link to="/graph" id="Link">GRAPH</router-link></label>
    <input id="menu3" class="tab-input" name="menu" type="radio">
    <label for="menu3" class="tab-item"><router-link to="/list" id="Link">LIST</router-link></label>
    <input id="menu4" class="tab-input" name="menu" type="radio">
    <label for="menu4" class="tab-item"><router-link to="/mypage" id="Link">Mypage/Menu⚙︎</router-link></label>
  </div>
  <div class="Spending_G">
    <h1 id="spending" >支出</h1>
    <span id="spending1">支出</span>
    <router-link to="/graph2"><button type="button" class="incom-SW">収入</button></router-link>
    <ul>
      <li class="category">
        <span id="category_1">食費{{spendingCategory}}</span>
        <span>{{money_spending}}10000円</span>
      </li>
      <li class="category">
        <span id="category_1">自動車{{spendingCategory}}</span>
        <span>{{money_spending}}10000円</span>
      </li>
      <li class="category">
        <span id="category_1">日用品{{spendingCategory}}</span>
        <span>{{money_spending}}10000円</span>
      </li>
      <li class="category">
        <span id="category_1">~~{{spendingCategory}}</span>
        <span>{{money_spending}}0円</span>
      </li>
    </ul>
    <div class="total_S">
      <ul>
        <li class="moneyTotal">
          <span id="content1">合計</span>
          <span>{{total_S}}300000円</span>
        </li>
        <li>
          <router-link to="/mypage"><button type="button" class="button is-danger is-outlined edit">編集/削除</button></router-link>
        </li>
        <li>
          <router-link to="/spendingadd"><button type="button" class="button is-info is-outlined add">追加</button></router-link>
        </li>
      </ul>
    </div>
  </div>
  <Chart class="glaph"></Chart>
</div>
</template>
<script>
import Chart from '../components/Chart.vue'
export default {
  components:{
    Chart
  },
  data() {
    return {
      total_S: '',
      money_spending: '',
      spendingCategory: '',
      showContent: false,
    }
  },
}
</script>
<style>
.glaph {
  transform: scale(1.5);
  position: absolute;
  right: 810px;
  top: 280px;
}
.mypage {
  position: relative;
}
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