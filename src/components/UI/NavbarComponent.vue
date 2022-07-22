<template>
  <nav class="navbar">
    <a href="tel:+74952259652" itemprop="telephone" class="navbar__item navbar__tel">+7(495) 225-96-52</a>
    <a href="tel:+74952259653" itemprop="telephone" class="navbar__item navbar__tel">+7(495) 225-96-53</a>
    <button class="navbar__item navbar__out" @click="handleClick">Выйти</button>
  </nav>
</template>

<script>
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase'

export default {
  methods: {
    handleClick() {
      signOut(auth)
        .then(() => {
          this.$router.push('/login');
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 54px;
  padding: 0 64px;
  border-bottom: 2px solid $black;
  box-shadow: 0 1px 8px $grey;
  background-color: $orange;

  &__item {
    margin-right: 20px;
  }
  &__item:last-child {
    margin-right: 0;
  }

  &__tel {
    color: $white;
    font-weight: 700;
    text-decoration: none;
    transition: .3s ease;
  }

  &__out {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    color: $white;
    background-color: $black;
    font-weight: 700;
    text-decoration: none;
    transition: .3s ease;
    cursor: pointer;
  }

  @media (hover: hover) {
    &__tel:hover {
      color: $black;
    }

    &__out:hover {
      background-color: $grey;
    }
  }
}
</style>
