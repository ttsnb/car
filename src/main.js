import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
// import less from 'less-loader'
import 'ant-design-vue/dist/antd.css';
import axios from 'axios'

import { send, carsend, parkfind } from './network/home'

Vue.prototype.$bus = new Vue()
Vue.use(Antd)
    // Vue.use(less)

Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api' //关键代码

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')


// send({
//     where: { id_num: "陕A12345" },
//     newFields: {
//         id_num: "陕A12345",
//         apartment: "海棠12",
//         name: "刘",
//         tel: "158"
//     }
// }).then(res => {
//     console.log('res', res);
// }).catch(err => {
//     console.log('err')
// })

// parkfind().then(res => {
//     console.log('res', res);
// }).catch(err => {
//     console.log('err')
// })