<template>
  <scroll-view scroll-y="true"
               id="scroll-view"
               :refresher-enabled="true"
               :refresher-threshold="100"
               :refresher-triggered="triggered"
               refresher-background="dark"
               @refresherrefresh="onRefresh"
               @scrolltolower="onreachBottom">
    <view v-if="networkStatus">
      <slot></slot>
    </view>
    <view v-else>
      <text>无网络</text>
    </view>
  </scroll-view>

</template>
<script>
export default {
  name: "public-load",
  data () {
    return {
      triggered: false
    };
  },
  components: {},
  props: {

    /**
     * loading的状态
     * more（loading前）、loading（loading中）、noMore（没有更多了）
     * 
     */
    loadingStatus: {
      type: String,
      default: 'more'
    },
    networkStatus: {
      type: [Boolean],
      default: true
    }
  },
  methods: {

    //下拉刷新结束
    onRestore () {
      this.triggered = false
    },
    onreachBottom () {
      console.log('>>上拉加载');
      this.$emit('onReachBottom')
    },
    onRefresh () {
      console.log('>>下拉刷新');
      this.triggered = true
      this.$emit('onRefresh')
    }
  }
}
</script>
<style lang="less" scoped>
#scroll-view {
  height: 100%;
}
</style>