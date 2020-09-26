<template>
    <div class="">
       <div class="container">
           <div class="test" :class="{raidioChange: radio}">
            <div class="number">{{test || 0}}</div>
            test
           </div>   
           <ul class="notification" id="notify" v-if="radio">
            <!-- <small>new test since 5:50pm yesterday.</small> -->
             <li>You've {{test || 'no'}} test now</li>   
           </ul>
           <div class="message">
               <div class="radio">
                   <label for="check">view new notification</label>
                   <input type="checkbox" id="check" @change="radio = !radio">
               </div>
           </div>
        <div class="diagnose-link">
            <router-link to="/diagnoses">diagnose</router-link>
        </div>
       </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
        radio: false
    }
  },
  computed: {
    test () {
      return this.$store.getters.taskCount
    }
  }
}
</script>
<style scoped>
.container {
    width: 600px;
    /* min-width: 500px; */
    background: linear-gradient(54.08deg, rgba(0, 21, 52, 0.97) 61.15%, rgba(0, 21, 52, 0.82) 100%);
    border-radius: 6px;
    /* height: 50%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: .75rem;
}
@media screen and (max-width: 600px) {
.container {
    width: 300px
}
}
.test {
    display: flex;
    align-items: baseline;
    color: #ffffff;
    font-family: 'poppins';
}
.test > .number {
    font-size: 13rem;
}
.raidioChange, .raidioChange > .number {
    font-size: 10px;
    transition: .5s all;
    font-size: 10px;
    color: #C4C4C4;
}
.notification {
    font-family: 'poppins';
    transition: opacity .5s;
    width: 300px;
    text-align: center;
    color: #ccc;
}
.notification > li {
 margin-bottom: 0.75rem;
background: rgba(137, 102, 201, 0.3);
 padding: .30rem;
 color: #ccc;
}
.message {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    font-family: 'poppins';
    color: #cccccc;
}
.radio {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    /* width: 150px; */
}
.diagnose-link {
display: flex;
width: 100%;
 justify-content: center;
 align-items: center;
 padding: 10px;
 margin-top: 10px;
 font-family: 'poppins';
 background: #C4C4C4;
 border-bottom-left-radius: 5px;
 border-bottom-right-radius: 5px;
}
.diagnose-link a {
text-decoration: none;
color: #001534;
}
</style>
