import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations"
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    user: '',
    loggedIn: document.cookie.includes('A_air'),
    task: '',
    count: '',
    taskLen: ''
  },  
  mutations,
  actions:{},
  getters: {
    avatar: state =>  {
    if (state.user) {
      const names = state.user.firstname.slice(0,1) + state.user.lastname.slice(0,1)
      return names
      }

    },
    username: state => {
      if (state.user) {
        return state.user.username
      }
    },
    taskCount: state => {
      let lengthEvent = state.taskLen
      if (lengthEvent) {
        return lengthEvent.length
      }
    }
  }
})
