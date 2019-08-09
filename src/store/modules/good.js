const state = {
    good_test_data: "good_test_data"
}

const getters = {
    get_good_test_data: function (state) {
        return state.good_test_data
    }
}
 
const mutations = {
    change_good_test_data: function (state) {
        state.good_test_data = "change"
    }
}

const actions = {
    tigger_change_good_test_data: function (context) {
        context.commit('change_good_test_data')
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
