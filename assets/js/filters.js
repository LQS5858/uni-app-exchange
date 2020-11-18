import moment from 'moment'
import Store from '@/store'
import bituanUtils from '@/utils'
export default {
    date (time, fmt = 'YYYY-MM-DD HH:mm:ss') {
        if (!time) return '--'
        return moment(time).format(fmt)
    },
    priceRmb (num = 0, precision = 2, coin = 'USDT') {
        const { symbol: currcyPrix = '¥', id: currcy = 'CNY' } = Store.state.base.activeCurrency || {}
        const rateObj = Store.state.base.rate || {}
        if (!num) return `≈${currcyPrix}--`
        if (num === '--') return `≈${currcyPrix}${num}`
        if (+num === 0) return `≈${currcyPrix}${num}`
        let rateValue = 6.85
        if (!rateObj) return `${currcyPrix}--`
        if (currcy === 'USD') rateValue = 1
        else if (rateObj[currcy] && rateObj[currcy]['USDT'] === 0) {
            rateValue = rateObj[currcy] && rateObj[currcy]['USDT']
        } else if (!(rateObj[currcy] && rateObj[currcy]['USDT'])) {
            rateValue = rateObj[currcy] && rateObj[currcy]['USD'] && rateObj[currcy]['USD']
        } else {
            rateValue = rateObj[currcy] && rateObj[currcy]['USDT']
        }
        let coinrate = 1
        if (coin === 'USDT') {
            coinrate = 1
        } else {
            coinrate = (rateObj['USDT'] && rateObj['USDT'][coin]) || 1
        }
        let rmb = bituanUtils.times(+rateValue, +num, precision)
        rmb = bituanUtils.times(rmb, +coinrate, precision)
        rmb = bituanUtils.decimalPlaces(rmb, precision, 1)
        return `≈${currcyPrix}${rmb}`
    },
}