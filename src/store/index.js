import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    // 数据存储仓库
    state: {
        number1: 1,
        number2: 2,
        number3: 3,
        number4: 4,
        number5: 5,
    }
})


// 导出
export default store