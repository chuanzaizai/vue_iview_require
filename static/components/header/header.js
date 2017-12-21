/*
* header控制器
*/
define(['vue', 'text!./../../header/header.html'], function(Vue, headerTemplate){
    Vue.component("my-header",{
        template: headerTemplate,
        data() {
            return {
                
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