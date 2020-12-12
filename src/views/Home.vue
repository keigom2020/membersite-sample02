<template>
  <div id="home" class="bg">
    <div class="container">
      <img src="@/assets/img/logo.png" alt="ロゴ">
      <div class="row">
        <h1>会員サイト</h1>
        <p class="message">会員サイトをご利用の方は、Googleアカウントでログインしてください。</p>
      </div>
      <button 
        class="btn"
        @click="login"
      >
        Googleアカウントでログイン
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['login'])
  }
}
</script>

<style lang="scss">
body {
  color: #fff;
}

p {
  color: #fff;
}

h1 {
  color: #fff;
}

#home .message {
  color: #fff;
  font-size: 1rem;
}

@media screen and(max-width: 767px) {

}

</style>