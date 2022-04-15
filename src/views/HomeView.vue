<template>
  <div class="home">
    <CryptoTable :items="myData" />
  </div>
</template>

<script>
// @ is an alias to /src
import CryptoTable from "@/components/CryptoTable.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "HomeView",
  components: {
    CryptoTable,
  },
  computed: {
    ...mapState(["myData"]),
  },
  created() {
    this.getData();
  },
  methods: {
    ...mapActions(["getData"]),
  },
};
</script>
