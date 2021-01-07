import Vue from 'vue'
import App from './App'
import Http from './assets/js/http'
import router from './router'
import store from './store'
import i18n from './locale'
import Filters from './assets/js/filters'
import cache from './utils/cache'
import Bus from './assets/js/bus'
import ListNetWork from "@/components/com/list-network";
import _ from 'lodash'
import Utils from '@/utils'
import { RouterMount } from 'uni-simple-router'
import RippleDirective from 'vue-ripple-directive'
Vue.use(cache)
Vue.use(ListNetWork)
Vue.directive('ripple', RippleDirective);
RippleDirective.color = 'rgba(0, 0, 0, 0.2)'; //自定义水波纹颜色

Vue.config.productionTip = false
Vue.prototype._i18n = i18n
Vue.prototype.$http = Http
Vue.prototype.$bus = Bus
Vue.prototype.$_ = _
Vue.prototype.$utils = Utils

App.mpType = 'app'

for (let key in Filters) {
	Vue.filter(key, Filters[key])
}

const app = new Vue({
	...App,
	store,
	i18n
})
// #ifdef H5
RouterMount(app, '#app');
// #endif
// #ifndef H5
app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif
