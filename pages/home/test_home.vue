<template>
  <view class="container">
    <!-- <uni-link :href="href" :text="href"></uni-link> -->
    <swiper active-class="actie-item-class"
            class="swiper"
            circular
            :indicator-dots="indicatorDots"
            :autoplay="autoplay"
            :interval="interval"
            :duration="duration">
      <swiper-item>
        <view class="swiper-item uni-bg-red">A</view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item uni-bg-green">B</view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item uni-bg-blue">C</view>
      </swiper-item>
    </swiper>
    <view>
      <text>{{data}}</text>
      <text>{{test}}</text>
      <text>{{count}}</text>
      <text>{{$t('home_te')}}</text>
      <button type="primary"
              @click.stop="jump">路由跳转</button>
      <text class="test iconfont iconfuzhi "></text>
      <image class="svg"
             src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMSAxMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjMzRBOUZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjxwYXRoIGQ9Ik0xMC4wNDMgMS40djcuMjA1YzAgLjIzOS0uMDc1LjQ2OC0uMjEuNjM3YS42NTQuNjU0IDAgMCAxLS41MDYuMjY0aC0uOTVWNC4xNmMwLS44NjctLjU2Mi0xLjU3My0xLjI1My0xLjU3M2gtNC4yN1YxLjRjMC0uMjM4LjA3Ny0uNDY2LjIxMS0uNjM1YS42NTMuNjUzIDAgMCAxIC41MDgtLjI2M2g1Ljc1MmMuMzk3IDAgLjcxOC40MDIuNzE4Ljg5OHoiLz48cGF0aCBkPSJNNy4xMjIgMy40NDZIMS4wNzVjLS4zMTUgMC0uNTcuMzItLjU3LjcxNHY3LjU3NWMwIC4zOTQuMjU1LjcxNC41Ny43MTRoNi4wNDdjLjMxNSAwIC41Ny0uMzIuNTctLjcxNFY0LjE2YzAtLjM5NC0uMjU1LS43MTQtLjU3LS43MTR6TTUuNjExIDkuNjYySDIuNTgzYy0uMTggMC0uMzM1LS4xNzEtLjM0OC0uMzk2YS40OTkuNDk5IDAgMCAxIC4wOS0uMzI0LjMxNS4zMTUgMCAwIDEgLjI1LS4xMzdoMy4wMjljLjE4IDAgLjMzNS4xNzEuMzQ4LjM5N2EuNDk5LjQ5OSAwIDAgMS0uMDkuMzIzLjMxNS4zMTUgMCAwIDEtLjI1MS4xMzd6bTAtMi41NzJIMi41ODNjLS4xOCAwLS4zMzUtLjE3Mi0uMzQ4LS4zOTdhLjQ5OS40OTkgMCAwIDEgLjA5LS4zMjMuMzE1LjMxNSAwIDAgMSAuMjUtLjEzOGgzLjAyOWMuMTggMCAuMzM1LjE3Mi4zNDguMzk3YS40OTkuNDk5IDAgMCAxLS4wOS4zMjQuMzE1LjMxNSAwIDAgMS0uMjUxLjEzN3oiLz48L2c+PC9zdmc+"></image>
    </view>
  </view>
</template>

<script>
import _ from 'lodash'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      href: 'https://uniapp.dcloud.io/component/README?id=uniui',
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 500,
      data: {},
      test: []
    }
  },
  computed: {
    ...mapState({
      count: state => state.base.count
    })
  },
  onShow () {
    // this.$bus.init()
    // this.$bus.subscribe({ cmd: 'sub.rate', args: [] }, data => {
    //   console.log('--rata--', data);
    //   this.data = data
    // })
  },
  methods: {
    jump () {
      // this.$Router.push({ path: '/pages/test/test', query: { plan: 'private' } }) // -> /user/123
      this.$Router.push({ name: 'test', params: { plan: 'private' } }) // -> /user/123

    },
    async getBanner () { },
    async getRateTicker () {
      // const [rateObj,tickerObj] = await Promise.all([this.$http.get('/v1/balance/findAllRate'),this.$http.get('/v1/exchange/ticker/findAll')])
      // console.log('--汇率ticker--', rateObj,tickerObj)
      this.$http.get('/v1/balance/findAllRate', {}, { showError: true }).then(data => {
      })
      this.test = _.compact(['1', '2', '', 0])
    },


  }
}
</script>

					


<style lang=less scoped>
.svg {
  width: 20rpx;
  height: 20rpx;
}
.test {
  background: var(--sell-color);
}
.swiper-item {
  height: 100%;
}
.uni-bg-blue {
  background-color: blue;
}
.uni-bg-green {
  background-color: green;
}

.uni-bg-red {
  background-color: red;
}

.actie-item-class {
  background-color: red;
}

.swiper {
  height: 500rpx;
}

.container {
  padding: 5rpx;
  font-size: 14px;
  line-height: 24px;
}
</style>
