<template>
  <div id="home" class="bg">
    <div class="container">
      <img src="@/assets/img/logo.png" alt="ロゴ">
      <div class="row">
        <h1 class="heading__lv1">会員サイト</h1>
        <p class="message">会員サイトをご利用の方は、Googleアカウントでログインしてください。</p>
      </div>

      <h2 class="heading__lv2">メールアドレスでログイン</h2>
      <form>
        <div class="form__item">
          <p class="form__label">Email</p>
          <input type="email" v-model="email" />
        </div>
        <div class="form__item">
          <p class="form__label">Password</p>
          <input 
            type="password" 
            v-model="password" 
          />
        </div>

        <button 
          type="button" 
          @click="mailLogin"
          class="btn"
        >メールアドレスでログイン</button>
      </form>

      <h2 class="heading__lv2">Googleアカウントでログイン</h2>
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
import firebase from 'firebase'

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(['login']),
    mailLogin() {
      console.log(this.email);
      console.log(this.password);
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(function(res) {
          console.log(res)
          alert("ログインできました");
        })
        .catch(function (error) {
          alert("ログインできません（" + error.message + "）");
        });
    },
  },
}
</script>

<style lang="scss" scoped>
body {
  color: #fff;
}

.heading {
  &__lv2 {
    margin-bottom: 0rem;
    margin-top: 2rem;
  }
}

#home .message {
  color: #fff;
  font-size: 1rem;
}

.form__item {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  color: #fff;
}

.form__label {
  color: #fff;
  min-width: 120px;
  text-align: left;
  font-size: 1.4rem;

  ~ input {
    min-width: 300px;
  }
}

@media screen and(max-width: 767px) {
  .heading {
    &__lv2 {
      font-size: 1.4rem;
    }
  }
  

  .form__label {

    ~ input {
      min-width: 50%;
    }
  }
}

</style>