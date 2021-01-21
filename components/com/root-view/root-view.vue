<template>
  <view :id="theme">
    <slot></slot>
  </view>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: "root-view",
  data () {
    return {
    };
  },
  computed: {
    ...mapState({
      theme: state => state.base.theme
    })
  }
}
</script>
<style lang="less" scoped>
</style>