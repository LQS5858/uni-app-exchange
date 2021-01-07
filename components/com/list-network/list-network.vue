<template>
  <view>
    <view v-if="isConnected">
      <slot></slot>
    </view>
    <view v-else>
      <text style="color:#fff">糟糕,网络开小差了!</text>
    </view>
  </view>
</template>
<script>
export default {
  name: "list-network",
  data () {
    return {
      isConnected: true
    };
  },
  methods: {
    checkNetWork () {
      uni.onNetworkStatusChange(res => {
        ({ isConnected: this.isConnected } = res || {})

      })
    }
  },
  onShow () {

  }
}
</script>
<style lang="less" scoped>
</style>