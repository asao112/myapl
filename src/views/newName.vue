<template>
<div class="Signup">  
  <h1 class="title4">{{username}}さんようこそ</h1>
  <div class="box b_3">
    <form>
      <ul>
        <li>
          <span>変更後のユーザー名</span><br>
          <input type="text" id="username" placeholder="変更するユーザー名を入力してください" v-model="username" />
          <img id="man1" src="https://cdn.iconscout.com/icon/premium/png-128-thumb/business-man-485486.png" aria-hidden="true">
        </li>
      </ul>
    </form>
    <router-link to="/mypage"><button class="type9">変更</button></router-link>
    <br />
    <router-link to="/mypage"><button class="type10">キャンセル</button></router-link>
  </div>
</div>
</template>