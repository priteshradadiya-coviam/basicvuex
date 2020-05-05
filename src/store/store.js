import Vue from "vue";
import Vuex from "vuex";
import * as names from "@/store/modules/todos.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: names.state,
  getters: names.getters,
  mutations: names.mutations,
  actions: names.actions
});
