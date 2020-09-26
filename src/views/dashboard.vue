<template>
    <div class="dashboard">

<div class="main">
    <div class="top-header">
    <a href="/">
    <svg width="95" height="105" viewBox="0 0 95 105" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2.5" y="1.5" width="90" height="102" rx="8.5" stroke="#001534" stroke-width="3"/>
    <path d="M92.1698 96.096H62.9858V93.12L72.0098 86.016V32.928L46.3778 96.096H41.0978L15.6578 32.256V87.168L25.7378 92.256L23.8177 96.096H1.35375V93.12L10.3778 86.016V29.76L0.39375 24.384L2.31375 20.544H23.1458L47.1458 80.832L71.0498 20.544H93.1298V23.52L84.0098 30.624V88.704L94.0898 92.256L92.1698 96.096Z" fill="#001534"/>
    </svg>
    </a>

    <div class="nav-pane">
        <div class="edit">
        <router-link to="/diagnoses">Run diagnoses</router-link>
        <router-link to="/result">Check result</router-link>
        </div>
        <div @click="logout" class="btn-logout bigscreenL">logout</div>
        <button class="btn-settings" @click="settings = !settings">
            <i class="fas fa-cog"></i><span >setting</span>
            <div class="menu" v-if="settings">
              <div class="user">
                <div class="avatar">{{user}}</div>
                {{username}}
              </div>
             <a href="/viewProfile" class="profile">view profile</a>
             <div @click="logout" class="btn-logout smallscreenL">logout</div>
            </div>
        </button>
    </div>
    </div>
    <div class="center">
    <router-view />
    </div>
</div>
<!-- footers -->
<div class="footers">
    <router-link to="/about" class="plasticfooters">About</router-link>
  <div class="footnavs">
    <router-link to="/about">About</router-link>
      <router-link to="/diagnoses">diagnoses</router-link>
        <router-link to="/result">result</router-link>
  </div>

     © {{new Date().getFullYear()}} Medlab.com
</div>
    </div>
</template>
<script>
import gql from 'graphql-tag'
import notification from "../backdata/notification"
export default { 
  data () {
    return {
    settings: false,
    }
  },
  methods: {
    logout () {
      new notification().markallasread()
      this.$apollo.mutate({
          mutation: gql`mutation {logout}`
      }).then((data) => {
          alert(data.data.logout)
          location.reload()
      }).catch((err) => alert(err))
    }
  },
  computed: {
    user () {
      return this.$store.getters.avatar
    },
    Allnotification () {
      const allNotification = new notification('0000').allNotification()
      return allNotification
    },
    username () {
      return this.$store.getters.username
    }
  },
  created () {
    this.$apollo.mutate({
      mutation: gql`mutation {User{firstname, lastname, username, createdEvents}}`
    }).then((data) => {
      this.$store.commit('user', data.data.User)
    }).catch((e) => {}) 
  }
}
</script>
<style>
.dashboard {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;

}
.main {
    flex-grow: 2;
}
.top-header{
    padding: .9rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    font-family: 'poppins';
}
.nav-pane{
    /* max-width: 50vw; */
    min-width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;

}
.center{
    display: flex;
    justify-content: center;
    align-items: center;
}
.smallscreenL {
    display: none;
}


.btn-logout, .btn-settings{
    position: relative;
    outline: none;
    padding: 0.5rem;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    font-weight: 500;
    cursor: pointer;
    z-index: 1;
}
 .btn-settings:focus {
   background: #ccc;
 }
.btn-logout:hover {
    background: rgba(3, 8, 41, 0.9);
    color: #ffffff;
}
.nav-pane a, .footers a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0.9rem;
  text-decoration: none;
  font-family: 'poppins';
}
.footers {
  display: flex;
  justify-content: space-between;
  padding: .75rem;
  align-items: center;
  background: #001534;
  color: #ffffff;
  font-family: 'poppins';
}
.footnavs {
  display: none;
  justify-content: space-between;
}
.nav-pane a.router-link-exact-active {
  color: #42b983;
}
.menu::before {
    content: '';
    border: 10px solid #777;
    margin-top: 10px;
    display: block;
    width: 2px;
    border-color: transparent transparent #777 transparent;
    position: absolute;
    top: -30px;
    right: 10px;
}
.menu {
    font-family: 'poppins' sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: #001534;
    right: 0;
    margin-right: 10px;
    margin-top: 20px;
    padding: 10px;
    color: #fff;
}
.user {
    font-size: .75rem;
    font-weight: bold;
    border-bottom: 1px solid #777;
    padding: 3px;
}
.user > .avatar {
    display: flex;  
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #f9f9f9;
    color: #001534;
    font-size: 3rem;
    align-items: center;
    text-transform: uppercase;
    margin-bottom: 5px;
}
.avatar:hover {
    transition: .5s;
   background: #001534;
   color: #f9f9f9;
}
.changebg {
    width: 100%;
    background: #01255a;
    padding: 5px;
    color: #f9f9f9;
    outline: none;
    border: none;
    cursor: pointer;
}
@media screen and (max-width: 600px) {
  .plasticfooters{ 
    display: none;
  }
  .footnavs {
    display: block;
  }
  .footers{
    flex-direction: column;
  }
    .edit {
        display: none;
    }
    .bigscreenL {
    display: none;
     }
    .smallscreenL {
        display: block;
        width: 100%;
        margin-top: .75rem;
    }
}
</style>