<template>
  <div class="main">
    <NavbarComponent />
    <SidebarComponent />
    <main class="main__container">
      <div>
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import NavbarComponent from '@/components/UI/NavbarComponent.vue'
import SidebarComponent from '@/components/UI/SidebarComponent.vue'
import { collection, getDocs } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '@/firebase'

export default {
  name: 'main-layout',
  async mounted() {
    onAuthStateChanged(auth, user => {
      if (user) {
        this.$store.commit('ADD_USER_UID', user.uid);
      }
    });
    const querySnapshot = await getDocs(collection(db, 'users'))
    querySnapshot.forEach((doc) => {
      if (doc.id === this.$store.state.uid) {
        this.$store.commit('ADD_USER_DATA', doc.data());
      }
    });
  },
  components: {
    NavbarComponent,
    SidebarComponent,
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100vh;
  padding: 54px 0 0 250px;
}
</style>
