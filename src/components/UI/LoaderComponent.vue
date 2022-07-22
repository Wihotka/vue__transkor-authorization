<template>
  <div class="loader"></div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';
.loader {
  position: absolute;
  top: calc(50% - 32px);
  left: calc(50% - 32px);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 3px solid $orange;
  border-top: 3px solid $greyLight;
  animation: rotate 1s infinite alternate linear;
}

@keyframes rotate {
  from {
    transform: rotate(0deg) scale(1);
  }
  to {
    transform: rotate(360deg) scale(1.4);
  }
}
</style>
