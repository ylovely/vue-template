<template>
  <div v-show="show" class="global-loading">
    <!-- it's an iView component,see detail: https://www.iviewui.com/components/spin -->
    <!-- it can not work now unless you import iView in global or in current page! -->
    <Spin fix size="large" v-show="show"></Spin>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    show: Boolean
  }
}
</script>

<style scoped>
  .global-loading {
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9999;
  }
</style>
