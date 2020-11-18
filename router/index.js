import modules from './modules'
import Vue from 'vue'
import Router from 'uni-simple-router'
Vue.use(Router)


const router = new Router({
    encodeURI: false,
    routes: [...modules]
})

//全局路由前置守卫
router.beforeEach((to, from, next) => {
    const token = Vue.prototype.$cache.get('token') || null
    if (to.meta.auth && !token) {
        next('/pages/login/index')
        return
    }
    next()
})

export default router;
