// 引入插件
import request from '@/js_sdk/cooke-request/request/request'
import Vue from 'vue'
import checkNetwork from '@/utils/checkNetwork'
import { apiUrl } from '@/config/base'


// 全局配置
request.setConfig({
	withCredentials: true,
	baseUrl: apiUrl, // 此为测试地址，需加入到域名白名单，或者更改为您自己的线上地址即可
})

// 设置请求拦截器
request.interceptors.request(config => {
	let token = Vue.prototype.$cache.get('token')
	config.header.Authorization = token
	// 配置参数和全局配置相同，此优先级最高，会覆盖在其他地方的相同配置参数

	// 追加请求头，推荐
	// config.header['content-type'] = 'application/json';
	// config.header.token = 'token from interceptors';

	// 覆盖请求头
	// config.header = {
	// 'content-type': 'application/json',
	// 'token': 'token from interceptors'
	// }

	// return false; // 终止请求
	// return Promise.reject('error from request interceptors'); // 向外层抛出错误，用catch捕获
	return config; // 返回修改后的配置，如未修改也需添加这行
})

// 设置响应拦截器
request.interceptors.response(async res => {
	const { data, config } = res || {}
	const { networkType } = await checkNetwork.checkNetworkStatus().catch(() => { })
	data.networkType = networkType
	return Promise.resolve(data)
	// 接收请求，执行响应操作
	// 您的逻辑......

	// return false;    // 阻止返回,页面不会接收返回值
	// return {message: '自定义值，来自拦截器'};   // 返回您自定义的值，将覆盖原始返回值
	// return Promise.reject('error from response interceptors') // 向外层抛出错误，用catch捕获
	// return res; // 原样返回
})

export default request