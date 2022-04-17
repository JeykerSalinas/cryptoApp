import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    myData: [],
    myCrypto: { data: [], name: "" },
    mySearch: "",
  },
  getters: {
    filterData(state) {
      return state.myData.filter((item) => {
        return item.name.toLowerCase().includes(state.mySearch.toLowerCase());
      });
    },
  },
  mutations: {
    SET_SEARCH(state, payload) {
      state.mySearch = payload;
    },
    SET_DATA(state, payload) {
      state.myData = payload;
    },
    SET_CRYPTO(state, payload) {
      state.myCrypto = {
        data: payload.data,
        name: payload.id
          ? state.myData.find((item) => item.id === payload.id).name
          : "",
      };
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
      const emptyData = [
        {
          time_open: "-",
          time_close: "-",
          open: "-",
          high: "-",
          low: "-",
          close: "-",
          volume: "-",
          market_cap: "-",
        },
      ];
      const URL = `https://api.coinpaprika.com/v1/coins/${payload}/ohlcv/historical?start=${Math.round(
        weekAgo / 1000
      )}&end=${Math.round(now / 1000)}
      `;
      try {
        const request = await axios.get(URL);
        const data = request.data;
        data.length === 0
          ? commit("SET_CRYPTO", { data: emptyData, id: payload })
          : commit("SET_CRYPTO", { data, id: payload });
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
