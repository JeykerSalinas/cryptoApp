<template>
  <div class="home">
    <CryptoTable :items="myData" />
  </div>
</template>

<script>
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
<style scoped>
.home {
  background-color: #f9fbfd;
}
</style>
