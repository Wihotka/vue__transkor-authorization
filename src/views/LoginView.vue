<template>
  <div class="login">
    <form class="login__content" @submit.prevent="handleSubmit">
      <div class="login__inputs">
        <label class="login__input-label">
          Email
          <input type="text" v-model.trim="email" ref="email" class="login__input" :class="{ error: v$.email.$errors.length }">
          <span v-for="error in v$.email.$errors" :key="error.$uid" class="login__error">{{ error.$message }}</span>
        </label>
        <label class="login__input-label">
          Пароль
          <input type="password" v-model="password" ref="password" class="login__input" :class="{ error: v$.password.$errors.length }">
          <span v-for="error in v$.password.$errors" :key="error.$uid" class="login__error">{{ error.$message }}</span>
        </label>
      </div>
      <button type="submit" class="login__in">Войти</button>
      <div class="login__auth-error" :class="{ active: authError }">{{ authError }}</div>
    </form>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required, email, minLength, helpers } from '@vuelidate/validators';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase'

export default {
  name: 'login-view',
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      email: '',
      password: '',
      authError: '',
    }
  },
  validations() {
    const PASSWORD_MIN_LENGTH = 6;
    return {
      email: {
        required: helpers.withMessage('Пожалуйста, введите Email', required),
        email: helpers.withMessage('Пожалуйста, введите корректный Email', email),
      },
      password: {
        required: helpers.withMessage('Пожалуйста, введите пароль', required),
        minLength: helpers.withMessage(`Минимум ${PASSWORD_MIN_LENGTH} символов`, minLength(PASSWORD_MIN_LENGTH)),
      },
    }
  },
  methods: {
    handleSubmit() {
      if (this.v$.$invalid) {
        this.v$.$touch()
        return
      }
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          this.$router.push('/info');
        })
        .catch(err => {
          switch (err.code) {
            case 'auth/user-not-found':
              this.authError = 'Введен неверный Email';
              this.$refs.email.focus();
              setTimeout(() => {
                this.authError = '';
              }, 3000);
              break
            case 'auth/wrong-password':
              this.authError ='Введен неверный пароль';
              this.password = '';
              this.$refs.password.focus();
              setTimeout(() => {
                this.authError = '';
              }, 3000);
              break
            default:
              this.authError = `Произошла ошибка: ${err.code}`;
          }
        });
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: transparent;

  &__content {
    position: relative;
    min-width: 320px;
    max-width: 530px;
    padding: 32px 48px;
    border-radius: 5px;
    background-color: $white;
  }

  &__inputs {
    display: grid;
    gap: 8px;
    margin-bottom: 20px;
  }

  &__input-label {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 14px;
  }

  &__input {
    margin-top: 4px;
    padding: 5px 10px;
    border: 1px solid $greyLight;
    border-radius: 4px;
    font-size: 16px;
  }
  &__input.error {
    border-color: $red;
  }

  &__error {
    margin-top: 2px;
    color: $red;
    font-size: 12px;
  }

  &__in {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    color: $white;
    background-color: $orange;
    font-weight: 700;
    text-decoration: none;
    transition: .3s ease;
    cursor: pointer;
  }

  &__auth-error {
    position: absolute;
    right: 48px;
    bottom: 48px;
    width: fit-content;
    max-width: 136px;
    color: $red;
    font-size: 12px;
    transform: translateY(50%);
    visibility: hidden;
    opacity: 0;
    transition: .3s ease;
  }
  &__auth-error.active {
    visibility: visible;
    opacity: 1;
    animation: authError linear alternate 3s;
  }
  @keyframes authError {
    0% {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @media (hover: hover) {
    &__in:hover {
      background-color: $black;
    }
  }
}
</style>
