<template>
 <div class="form-head">
          <form @submit.prevent="Signup()" class="form">
              <div class="input-group">
                  <label for="firstname">Firstname:</label>
                  <input type="text" name="firstname" v-model="firstname" id="firstname" class="form-control">
              </div>
                <div class="input-group">
                  <label for="lastname">Lastname:</label>
                  <input type="text" name="lastname"  v-model="lastname" id="lastname" class="form-control">
              </div>
                    <div class="input-group">
                  <label for="email">Email Address:</label>
                  <input type="text" name="email"  v-model="email" id="email" class="form-control" >
              </div>
                    <div class="input-group">
                  <label for="username">Username:</label>
                  <input type="text" name="username"  v-model="username" id="username" class="form-control" >
              </div>
                <div class="input-group">
                  <label for="pasword">Password:</label>
                  <input type="password" name="password"  v-model="password" id="password" class="form-control">
              </div>
                <div class="input-group">
                  <label for="verify">Verify:</label>
                  <input type="password" name="verify"  v-model="verify" id="verify" class="form-control">
              </div>
                <div class="input-group">
                  <label for="home">Home Address:</label>
                  <input type="text" name="home" id="home" class="form-control">
              </div>
              <div v-if="errMsg.length">
                 <li class="error"> *{{errMsg}} </li>
                 <li v-if="$apollo.loading"> *{{loading}} </li>

                  </div>                  
                  <input type="submit" :disabled="$apollo.loading" value="Sign up" class="btn-button">
          </form>
            </div>
</template>
<script>
import gql from "graphql-tag"
import {signupErrors} from "../validation/signup_validation"
import signup from "../graphql/signup.gql"

export default {
  data () {
    return {
      user: '',
      slideOut: false,
      email: '',
      password: '',
      username: '',
      firstname: '',
      lastname: '',
      verify: '',
      errMsg: '',
      loading: ''
        }
    },
  methods: {
    Signup () {
      const email =  this.email
      const password = this.password
      const username = this.username
      const firstname = this.firstname
      const lastname = this.lastname
      const verify = this.verify
      // vuex
      const error =  signupErrors({
        email, password, 
        username, firstname,
        lastname, verify
        })
      if (error) {
        this.errMsg = error
        return error
      }
       this.$apollo.mutate({
         mutation: gql`${signup}`,
         variables: {
           email,
           password,
           username,
           firstname,
           lastname,
           }
         }).then((data) => {
         try {
           if (data) {
            const user = data.data.postLog.username + ', welcome !'
            this.user = user
            location.reload()
            return {data}
           }
         }catch (err) {
        }
         }).catch (err => {
           const errors = err.message.replace('GraphQL error: ', '')
           this.errMsg = errors
           return errors
         })
    }
  }
}
</script>
<style scoped>
.form-head {
    width: 600px;
    border-radius: 7px;
    background: #ffffff;
    box-sizing: border-box;
}
@media screen and (max-width: 600px) {
  .form-head {
    width: 100%;
  }
}
.form {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.input-group {
 padding: 20px;
 width: 100%;
}
.input-group > .form-control {
    width: 100%;
    outline: none;
    border: 2px solid #cccccc;
    border-radius: 4px;
    padding: 10px;
    background: transparent;
    font-family: 'poppins';
}
.form-control:hover {
    border-color: #8a8a8aec;
}
.form-control:focus {
    border-color: #001534;
}
.input-group > label {
    font-family: 'poppins';
    font-weight: bolder;
    color: #00000098;
}
.btn-button {
    outline: none;
    width: 25rem;
    padding: 10px;
    background: #001534;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    font-weight: normal;
    margin: 10px;
    cursor: pointer;
}
.btn-button:hover {
    background: #001534e7;
}
.form-footers {
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 10px;
 margin-top: 10px;
 font-family: 'poppins';
 background: #C4C4C4;
 border-radius: 5px;
}
.error {
    list-style: none;
    color: #8f0707;
    font-family: 'poppins';
    font-size: .75rem;
    text-align: center;
    font-weight: bold;
}
</style>
