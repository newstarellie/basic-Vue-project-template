
// 定义状态对象
const state = {
  checkoutStatus: false,
};

// 定义 getters 对象
const getters = {

};

// 定义 actions 对象
const actions = {

};

// 定义 mutations 对象
const mutations = {
  changeCheckoutStatus(state, data) {
    state.checkoutStatus = data;
    console.log(state.checkoutStatus)
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
}