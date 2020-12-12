<template>
  <div>
    <h1>aaaa</h1>
    <form>
      <span>ID</span>
      <input 
        type="email" 
        v-model="email"
      />
      <span>PW</span>
      <input 
        type="password"
        v-model="password" 
      />
      <button 
        type="button"
        @click="mailLogin"
      >ログイン</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      mailLogin() {
        console.log(this.email)
        console.log(this.password)
      },
    }
  }
</script>

<style scoped>
form {
  margin-top: 100px;
  height: 100vh;
}
</style>