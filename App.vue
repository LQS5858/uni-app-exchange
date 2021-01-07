<script>

import { manifestUrl } from '@/config/api'
let count = 0
export default {
  onLaunch: function () {
    console.log('App Launch');
    this.initManifest()
  },
  onShow: function () {
    console.log('App Show');
  },
  onHide: function () {
    console.log('App Hide');
  },
  mounted () {
  },
  methods: {
    async initManifest () {
      uni.request({
        url: manifestUrl,
        method: 'GET',
        success: (data) => {
          const { data: _data } = data || {}
          if (!_data) return
          console.log('--manifest--', _data);
          const { url } = _data || {}
          const { webApiUrl, socketUrl } = url || {}
          this.$http.baseUrl = webApiUrl
          this.$store.commit('SAVE_MANIFEST', _data)
          const { symbolList, coinList } = _data
          this.initRateMarket(symbolList, coinList)
          this.initWebsocket(socketUrl)
        },
        fail: () => {
          const id = setTimeout(() => {
            this.initManifest()
            clearTimeout(id)
          }, 3000);
        }

      })
    },
    async initWebsocket (socketUrl) {
      this.$bus.init(socketUrl)
    },
    async initRateMarket (symbolList, coinList) {
      const data = await Promise.all([this.$http.get('v1/balance/findAllRate'), this.$http.get('v1/exchange/ticker/findAll')])
      const [rate, ticker] = data || []
      this.$store.commit('SAVE_RATE', rate)
      this.initMarket(ticker, symbolList, coinList)
      this.subRate(rate)
    },
    async initMarket (ticker, symbolList, coinList) {

      const _ticker = this.$_.map(symbolList, item => {
        const { symbol } = item || {}
        const e = this.$_.find(ticker, i => i.symbol === symbol) || {}
        const _item = this.$_.merge(item, e)
        return _item
      }).map(v => {
        const { baseCoin } = v || {}
        const obj = this.$_.find(coinList, e => e.coin === baseCoin) || {}
        const _v = this.$_.merge(v, obj)
        return _v
      })
      this.$store.commit('SAVE_HISTORY_TICKER', _ticker)
    },
    subRate (rate) {
      this.$bus.subscribe({ cmd: 'sub.rate', args: [] }, rate => {
        if (!rate || this.$_.isEmpty(rate)) return
        const _rate = this.$_.merge(rate, rate)
        this.$store.commit('SAVE_RATE', _rate)
      })
    }
  },
  onUnload () {
    this.$bus.$off()
    this.$bus.unsubscribe({ cmd: 'unsub.rate', args: [] })
  }
};
</script>

<style lang="less">
@import './assets/styles/global.less';

/* 解决头条小程序组件内引入字体不生效的问题 */ /* #ifdef MP-TOUTIAO */
@font-face {
  font-family: uniicons;
  src: url('/static/uni.ttf');
}
/* #endif */

page {
  background-color: @pageBgColor;
}
</style>
