/*
 * http全局接口管理文件
*/

// 服务器地址
const URL = '192.168.2.14:8080';

require(['vue'], function(Vue) {
    // 接口
	Vue.prototype.$HTTPINTERFACE = {
		LOGIN: URL + '/api/login/',// 登录
		NAVS: URL + '' // 导航权限
	} 
});

