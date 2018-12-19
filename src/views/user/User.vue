<template>
  <div>Here is the User component content.</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'User',
  computed: {
    ...mapState('user', ['users', 'userDetail'])
  },
  methods: {
    ...mapActions('user', [
      'fetchUsers',
      'createUser',
      'updateUser',
      'deleteUser',
      'fetchUserDetail'
    ])
  },
  mounted() {
    // You can init the data here by invoking the api.
    // this.fetchUsers()
  }
}
</script>

<style scoped lang="scss">

</style>
