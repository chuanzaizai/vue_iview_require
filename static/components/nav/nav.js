/*
* nav 控制器
*/
define(['vue', 'text!./../../nav/nav.html'], function(Vue, navTemplate){
    Vue.component("my-nav",{
        template: navTemplate,
        data() {
            return {
                title: '大家好，我是川仔仔'
            }
        },
        mounted() {

        },
        methods:{
            test() {

            }
        },
        computed:{

        }
    });
})