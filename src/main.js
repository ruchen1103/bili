import Vue from 'vue'
import header_top from './views/header.vue'
import router from './router'
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
    router,
    render: (h) => h(header_top),
}).$mount('#header')
