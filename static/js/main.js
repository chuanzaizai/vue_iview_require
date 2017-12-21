requirejs.config({
    // baseUrl:'./',
    paths:{
        text:'lib/text',
        jquery:'lib/jquery.min',
        less:'lib/less-1.6.3.min',
        vue:'lib/vue',
        iview:'lib/iview.min',
        vueresource:'lib/vue-resource-1.3.4.min',
        httpinterface: 'httpinterface',
        loading: 'loading'
    },
    shim:{
        vue: {
            exports:'Vue'
        },
        iview: [
            'vue'
        ],
        vueresource: [
            'vue'
        ]
    }
})

// 注册事件
require(['vue', 'iview', 'vueresource', 'loading'], function(Vue, iview, vueresource, loading) {
    Vue.use(iview);
    Vue.use(vueresource);
    // 全局监听器
    Vue.http.interceptors.push(function (req, next) {
        // 设置全局token
        // let token = sessionStorage.getItem("token"); 
        // let prefix = 'Bearer_';
        // if(token) {
        //   req.headers.set('Authorization', prefix + token);
        // }
        // 请求中，显示loading
        window.$loading.showLoading();
        next(function (res) {
          // console.log(res);
          // 请求成功，关闭loading
          window.$loading.hideLoading();
          // 这里也可处理全局错误方法
          let resBody = JSON.parse(res.bodyText);
          if(res.status === 200 && resBody.success){
            this.$Notice.destroy();
            this.$Notice.success({
                title: '提示',
                desc: '操作成功,么么哒！',
                duration: 2
            });
          }else{
            let msg = '';
            resBody.messages ? msg = resBody.messages : msg = '服务器罢工了,请稍后重试！';
            this.$Notice.destroy();
            // 先执行，并且每个接口都会执行一次，然后再取到接口数据
            this.$Notice.error({
                title: '提示',
                desc: msg,
                duration: 2
            });
            
          }
        })
    })
});

// 全局header
require(['./../components/header/header']);

// 全局导航
require(['./../components/nav/nav']);
