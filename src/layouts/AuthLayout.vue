<template>
  <div class="auth">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit('CLEAR_DATA');
  }
}
</script>

<style lang="scss" scoped>
.auth {
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/img/pipe-orange.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
