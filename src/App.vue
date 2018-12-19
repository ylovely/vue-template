<template>
  <div id="app">
    <Loading :show="showLoading" />
    <router-view />
  </div>
</template>
<script>
import Loading from '@/components/Loading'
import { mapState } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState(['showLoading'])
  },
  components: {
    Loading
  }
}
</script>
