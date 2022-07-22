import { createStore } from 'vuex'

export default createStore({
  state: {
    uid: '',
    email: '',
    name: '',
  },
  getters: {},
  mutations: {
    ADD_USER_UID(state, id) {
      state.uid = id;
    },
    ADD_USER_DATA(state, payload) {
      state.email = payload.email;
      state.name = payload.name;
    },
    CLEAR_DATA(state) {
      state.uid = '';
      state.email = '';
      state.name = '';
    }
  },
  actions: {},
  modules: {},
});
