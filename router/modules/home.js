// router/modules/home.js
const home = [
    {
        //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
        path: '/pages/main/pull-refresh',
        aliasPath: '/',  //对于h5端你必须在首页加上aliasPath并设置为/
        name: 'index',
        meta: {
            title: '首页',
        },

    },
    {
        path: '/pages/test/test',
        name: 'test',
        meta: {
            title: '路由传餐',
            auth: false
        },
    },
    {
        path: '/pages/main/index',
        name: 'test',
        meta: {
            title: '路由传餐',
            auth: false
        },
    },
    {
        path: '/pages/login/index',
        name: 'login',
        meta: {
            title: '登录也',
            auth: false
        },
    }
]
export default home