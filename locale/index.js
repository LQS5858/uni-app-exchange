import Vue from 'vue'
import i18n from 'vue-i18n'
import messages from './modules'
import _ from 'lodash'

Vue.use(i18n)

let lang = uni.getStorageSync('lang').data
if (!lang) {
    const res = uni.getSystemInfoSync()
    lang = res.language
    lang = _.replace(lang, '-', '_')
}
export default new i18n({
    messages,
    locale: lang,
    silentTranslationWarn: true
})

