<template>
        <div class="head">
             <div class="logo">
                <svg width="95" height="105" viewBox="0 0 95 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2.5" y="1.5" width="90" height="102" rx="8.5" stroke="white" stroke-width="3"/>
                <path d="M92.1698 96.096H62.9858V93.12L72.0098 86.016V32.928L46.3778 96.096H41.0978L15.6578 32.256V87.168L25.7378 92.256L23.8177 96.096H1.35375V93.12L10.3778 86.016V29.76L0.39375 24.384L2.31375 20.544H23.1458L47.1458 80.832L71.0498 20.544H93.1298V23.52L84.0098 30.624V88.704L94.0898 92.256L92.1698 96.096Z" fill="white"/>
                </svg>
            </div>

        <div class="login">
            <login_form />
        </div>
        </div>
</template>

<script>
import login_form from '../components/login_form'
export default {
  components: { login_form }
}
</script>

<style lang="css" scoped>
.head {
    width: 100vw;
    height: 100vh;
    background: #001534;
}
.logo {
 padding: 1rem;
 margin-bottom: .75rem;
 width: 100%;
 display: flex;
 justify-content: start
}
.login {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center ;
}
</style>
