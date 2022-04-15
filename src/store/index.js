import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    myData: [],
    myCrypto: [],
  },
  getters: {},
  mutations: {
    SET_DATA(state, payload) {
      state.myData = payload;
    },
    SET_CRYPTO(state, payload) {
      state.myCrypto = payload;
    },
  },
  actions: {
    async getData({ commit }) {
      try {
        const req = await axios("https://api.coinpaprika.com/v1/coins");
        const data = await req.data;
        commit("SET_DATA", data);
      } catch (error) {
        console.error(error);
      }
    },
    async getCrypto({ commit }, payload) {
      const now = new Date().getTime();
      const weekAgo = new Date(now - 7 * 24 * 60 * 60 * 1000).getTime();
      const URL = `https://api.coinpaprika.com/v1/coins/${payload}/ohlcv/historical?start=${Math.round(
        weekAgo / 1000
      )}&end=${Math.round(now / 1000)}
      `;
      try {
        const request = await axios.get(URL);
        const data = request.data;
        commit("SET_CRYPTO", data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
