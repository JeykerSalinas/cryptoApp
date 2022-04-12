<template>
  <div class="home">
    <CryptoTable :items="cryptos" />
  </div>
</template>

<script>
// @ is an alias to /src
import CryptoTable from "@/components/CryptoTable.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    CryptoTable,
  },
  data() {
    return {
      cryptos: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const request = await axios.get("https://api.coinpaprika.com/v1/coins");
        const data = request.data;
        this.cryptos = data;
        console.log(this.cryptos);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
