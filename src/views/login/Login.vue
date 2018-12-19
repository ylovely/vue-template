<template>
  <div class="container">
    <div class="form-item">
      <p class="item">
        <label>用户名</label>
        <input v-model="username" type="text" placeholder="请输入用户名" />
      </p>
      <p v-show="showUsernameError" class="error">*用户名不存在</p>
    </div>
    <div class="form-item">
      <p class="item">
        <label>密码</label>
        <input v-model="password" type="password" placeholder="请输入密码" />
      </p>
      <p v-show="showPasswordError" class="error">*密码错误</p>
    </div>
    <div class="form-item">
      <p class="item"><button @click="login">登录</button></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      showUsernameError: false,
      showPasswordError: false
    }
  },
  methods: {
    login() {
      // You can do something here like validating the username and password, send an API request to login,
      // when login success, you can store the token in sessionStorage or cookie or global Vuex state, just you like are well.
      this.showUsernameError = this.username !== '123'
      this.showPasswordError = this.password !== '123'
      if (!this.showUsernameError && !this.showPasswordError) {
        sessionStorage.setItem('Authorization', 'here is the auth token')
        this.$router.push('/index/hello-world')
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .container {
    width: 500px;
    margin: 0 auto;
    padding-top: 100px;
    .form-item {
      margin-bottom: 20px;
      width: 100%;
      .item {
        display: flex;
        width: 100%;
        height: 30px;
        line-height: 30px;
        label {
          width: 130px;
          margin-right: 20px;
          text-align: right;
        }
        input {
          width: 350px;
          box-sizing: border-box;
          height: 28px;
        }
        button {
          margin-left: 150px;
          padding: 0 15px;
        }
      }
      .error {
        margin-top: 5px;
        margin-left: 150px;
        color: red;
      }
    }
  }
</style>
