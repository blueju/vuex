import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import increment from "./modules/increment"
import decrement from "./modules/decrement"

const store = new Vuex.Store({
    modules: {
        increment,
        decrement
    }
})


// 导出
export default store