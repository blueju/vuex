// 数据存储仓库
const state = {
    number: 0
}

// 改变 state 数据的方法
const mutations = {
    /**
     * 自减方法
     * @param {*} state 需要传入参数state,即数据存储仓库
     */
    mutations_decrement(state) {
        state.number = state.number - 1
    }
}

// 触发（改变 state 数据的方法）的方法
const actions = {
    /**
     * 触发（自减方法）的方法
     * @param {*} context 需要传入一个参数context，可以理解为Vuex实例
     */
    actions_decrement(context) {
        context.commit('mutations_decrement')
    }
}

export default {
    state,
    mutations,
    actions
}
