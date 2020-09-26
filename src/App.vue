<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view/>
  </div>
</template>
<script>
import gql from 'graphql-tag'
const Active = document.cookie.includes('A_air')
export default {
  beforeMount() {
      if (!Active) {
        this.$apollo.mutate({
          mutation: gql`mutation {cookieuser}`
        }).then((data) => {
          location.reload(true)
        }).catch((e) => {})
      }
  },
  created () {
    this.$apollo.mutate({
    mutation: gql`mutation getTasks{getTask{id, fakeId}}`
    }).then((result) => {
      // commit
      if (result.data.getTask.length) {
        this.$store.commit('taskNum', result.data.getTask)
        return this.$store.commit('count', result.data.getTask.length)
        }
    }).catch((e) => {})
  }
}
</script>
<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

/* #nav {
  padding: 30px;
} */

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
