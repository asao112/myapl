<template>
<div class="myLists">
  <div class="tab">
    <span></span>
    <input id="menu1" class="tab-input" name="menu" type="radio">
    <label for="menu1" class="tab-item"><router-link to="/myhome" id="Link">🏚HOME</router-link></label>
    <input id="menu2" class="tab-input" name="menu" type="radio">
    <label for="menu2" class="tab-item"><router-link to="/graph" id="Link">GRAPH</router-link></label>
    <input id="menu3" class="tab-input" name="menu" type="radio" checked="checked">
    <label for="menu3" class="tab-item"><router-link to="/list" id="Link">LIST</router-link></label>
    <input id="menu4" class="tab-input" name="menu" type="radio">
    <label for="menu4" class="tab-item"><router-link to="/mypage" id="Link">Mypage/Menu⚙︎</router-link></label>
  </div>
  <h1 class="h-title">近い年齢の方の貯金額一覧</h1>
  <ul class="listUser">
    <li id="L-1">
      <span id="L-name">{{icon}}{{username}}ssssssさん</span>
    </li>  
    <li id="L-2">
      <span id="nowMoney">現在の貯金額{{terget}}1000円</span>
    </li>
  </ul>
  <h1 class="list-title">ユーザー覧</h1>
  <div class="userName">
    <ul>
      <li class="userLists">
        <span id="set-1">{{icon}}{{username}}aaaさん{{age}}歳</span>
        <span id="set-2">{{totalMoney}}1000円</span>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      icon: '',
      username: '',
      age: '',
      terget: '',
      totalMoney: '',
      showContent: false,
    }
  },
};
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