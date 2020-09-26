<template>
<div class="">
  <!-- div -->
  <!-- image -->
  <!-- a name on top -->
  <!-- illness name beside -->
  <div class="body">

  </div>
</div>
</template>
<script>
import gql from "graphql-tag"
import Api from "../backdata/modal"
export default {
    data () {
      return {
      }
    },
    props: {
      exp: String,
  },
  created () {
    this.$apollo.mutate({
      mutation: gql`mutation Api{Api}`
    }).then ((api) => {
      new Api(api.data.Api, this.exp).webApi()
    })
  }
}
</script>
<style >
.big{ 
  text-transform: capitalize;
  /* font-size: px; */
}
.head_m {
  display: flex;
  flex-direction: column;
  height: 300px;
  background: rgb(1, 5, 61);
  font-family: 'poppins';
  padding: 10px;
}
.top_m {
 font-size: 2em;
 color: #fff;
 flex-grow: 1;
  text-transform: capitalize;

}
.illness_m {
  text-align: right;
  color: #ccc;
   padding: 5px;
}
.disease {
  font-family: 'poppins';
}
.fact {
  padding: 5px;
}
.fact > h3, h3 {
  font-size: 1.2rem;
   padding: 5px;

}
ul {
  list-style: square;
   padding: 5px;

}
ul > li{
  padding-left: 5px;
  font-weight: bold;
} 
.drugs {
  background: rgb(0, 5, 51);
  padding: 10px;
  color: #ccc;
}
.drugs > h3 {
  font-size: 1rem;
  text-decoration: underline;
   padding: 5px;

}
.drug li {
  text-align: right;
  padding: 5px;
}
.drug h2 {
  font-size: 1.1rem;
  text-transform: capitalize;
}
h5 {
  padding: 5px;
}
</style>
