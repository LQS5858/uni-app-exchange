<template>
  <view>
    <text>参数</text>
  </view>
</template>
<script>
export default {
  name: "test",
  data () {
    return {
    };
  },
  mounted () {
    const { query } = this.$Route || {}
  },
}
</script>
<style lang="less" scoped>
</style>