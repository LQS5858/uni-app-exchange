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
    console.log('--获取参数--', query);
  },
}
</script>
<style lang="less" scoped>
</style>