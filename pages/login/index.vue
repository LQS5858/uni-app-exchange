<template>
  <Root>
    <view class="login-wrap">
      <text>登录页</text>
      <button type="default"
              @click="changeTheme">改变主题</button>
    </view>
  </Root>
</template>
<script>
import Root from '@/components/com/root'
export default {
  name: "login",
  data () {
    return {
    };
  },
  components: { Root },
  methods: {
    changeTheme () {
      this.$store.commit('CHANGE_THEME', 'white')
    }
  },
}
</script>
<style lang="less" scoped>
.login-wrap {
  background: red;
}
</style>