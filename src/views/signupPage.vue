<template>
        <div class="head">
         <div class="logo">
                <svg width="95" height="105" viewBox="0 0 95 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2.5" y="1.5" width="90" height="102" rx="8.5" stroke="white" stroke-width="3"/>
                <path d="M92.1698 96.096H62.9858V93.12L72.0098 86.016V32.928L46.3778 96.096H41.0978L15.6578 32.256V87.168L25.7378 92.256L23.8177 96.096H1.35375V93.12L10.3778 86.016V29.76L0.39375 24.384L2.31375 20.544H23.1458L47.1458 80.832L71.0498 20.544H93.1298V23.52L84.0098 30.624V88.704L94.0898 92.256L92.1698 96.096Z" fill="white"/>
                </svg>
                <div class="leftpane">
                Already have an account?
                <a href="/login" class="link-btn">Login</a>
            </div>
            </div>

        <div class="login">
            <signup_form />
        </div>
        </div>
</template>

<script>
import signup_form from '../components/signup_form'
export default {
  components: { signup_form }
}
</script>

<style lang="css" scoped>
.head {
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    background: #001534;
    padding: 10px;
    scroll-behavior: smooth;
}
.logo {
 padding: 1rem;
 margin-bottom: .75rem;
 display: flex;
 justify-content: space-between;
 align-items: center;
 font-family: 'poppins';
 color: #ffffff;
}
a {    display: flex;
    justify-content: flex-end;
    text-decoration: none;
    color: #ffffff;
}
.link-btn {
    width: 50px;
    padding: .25rem;
    background: #121212;
    border-radius: 3px;
    margin-left: 2rem;
}
.leftpane {
       display: flex;
    justify-content: space-between;
    align-items: baseline;
}
.link-btn:hover {
    background: #212121e5;
}
.login {
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center 

}
/* trim */
@media screen and (max-width: 600px) {
  .logo {
    display: block;   
    padding: 1rem;
    margin-bottom: 0rem;
  }
  .logo > svg {
      display: none;
  }
  .leftpane{
    font-size: smaller;
   }
   .link-btn {
        margin-left: 0rem;
    }
}
</style>
