<template>
    <div class="form-head">
            <h1 class="form_title">Log in to your account</h1>
          <form
          @submit.prevent="loginUser"
           class="form">
           {{user}}
              <div class="input-group">
                  <label for="email">Email Address:</label>
                  <input type="text" v-model="email" id="email" class="form-control" autocomplete="off">
              </div>
                <div class="input-group">
                  <label for="pasword">Password:</label>
                  <input type="password" v-model="password" id="password" class="form-control" autocomplete="off">
              </div>
                <div class="error" v-if="errMsg">*{{errMsg}}</div>
                  <input type="submit" value="Log in" class="btn-button">
          </form>
          <div class="form-footers">
              <div class="">
                  New to Mlab? <a href="/signup">sign up.</a>
              </div>
          </div>
        </div>
</template>
<script>
import {loginErrors} from "../validation/login_validation"
import login from "../graphql/login.gql"
import gql from "graphql-tag"
export default {
  data () {
    return {
      email: '',
      password: '',
      errMsg: '',
      user: ''
    }
  },
  methods: {
    loginUser () {
     const email = this.email
     const password = this.password
      // Validation.
      const error = loginErrors({email, password})
      if (error) {
        this.errMsg = error
        return error
      }

      this.$apollo.mutate({
        mutation: gql`${login}`,
          variables: {
            email,
            password,
        }
      })
      .then((data) => {
           if (data) {
            this.errMsg = ''
            const user = data.data.login.username + ', welcome !'
            this.user = user
            location.reload()
            return {data}
           }
      })
      .catch (err => {
        const errors = err.message.replace('GraphQL error: ', '')
        this.errMsg = errors
        return this.errMsg
      })
    }
  },

}
</script>
<style scoped>
.form-head {
    width: 600px;
    border-radius: 7px;
    background: #ffffff;
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
.form_title {
    text-align: center;
    font-weight: lighter;
    font-family: 'Poppins', sans-serif;
    padding: 16px
}
.btn-button {
    outline: none;
    width: 50%;
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
