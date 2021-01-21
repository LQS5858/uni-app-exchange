<template>
  <view>
    <!-- <image src=""></image> -->
    <Marquee :broadcastData="broadcastData"
             broadcastType="text"
             :viewHeight="50"
             :broadcastStyle="{speed:20}"
             direction="top"></Marquee>
  </view>
</template>
<script>
import subMarket from '@/assets/mixins/subMarket'
import Marquee from '@/components/marquee/marquee'
import { mapState } from 'vuex'
export default {
  name: "home",
  data () {
    return {
      broadcastData: []
    };
  },
  components: { Marquee },
  mixins: [subMarket],
  computed: {
    ...mapState({
      manifest: state => state.base.manifest || {}
    }),
    headerUrl () {
      const { url } = this.manifest || {}
      const { h5Url } = url || {}
      const str = String(h5Url) && String(h5Url).split('.')
      return str
    }
  },
  watch: {
    headerUrl (val) {
      if (!val) return
      this.setTitle()
      this.fetchBannerList(true)
    }
  },
  methods: {
    async fetchBannerList (showError) {
      const params = {
        languageCode: this.$i18n.locale,
        site: '亚太站'
      }
      const arr = await this.$http.post('v1/site/getBannerList', params, { showError }).catch(() => {
        const id = setTimeout(() => {
          this.fetchBannerList()
          clearTimeout(id)
        }, 5000);
      })
      this.initList(arr)
    },
    initList (list) {
      if (!list || this.$_.isEmpty(list)) return
      list.forEach(element => {
        const { title } = element || {}
        this.broadcastData.push(title)

      });
    },
    setTitle () {
      const [, header, headerPro] = this.headerUrl || []
      const _header = `${header}.${headerPro}`
      uni.setNavigationBarTitle({
        title: _header
      });
    }
  },

  onShow () {
  }
}
</script>
<style lang="less" scoped>
</style>