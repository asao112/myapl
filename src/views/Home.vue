<template>
<div class="home">
  <h1 class="text">家計の味方</h1>
  <img id="ad9bb3d69451654bbb51c2c0eb3e29" src="https://illust.download/wp-content/uploads/download/yanwari16.png">
  <div class="box b_1">
    <h1 class="title">家計簿アプリ</h1>
    <p class="n___" v-for="sentence in sentences" :key="sentence">{{ sentence }}</p>
    <router-link to="/signup"><button class="button is-rounded type1">新規登録</button></router-link>
    <router-link to="/signin"><button class="button is-rounded type2">ログイン</button></router-link>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      sentences: [
        'このサービスは自分の収入や支出を',
        'シンプルに見やすく管理するための',
        '家計簿アプリです。'
      ],
    }
  }
}
</script>
<style scoped>
* {
  overflow: hidden;
}
</style>