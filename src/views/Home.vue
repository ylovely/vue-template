<template>
  <div class="layout">
    <div class="nav">
      <router-link class="link" to="/index/hello-world">Hello World</router-link>
      <router-link class="link" to="/index/users">Users</router-link>
      <button @click="logout">logout</button>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    logout() {
      sessionStorage.removeItem('Authorization')
      this.$router.replace('/login')
    }
  }
}
</script>
<style scoped lang="scss">
  .layout {
    padding: 30px;
    .nav {
      margin-bottom: 50px;
      a {
        font-weight: bold;
        color: #2c3e50;
        margin-right: 20px;
        &.router-link-exact-active {
          color: #42b983;
        }
      }
      button {
        float: right;
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        background-color: #42b983;
        border: none;
        border-radius: 4px;
        color: #fff;
        cursor: pointer;
      }
    }
  }
</style>
