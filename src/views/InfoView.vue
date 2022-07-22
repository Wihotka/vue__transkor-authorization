<template>
  <div class="info">
    <h2 class="info__heading">Hello {{ name }}!</h2>
    <p>Your Email: <span class="info__email">{{ email }}</span></p>
  </div>
</template>

<script>
export default {
  name: "InfoView",
  computed: {
    email() {
      return this.$store.state.email;
    },
    name() {
      return this.$store.state.name;
    },
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';
.info {
  padding: 32px 16px 16px;
  text-align: center;

  &__heading {
    margin-bottom: 16px;
  }

  &__email {
    color: $orange;
  }
}
</style>
