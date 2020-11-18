import Vue from 'vue'
import pako from 'pako'
import _ from 'lodash'
export default new Vue({
    data () {
        return {
            url: '',
            socketOpen: false,
            socketUnsubQueue: [],
            socketSubQueue: [],
            timeId: null,
            pingTime: null
        }
    },
    destoryed () {
        this.socketOpen = false
        clearInterval(this.timeId)
        clearInterval(this.pingTime)
    },
    methods: {
        init (url) {
            this.url = url

            this.connectSocket()
        },
        connectSocket () {
            uni.connectSocket({
                url: this.url,
                success: () => { },
                fail: () => {
                    const id = setTimeout(() => {
                        this.connectSocket()
                        clearTimeout(id)
                    }, 4000);
                }
            })
            uni.onSocketOpen(() => {
                console.log('WebSocket连接已打开！');
                this.socketOpen = true
                this.initUnsubQueue()
                this.pingTime = setInterval(() => {
                    uni.sendSocketMessage({
                        data: `ping:${Date.now()}`
                    });
                }, 4500)

            });
            uni.onSocketClose(() => {
                console.log('WebSocket 已关闭！');
                this.socketOpen = false
                const id = setTimeout(() => {
                    this.socketUnsubQueue = _.merge(this.socketUnsubQueue, this.socketSubQueue)
                    this.connectSocket()
                }, 2000);
            });
            uni.onSocketError(() => {
                console.log('WebSocket连接打开失败，请检查！');
                this.socketOpen = false
                const id = setTimeout(() => {
                    this.socketUnsubQueue = _.merge(this.socketUnsubQueue, this.socketSubQueue)
                    this.connectSocket()
                }, 2000);
            });
            uni.onSocketMessage((event) => {
                if (event.data === 'ping') return
                const resultZip = pako.inflate(new Uint8Array(event.data), { to: 'string' })
                const { data, cmd } = JSON.parse(resultZip)
                if (!data || cmd === 'pong') return
                const _sockeSubQueue = _.map(this.socketSubQueue, item => {
                    const { params } = item || {}
                    const { args, cmd } = params || {}
                    const arr = args && args.join('.')
                    return {
                        ...item,
                        params: {
                            ...params,
                            _cmd: arr ? `${cmd}.${arr}` : cmd
                        }
                    }
                })
                const { callback } = _.find(_sockeSubQueue, v => {
                    const { params } = v || {}
                    const { _cmd } = params || {}
                    return _cmd === cmd
                })
                if (callback && callback instanceof Function) callback(data)
                // console.log('收到服务器内容：', _sockeSubQueue, callback, resultZip);
            });
        },
        initUnsubQueue () {
            this.timeId = setInterval(() => {
                if (!this.socketUnsubQueue || !this.socketUnsubQueue.length) return
                while (this.socketUnsubQueue.length) {
                    const item = this.socketUnsubQueue.shift()
                    if (!item) break
                    const { params, callback } = item
                    this.subscribe(params, callback)
                }

            }, 3000);
        },
        subscribe (params = { cmd: 'sub.depth', args: ['btcusdt', 0, 100] }, callback) {
            if (!params) return
            if (!(params instanceof Object)) console.error('参数错误')
            if (this.socketOpen) {
                const _params = JSON.stringify(params)
                uni.sendSocketMessage({
                    data: _params
                });
                this.socketSubQueue.push({ params, callback })
                this.socketSubQueue = _.uniqWith(this.socketSubQueue, _.isEqual)
            } else {
                this.socketUnsubQueue.push({ params, callback })
                this.socketUnsubQueue = _.uniqWith(this.socketUnsubQueue, _.isEqual)
            }
        },
        unsubscribe (params) {
            if (!params) return
            const _params = JSON.stringify(params)
            uni.sendSocketMessage({
                data: _params
            })
            const { cmd } = params || {}
            if (!cmd) return
            const _cmd = cmd.split('un')[1]
            params.cmd = _cmd
            this.socketSubQueue = _.reject(this.socketSubQueue, item => {
                const { params: _params } = item || {}
                const condition = _.isEqual(_params, params)
                return condition
            })
            this.socketUnsubQueue = _.reject(this.socketUnsubQueue, item => {
                const { params: _params } = item || {}
                const condition = _.isEqual(_params, params)
                return condition
            })
        }
    }
})
