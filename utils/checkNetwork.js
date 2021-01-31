/**
 * 网络状态定义2g||none为无网络
 * 2g
 * none
 */

export default class CheckNetwork {

    static checkNetworkStatus () {
        return new Promise((resolve, reject) => {
            uni.getNetworkType({
                fail: () => {
                    console.log('>>error');
                    resolve({ networkType: false })
                },
                success: ({ networkType }) => {
                    let _networkType = true
                    if (networkType.includes('2g') || networkType.includes('none')) {
                        _networkType = false
                        resolve({ networkType: _networkType })
                    } else {
                        resolve({ networkType: _networkType })
                    }
                }
            })
        })

    }
}