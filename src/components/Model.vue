<template>
  <div id="overlay" v-show="showContent">
    <div id="content">
      <h1>アカウントを削除するとデータも消えてしまいますが本当削除しますか？</h1>
      <p>
        <router-link to="/" class="yes"><button>はい</button></router-link>
        <button @click="closeModal" class="no">いいえ</button>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Model',
  data() {
    return {
      showContent: false,
    };
  },
  methods: {
    openModal() {
      this.$emit("open", this.showContent);
    },
    closeModal() {
      this.$emit("close", this.showContent);
    },
  },
};
</script>