<template>
<div class="Signup">  
  <h1 class="title2">SIGN UP</h1>
  <div class="box b_2">
    <form>
      <ul>
        <li id="name"><label for="username">ユーザー名</label></li>
        <li class="user-name">
          <input type="text" id="username" placeholder="UserName" v-model="username" />
          <img id="man1" src="https://cdn.iconscout.com/icon/premium/png-128-thumb/business-man-485486.png" aria-hidden="true">
        </li>
        <li id="e_1"><label for="email">メールアドレス</label></li>
        <li class="email">
          <input type="email" id="email" placeholder="Email" v-model="email" />
          <img id="mail1" src="https://cdn.iconscout.com/icon/premium/png-128-thumb/mail-30-87230.png" aria-hidden="true">
        </li>
        <li id="p_1"><label for="password">パスワード</label></li>
        <li class="password">
          <input type="password" id="password" placeholder="PassWord" v-model="password" />
          <img id="pas1" src="https://cdn.iconscout.com/icon/premium/png-128-thumb/password-protection-3-485535.png" aria-hidden="true">
        </li>
      </ul>
    </form>
    <router-link to="/question"><button class="type3">新規登録</button></router-link>
    <br />
    <router-link to="/signin"><button class="type4">ログインはこちらから</button></router-link>
  </div>
</div>
</template>
<script>
export default {
  name: 'Register',
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
};
</script>