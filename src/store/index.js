import Vue from "vue";
import Vuex from "vuex";
import * as types from "./types";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    formula: "",
    history: []
  },
  mutations: {
    setHistory(state, payload) {
      state.history = payload.history;
    },
    setFormula(state, payload) {
      state.formula = payload.formula;
    },
    add(state, payload) {
      state.formula += payload.value;
    },
    delete(state, payload) {
      const formula = state.formula.slice(0, state.formula.length - 1);

      state.formula = formula;
    },
    clear(state, payload) {
      state.formula = "";
    },
    enter(state, payload) {
      state.formula = payload.result;
      state.history = payload.history;
    }
  },
  actions: {
    setHistory(context, payload) {
      context.commit(types.SET_HISTORY, payload);
    },
    setFormula(context, payload) {
      context.commit(types.SET_FORMULA, payload);
    },
    add(context, payload) {
      context.commit(types.ADD, payload);
    },
    delete(context, payload) {
      context.commit(types.DELETE, payload);
    },
    clear(context, payload) {
      context.commit(types.CLEAR, payload);
    },
    enter(context, payload) {
      context.commit(types.ENTER, payload);
    }
  }
});

export default store;
