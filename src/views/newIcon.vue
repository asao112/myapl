<template>
<div class="Icon">
  <h1 class="iconTitle">新しく変更するアイコンを選択してください</h1>
  <div class="icon-box">
    <label class="radio">
      <img id="panda" src="https://cdn.iconscout.com/icon/free/png-128/panda-1602246-1358167.png">
      <input type="radio" name="animal" value="パンダ">
    </label>
    <label class="radio">
      <img id="gorilla" src="https://cdn.iconscout.com/icon/free/png-128/gorilla-1602253-1358173.png">
      <input type="radio" name="animal" value="ゴリラ">
    </label>
    <label class="radio">
      <img id="elerhants" src="https://cdn.iconscout.com/icon/free/png-128/elepant-1602257-1358164.png">
      <input type="radio" name="animal" value="象">
    </label>
    <label class="radio">
      <img id="koala" src="https://cdn.iconscout.com/icon/free/png-128/koala-1602249-1358169.png">
      <input type="radio" name="animal" value="コアラ">
    </label>
    <label class="radio">
      <img id="cow" src="https://cdn.iconscout.com/icon/free/png-128/buffalo-1602262-1358181.png">
      <input type="radio" name="animal" value="牛">
    </label>
    <label class="radio">
      <img id="rhino" src="https://cdn.iconscout.com/icon/free/png-128/rhino-1602243-1358166.png">
      <input type="radio" name="animal" value="サイ">   
    </label>
    <label class="radio">
      <img id="tiger" src="https://cdn.iconscout.com/icon/free/png-128/tiger-1602241-1358160.png">
      <input type="radio" name="animal" value="虎">
    </label>
    <label class="radio">
      <img id="cat" src="https://cdn.iconscout.com/icon/free/png-128/cat-1602261-1358180.png">
      <input type="radio" name="animal" value="猫">
    </label>
    <label class="radio">
      <img id="dog" src="https://cdn.iconscout.com/icon/free/png-128/dog-1602258-1358177.png ">
      <input type="radio" name="animal" value="犬">
    </label>
  </div>
  <router-link to="/mypage"><button class="button is-info is-outlined type7">変更</button></router-link>
  <router-link to="/mypage"><button class="type8">キャンセル</button></router-link>
</div>
</template>