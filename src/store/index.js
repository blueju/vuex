import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    // 数据存储仓库
    state: {
        number: 0
    },
    // 改变 state 数据的方法，
    mutations: {
        /**
         * 自增方法
         * @param {*} state 需要传入参数state，即数据存储仓库
         */
        mutations_increment(state) {
            state.number = state.number + 1
        }
    },
    // 触发（改变 state 数据的方法）的方法
    actions: {
        /**
         * 触发（自增方法）的方法
         * @param {*} context 需要传入一个参数context，可以理解为Vuex实例
         */
        actions_increment(context) {
            context.commit('mutations_increment')
        }
    }
})


// 导出
export default store