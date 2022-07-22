<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
import AuthLayout from '@/layouts/AuthLayout'
import MainLayout from '@/layouts/MainLayout'

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'auth') + '-layout'
    }
  },
  components: {
    AuthLayout,
    MainLayout,
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/colors.scss';

@font-face {
  font-family: 'Myriad Pro';
    src:
    local('Myriad Pro'),
    url('@/assets/fonts/MyriadPro-Regular.woff2') format('woff2'),
    url('@/assets/fonts/MyriadPro-Regular.woff') format('woff');
  font-display: swap;
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Myriad Pro';
    src:
    local('Myriad Pro'),
    url('@/assets/fonts/MyriadPro-Bold.woff2') format('woff2'),
    url('@/assets/fonts/MyriadPro-Bold.woff') format('woff');
  font-display: swap;
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Myriad Pro';
    src:
    local('Myriad Pro'),
    url('@/assets/fonts/MyriadPro-LightIt.woff2') format('woff2'),
    url('@/assets/fonts/MyriadPro-LightIt.woff') format('woff');
  font-display: swap;
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Oswald';
    src:
    local('Oswald'),
    url('@/assets/fonts/oswald-v48-latin_cyrillic-regular.woff2') format('woff2'),
    url('@/assets/fonts/oswald-v48-latin_cyrillic-regular.woff') format('woff');
  font-display: swap;
  font-weight: normal;
  font-style: normal;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: $black;
  font-family: 'Myriad Pro', sans-serif;
  font-size: 16px;
  line-height: 1;
}
</style>
