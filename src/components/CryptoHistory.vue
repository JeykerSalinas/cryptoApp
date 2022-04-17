<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <b-table
            id="my-table"
            :items="myCrypto"
            hover
            responsive
            outlined
            :head-variant="'dark'"
            :busy="myCrypto.length === 0 ? true : false"
          >
            <template #cell(time_open)="data">
              {{ dateFormat(data.item.time_open) }}
            </template>
            <template #cell(time_close)="data">
              {{ dateFormat(data.item.time_close) }}
            </template>
            <template #cell(open)="data">
              {{ currencyFormat(data.item.open) }}
            </template>
            <template #cell(high)="data">
              {{ currencyFormat(data.item.high) }}
            </template>
            <template #cell(low)="data">
              {{ currencyFormat(data.item.low) }}
            </template>
            <template #cell(close)="data">
              {{ currencyFormat(data.item.close) }}
            </template>
            <template #cell(volume)="data">
              {{ currencyFormat(data.item.volume) }}
            </template>
            <template #cell(market_cap)="data">
              {{ currencyFormat(data.item.market_cap) }}
            </template>
            <template #table-busy>
              <div class="text-center my-2">
                <b-spinner class="align-middle"></b-spinner>
                <strong>Loading...</strong>
              </div>
            </template>
          </b-table>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-center">
          <b-button variant="secondary" class="mx-auto" @click="onClick">
            Home</b-button
          >
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import router from "@/router";
import { mapMutations } from "vuex";
export default {
  name: "CryptoHistory",
  methods: {
    dateFormat(date) {
      return new Date(date).toLocaleString("US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    },
    currencyFormat(value) {
      let fraction = 0;
      value < 10 ? (fraction = 4) : value < 100 ? (fraction = 2) : 0;
      return value.toLocaleString("DE-de", {
        style: "currency",
        maximumFractionDigits: fraction,
        currency: "USD",
      });
    },
    onClick() {
      this.$router.push("/");
      this.SET_CRYPTO({ data: [], id: "" });
      console.log("click");
    },
    ...mapMutations(["SET_CRYPTO"]),
    checkData() {
      setTimeout(() => {
        if (this.myCrypto.length === 0) {
          router.push("/");
        }
      }, 8000);
    },
  },
  props: {
    myCrypto: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    this.checkData();
  },
};
</script>
<style scoped>
.td-dark {
  background-color: #343a40;
  color: #fff;
}
</style>
