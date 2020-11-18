import _ from 'lodash'
import BigNumber from 'bignumber.js'
import $http from '@/assets/js/http'
import NodeRsa from 'node-rsa'

export default {
  plus (x1, x2, precision = 2) {
    if (x1 === 0 && x2 === 0) return 0
    if (!_.isNumber(Number(x1)) || !_.isNumber(Number(x2))) return '--'
    let _x1 = new BigNumber(x1)
    let sum = _x1.plus(x2)
    sum = sum.toFixed(precision)
    return sum
  },
  minus (x1, x2, precision = 2) {
    if (x1 === 0 && x2 === 0) return 0
    // if (!x1 || !x2) return '--'
    if (!_.isNumber(Number(x1)) || !_.isNumber(Number(x2))) return '--'
    let _x1 = new BigNumber(x1)
    let sum = _x1.minus(x2)
    sum = sum.toFixed(precision)
    return sum
  },
  times (x1, x2, precision = 2) {
    if (x1 === 0 || x2 === 0) return 0
    if (!x1 || !x2) return '--'
    if (!_.isNumber(Number(x1)) || !_.isNumber(Number(x2))) return '--'
    let _x1 = new BigNumber(x1)
    let sum = _x1.multipliedBy(x2)
    sum = sum.toFixed(precision)
    return sum
  },
  div (x1, x2, precision = 2) {
    if (x1 === 0 || x2 === 0) return 0
    if (!x1 || !x2) return '--'
    if (!_.isNumber(Number(x1)) || !_.isNumber(Number(x2))) return '--'
    let _x1 = new BigNumber(x1)
    let sum = _x1.div(x2)
    sum = sum.toFixed(precision)
    return sum
  },
  /*
  保留小数字精度，根据db决定上四舍五入还是下舍弃
    4--四舍五入
    1---向下舍入
    */
  decimalPlaces (num, precision = 2, db = 4, fmt = true) {
    if (num === 0) return 0
    if (!num) return '--'
    if (!_.isNumber(Number(num))) return '--'
    let _num = new BigNumber(num)
    const precisionNum = _num.toFixed(precision, db)
    const _precisionNum = new BigNumber(precisionNum).toFormat(precision)
    const __precisionNum = fmt ? _precisionNum : precisionNum
    return __precisionNum
  },
  getDecimalLength (num) {
    if (!num) return
    if (typeof num !== 'string') {
      num = num + ''
    }
    let str = num.split('.')[1]
    let strLength = str ? str.length : ''
    return strLength || ''
  },
  async getPublicKey (type) {
    return await $http.get(`v1/common/getPublicKey/${type}`).catch(err => {
      const { error, message } = err || {}
      uni.showToast({
        title: error || message
      })
    })
  },
  async setNodeRsa (key, pwd) {
    const _key = new NodeRsa(key)
    _key.setOptions({
      encryptionScheme: 'pkcs1'
    })
    return _key.encrypt(pwd, 'base64', 'utf8')
  }
}
