import $http from '@/assets/js/http'
export default {
    base: {
        state: {
            manifest: {},
            memberKey: null,
            userInfo: {},
            rate: {},
            businessInfo: {},
            historyTicker: [],
            curCurrency: {},
            curSymbol: null
        },
        mutations: {
            SAVE_MANIFEST (state, data) {
                state.manifest = data
            },
            SAVE_CURCURRENCR (state, data) {
                state.curCurrency = data
            },
            SAVE_CURSYMBOL (state, data) {
                state.curSymbol = data
            },
            SAVE_USERINFO (state, data) {
                state.userInfo = data
            },
            SAVE_MEMBER_PUB_KEY (state, data) {
                state.memberKey = data
            },
            SAVE_BUSINESS_INFO (state, data) {
                state.businessInfo = data

            },
            SAVE_RATE (state, data) {
                state.rate = data
            },
            SAVE_HISTORY_TICKER (state, data) {
                state.historyTicker = data
            }
        },
        getters: {
            volumePrecision (state) {
                const { symbolList } = state.manifest || {}
                const { volumePrecision } = _.find(symbolList, item => item.symbol === state.curSymbol) || {}
                return volumePrecision
            },
            pricePrecision (state) {
                const { symbolList } = state.manifest || {}
                const { pricePrecision } = _.find(symbolList, item => item.symbol === state.curSymbol) || {}
                return pricePrecision
            }
        },
        actions: {
            async fetchBusinessInfo ({ commit }, id) {
                $http.get(`/v1/otc/shop/get/${id}`).then(data => {
                    commit('SAVE_BUSINESS_INFO', data)
                })
            },
            async saveMemberInfo ({ commit, dispatch }) {
                const token = Vue.prototype.$cache.get('token')
                if (!token || Object.is(token, 'null')) return
                const userInfo = await $http.get('v1/member/getCurrentMember').catch(() => {
                    const id = setTimeout(() => {
                        this.saveMemberInfo()
                        clearTimeout(id)
                    }, 2000);
                })
                const { id: memberId } = userInfo || {}
                dispatch('fetchBusinessInfo', memberId)
                commit('SAVE_USERINFO', userInfo)
            },
            saveMemberPublicKey ({ commit }) {
                const token = Vue.prototype.$cache.get('token')
                if (!token || Object.is(token, 'null')) return
                $http.get('v1/member/getPublicKey').then(key => {
                    commit('SAVE_MEMBER_PUB_KEY', key)
                }).catch(() => {
                    const id = setTimeout(() => {
                        this.saveMemberPublicKey()
                        clearTimeout(id)
                    }, 5000);
                })
            }
        }
    }
}