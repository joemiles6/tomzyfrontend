<template>
    <div class="">
       <div class="diagnose">
           <h2>Tell us how you feel.</h2>
           <div class="err">{{err}}</div>
           <form @submit.prevent="diagnose" class="input-group">
               <div class="inputs">
                 <label for="feelings">How do you feel?</label>
               <input type="text" :class="{error: error, success: success, normal: normal}" id="feelings" v-model="explanation" placeholder="Ex: 'am having headache' " class="form-control" autocomplete="off">
              <small>{{count}}/20</small>
               </div>
               <button type="submit" class="btn-dia">{{!loading ? "Diagnose" : "loading ..."}}</button>
               </form>
       </div>
    </div>
</template>``
<script>test
import test from "../graphql/test.gql"
import gql from "graphql-tag"
import notification from "../backdata/notification"
import taskValidation from "../validation/taskValidation"
import moment from "moment"
export default {
  data () {
    return {
     explanation: '',
     limit: 30,
     error: false,
     success: false,
     normal: false,
     loading: false,
     counting: 1,
     err: ''
    }
  },
  computed: {
    count () {
     if (this.explanation.length >= this.limit) {
        const limits = this.explanation.slice(0, 30)
        this.explanation = limits
        return this.explanation.length
     }
     return this.explanation.length
    }
  },
  methods: {
    diagnose () {
      let explanation = this.explanation
      const error = taskValidation(explanation)
      if (error) {
        this.err = error
        return error
      }
      if (!explanation || this.explanation.length < 5) {
        this.error = true
        this.loading = false
        return this.error
      }
      this.loading = true
      let fakeId = !this.$store.state.count ? this.counting : this.$store.state.count + this.counting
      this.$apollo.mutate({
        mutation: gql`${test}`,
          variables: {
            explanation,
            fakeId
        }
      }).then ((res) => {
          this.loading = true
        // if successfull
          this.success = true
        //   send a notification
        // save count
        location.reload()
         const newNotification = new notification(res.data.Task.id).createCookiesNotification()
      }).catch(err => console.log(err))
    }
  }

}
</script>
<style scoped>
.diagnose {
    width: 400px;
    height: 60vh;
    display: flex;
    flex-direction: column;
    background: #001534;
    font-family: 'poppins';
    border-radius: 4px;
}
@media screen and (max-width: 600px) {
  .diagnose {
    width: 300px;
  }
}
.diagnose > h2 {
    color: #ffffff;
    text-align: center;
    padding: .75rem;
}
.input-group {
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

}
.input-group > .inputs {
    width:90%;
    height: 50%;
    color: #fff;
    margin: 10px;
    padding: 5px;
    flex-grow: 2
}
 .form-control {
    width: 100%;
    padding: 10px;
    background: transparent;
    border: none;
    border-bottom: 2px solid rgba(255, 217, 0, 0.158);
    outline: none;
    color: #fff;
    font-size: .90rem;
    border-bottom-width: 10;
    display: flex;

}
.normal {
    border-bottom: 2px solid rgba(255, 217, 0, 0.158);
}
.error {
    border-bottom: 3px solid rgba(255, 6, 6, 0.158);
}
.success {
    border-bottom: 3px solid rgba(1, 248, 34, 0.158);
}
.btn-dia {
    align-self: center;
    justify-self: center;
    background: #011B42;
    padding: 10px;
    color: #fff;
    outline: none;
    border: none;
    width: 80%;
    margin: 10px;
    cursor: pointer;
}
.err {
  color: red;
  text-align: center;
}
</style>