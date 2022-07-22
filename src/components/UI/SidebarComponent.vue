<template>
  <ul class="menu">
    <li class="menu__item"><a href="https://www.transkorworld.com/" target="_blank" rel="noopener noreferrer" class="menu__logo">
      <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" width="100%" height="62.100%" viewBox="0 0 323.45 62.55">
        <defs id="defs34">
          <radialGradient id="radial-gradient" cx="32.71" cy="27.56" r="16.9" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#c63e1b" id="stop25"/>
            <stop offset=".27" stop-color="#d1521f" id="stop27"/>
            <stop offset=".81" stop-color="#ed862a" id="stop29"/>
            <stop offset="1" stop-color="#f8992e" id="stop31"/>
          </radialGradient>
          <linearGradient id="linear-gradient" x1="36.59" y1="9.71" x2="55.12" y2="28.24" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#f8992e" id="stop4"/>
            <stop offset=".08" stop-color="#f3912c" id="stop6"/>
            <stop offset=".2" stop-color="#e77a28" id="stop8"/>
            <stop offset=".34" stop-color="#d35520" id="stop10"/>
            <stop offset=".42" stop-color="#c63e1b" id="stop12"/>
            <stop offset=".44" stop-color="#c8421c" id="stop14"/>
            <stop offset=".61" stop-color="#dd6824" id="stop16"/>
            <stop offset=".76" stop-color="#ec8329" id="stop18"/>
            <stop offset=".9" stop-color="#f5932d" id="stop20"/>
            <stop offset="1" stop-color="#f8992e" id="stop22"/>
          </linearGradient>
        </defs>
        <path class="cls-1" d="M132.52 31.27h-7.82v31.28h-7.82V0h15.64a7.82 7.82 0 017.82 7.82v15.64a7.81 7.81 0 01-7.82 7.81zm0-23.45h-7.82v15.64h7.82z" id="path38" fill="#231f20"/>
        <path class="cls-1" d="M315.62 31.27h-7.81v31.28H300V0h15.63a7.82 7.82 0 017.82 7.82v15.64a7.81 7.81 0 01-7.83 7.81zm0-23.45h-7.81v15.64h7.81z" id="path40" fill="#231f20"/>
        <path class="cls-1" d="M254.26 54.73a7.82 7.82 0 007.81 7.82V39.09a7.82 7.82 0 00-7.81-7.82z" id="path42" fill="#231f20"/>
        <path class="cls-1" d="M254.26 7.82v15.64h-7.82V0h-7.82v62.55h7.82V31.27h7.82a7.81 7.81 0 007.81-7.81V0a7.82 7.82 0 00-7.81 7.82z" id="path44" fill="#231f20"/>
        <path class="cls-1" d="M170 0v62.55h-7.8V31.27h-7.82v23.46a7.82 7.82 0 01-7.81 7.82V7.82A7.82 7.82 0 01154.38 0zm-7.8 7.82h-7.82v15.64h7.82z" id="path46" fill="#231f20"/>
        <path class="cls-1" d="M292.76 7.82v46.91a7.82 7.82 0 01-7.82 7.82h-7.82a7.82 7.82 0 01-7.82-7.82V7.82A7.82 7.82 0 01277.12 0h7.82a7.82 7.82 0 017.82 7.82zm-7.82 0h-7.82v46.91h7.82z" id="path48" fill="#231f20"/>
        <path class="cls-1" id="polygon50" fill="#231f20" d="M104.23 62.55V7.82h7.82V0H88.59v7.82h7.82v54.73z"/>
        <path class="cls-1" d="M192.89 7.82v15.64h-7.82V0h-7.82v62.55a7.82 7.82 0 007.82-7.82V31.27h7.82v31.28h7.81V0a7.81 7.81 0 00-7.81 7.82z" id="path52" fill="#231f20"/>
        <path class="cls-1" d="M231.39 15.64V7.82A7.82 7.82 0 00223.57 0h-7.82a7.82 7.82 0 00-7.81 7.82v46.91a7.82 7.82 0 007.81 7.82h7.82a7.82 7.82 0 007.82-7.82V31.27a7.82 7.82 0 00-7.82 7.82v15.64h-7.82V7.82h7.82v7.82z" id="path54" fill="#231f20"/>
        <path class="cls-1" d="M7.82 0A7.82 7.82 0 000 7.82v54.72h54.73a7.8 7.8 0 007.81-7.81V0z" id="path56" fill="#231f20"/>
        <path id="polygon58" fill="url(#linear-gradient)" d="M19.59 16.88L56.8 5.75 45.85 42.39z"/>
        <path d="M25.87 53.57a16.9 16.9 0 1116.91-16.9 16.9 16.9 0 01-16.91 16.9z" id="path60" fill="url(#radial-gradient)"/>
        <path d="M25.87 57.39a20.73 20.73 0 1120.72-20.72 20.73 20.73 0 01-20.72 20.72zm0-33.8a13.09 13.09 0 000 26.17 13.09 13.09 0 009.26-22.34 13 13 0 00-9.26-3.83z" id="path62" fill="#fff"/>
      </svg>
    </a></li>
    <li v-for="link in links" :key="link.url" class="menu__item">
      <router-link
        active-class="active"
        :to="link.url"
        class="menu__link"
      >
        {{link.title}}
      </router-link>
    </li>
    <span class="menu__footer">© 2022</span>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: 'Персональная страница', url: '/info' },
        { title: 'Информация о договоре', url: '/contract' },
        { title: 'Информация о ключе', url: '/key' },
        { title: 'Список проектов', url: '/projects' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';
.menu {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 100vh;
  padding: 32px 0;
  border-right: 2px solid $black;
  background-color: $white;
  box-shadow: 1px 0 8px $grey;
  list-style: none;

  &__logo {
    display: flex;
    width: fit-content;
    height: fit-content;
    padding: 0 16px;
    margin-bottom: 16px;
  }

  &__link {
    display: block;
    padding: 12px 16px;
    border-bottom: 1px solid $greyLight;
    color: $black;
    font-family: 'Oswald';
    font-size: 20px;
    text-decoration: none;
    transition: .3s ease;
  }
  &__link.active {
    border-color: $orange;
    color: $orange;
  }

  &__footer {
    margin-top: auto;
  }

  @media (hover: hover) {
    &__link:hover {
      border-color: $orange;
    }
  }
}
</style>
