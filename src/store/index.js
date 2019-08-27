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
    },
    // getters
    getters: {
        number1(state) {
            return state.number1
        },
        number2(state) {
            return state.number2
        },
        number3(state) {
            return state.number3
        },
        number4(state) {
            return state.number4
        },
        number5(state) {
            return state.number5
        },
    }
})


// 导出
export default store