<template>
<div class="mypage">
  <div class="tab">
    <span></span>
    <input id="menu1" class="tab-input" name="menu" type="radio">
    <label for="menu1" class="tab-item"><router-link to="/myhome" id="Link">🏚HOME</router-link></label>
    <input id="menu2" class="tab-input" name="menu" type="radio">
    <label for="menu2" class="tab-item"><router-link to="/graph" id="Link">GRAPH</router-link></label>
    <input id="menu3" class="tab-input" name="menu" type="radio">
    <label for="menu3" class="tab-item"><router-link to="/list" id="Link">LIST</router-link></label>
    <input id="menu4" class="tab-input" name="menu" type="radio" checked="checked">
    <label for="menu4" class="tab-item"><router-link to="/mypage" id="Link">Mypage/Menu⚙︎</router-link></label>
  </div>
  <ul class="signinUser">
    <li id="sub-1">
      <span id="signinName">{{icon}}{{username}}さん</span>
      <span id="age"><br>現在の年齢{{myAge}}歳</span>
    </li>  
    <li id="sub-2">
      <span id="terget1">目標貯金額まで</span>
      <span id="terget2" ><br>あと1000{{terget}}円</span>
    </li>
  </ul>
  <div class="editMenu">
    <h1 class="menu">ユーザ情報の編集</h1>
    <ul>
      <li>
        <img id="icons" src="https://cdn.iconscout.com/icon/free/png-64/select-rating-2348617-1954500.png">
        <router-link to="newicon" class="r_1"><button type="button" class="changeIcon">アイコンを変更する</button></router-link>
      </li>
      <li>
        <img id="icons" src="https://cdn.iconscout.com/icon/premium/png-64-thumb/name-85623.png">
        <router-link to="newname" class="r_1"><button type="button" class="changeName">ユーザー名を変更する</button></router-link>
      </li>
      <li>
        <img id="icons" src="https://cdn.iconscout.com/icon/premium/png-128-thumb/age-337827.png">
        <router-link to="changeage" class="r_1"><button type="button" class="changeAge">年齢を変更する</button></router-link>
      </li>
      <li>
        <img id="icons" src="https://cdn.iconscout.com/icon/free/png-128/delete-1912233-1617702.png">
        <button type="button" class="accountDlete" @click="openModel">アカウントを削除する</button>
      </li>
    </ul>
  </div>
  <h1 class="listTitle">現在のカテゴリ一覧</h1>
  <div class="listCategory">
    <ul>
      <h1 class="income-L">収入</h1>
      <li class="incomeLists">
        <form>
          <span class="scloll">aaa0000000000{{incomelist}}</span>
          <button type="button" class="delete-c1">削除</button>
          <router-link to="changecategory" class="change"><button type="button" class="change-c1">カテゴリ名変更する</button></router-link>
        </form>
      </li>
      <h1 class="spending-L">支出</h1>
      <li class="spendingLists">
        <form>
          <span class="scloll">bbb000000{{spendinglist}}</span>
          <button type="button" class="delete-c2">削除</button>
          <router-link to="changecategory" class="change2"><button type="button" class="change-c2">カテゴリ名変更する</button></router-link>
        </form>
      </li>
    </ul>
  </div>
  <transition>
    <Model :val="dateItem" v-show="showContent" @click="closeModal" @open="showContent = true" @close="showContent = false"></Model>
  </transition>
</div>
</template>
<script>
import Model from '../components/Model.vue'
export default {
  name: 'Mypage',
  components: {
    Model,
  },
  data() {
    return {
      icon: '',
      username: '',
      myAge: '',
      terget: '',
      incomelist: '',
      spendinglist: '',
      dateItem: '',
      showContent: false,
    }
  },
  methods: {
    openModel() {
      this.showContent = true
    },    
    closeModal() {
      this.showContent = false
    },
  }
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