<template>
<div class="Signin">  
  <h1 class="title2">SIGN IN</h1>
  <div class="box b_2">
    <form>
      <ul>
        <li id="e_1"><label for="email">メールアドレス</label></li>
        <li class="email">
          <input type="email" id="email" placeholder="E-mail" v-model="email" />
          <img id="mail2" src="https://cdn.iconscout.com/icon/premium/png-128-thumb/mail-30-87230.png" aria-hidden="true">
        </li>
        <li id="p_1"><label for="password">パスワード</label></li>
        <li class="password">
          <input type="password" id="password" placeholder="PassWord" v-model="password" />
          <img id="pas2" src="https://cdn.iconscout.com/icon/premium/png-128-thumb/password-protection-3-485535.png" aria-hidden="true">
        </li>
      </ul>
    </form>
    <button class="type3" @click="newRegister">ログイン</button>
    <br />
    <button class="snsLogin1" @click="snsLogin1">ログイン</button>
    <img id="snsicon1" src="https://cdn.iconscout.com/icon/premium/png-128-thumb/twitter-logo-5014440-4218029.png">
    <button class="snsLogin2" @click="snsLogin2">ログイン</button>
    <img id="snsicon2" src="https://cdn.iconscout.com/icon/premium/png-128-thumb/google-logo-5014418-4218007.png">
    <router-link to="/signup"><button class="type5">新規登録はこちら</button></router-link>
  </div>
</div>
</template>