import { mapState } from 'vuex'

export default {
    data () {
        return {
            market: []
        }
    },
    computed: {
        ...mapState({
            historyTicker: state => state.base.historyTicker || []
        }),
        marketFormat () {

            if (!this.market || this.$_.isEmpty(this.market)) {
                this.market = this.historyTicker
            }
            return this.$_.map(this.market, item => {
                const { pricePrecision, price } = item || {}
                const _price = this.$utils.decimalPlaces(price, pricePrecision, 1)
                return {
                    ...item,
                    _price
                }
            })
        }
    },
    onShow () {
        this.subMarket()
    },
    methods: {
        subMarket () {
            this.$bus.subscribe({ cmd: 'sub.ticker', args: [] }, ticker => {
                this.market = this.$_.map(this.historyTicker, item => {
                    const { symbol } = item || {}
                    const obj = this.$_.find(ticker, i => i.symbol === symbol) || {}
                    const _item = this.$_.merge(item, obj)
                    return _item
                })
            })
        },

    },
    onUnload () {
        this.$bus.unsubscribe({ cmd: 'unsub.ticker', args: [] })
    }
}