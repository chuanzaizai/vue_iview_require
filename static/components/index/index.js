/*
 * index 控制器
*/
require(['vue', 'less', 'iview', 'vueresource', 'httpinterface'], function(Vue, less, iview, vueresource, httpinterface){
    // 实例化对象
    new Vue({
        el:'#index',
        data:{
            name:'川仔仔',
            value: [20, 50],
            columns1: [
                {
                    title: '姓名',
                    key: 'name'
                },
                {
                    title: '年龄',
                    key: 'age'
                },
                {
                    title: '地址',
                    key: 'address'
                }
            ],
            data1: [
                {
                    name: '王小明',
                    age: 18,
                    address: '北京市朝阳区芍药居'
                },
                {
                    name: '张小刚',
                    age: 25,
                    address: '北京市海淀区西二旗'
                },
                {
                    name: '李小红',
                    age: 30,
                    address: '上海市浦东新区世纪大道'
                },
                {
                    name: '周小伟',
                    age: 26,
                    address: '深圳市南山区深南大道'
                }
            ]
        },
        mounted() {
            this.getIndex(); 
            this.$Message.success('这是一条成功的提示');
            console.log(this.$HTTPINTERFACE);
        },
        methods:{
            getIndex() {
                // this.$http.post('http://47.95.232.223:8089/auth/login', {}).then((res) => {
                //     console.log(res);
                // })
            }
        },
        computed:{

        },
        components: {
          
        }
    })
})