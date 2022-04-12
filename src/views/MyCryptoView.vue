<template>
  <div>
    <h1>This is a crypto history</h1>
    <CryptoTable :items="myCrypto" />
  </div>
</template>
<script>
import axios from "axios";
import CryptoTable from "@/components/CryptoTable.vue";
export default {
  name: "CryptoView",
  components: {
    CryptoTable,
  },
  data() {
    return {
      myCrypto: [],
      cryptoId: this.$route.params.id,
    };
  },
  created() {
    this.getCrypto();
  },
  methods: {
    async getCrypto() {
      const now = new Date().getTime();
      const weekAgo = new Date(now - 7 * 24 * 60 * 60 * 1000).getTime();
      console.log(Math.round(now / 1000));
      console.log(Math.round(weekAgo / 1000));
      const URL = `https://api.coinpaprika.com/v1/coins/${
        this.cryptoId
      }/ohlcv/historical?start=${Math.round(weekAgo / 1000)}&end=${Math.round(
        now / 1000
      )}
      `;
      try {
        const request = await axios.get(URL);
        const data = request.data;
        this.myCrypto = data.reverse();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
