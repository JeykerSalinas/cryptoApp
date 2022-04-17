<template>
  <div>
    <h2 class="text-center py-3">{{ myCrypto.name }}</h2>
    <CryptoHistory :myCrypto="myCrypto.data" />
  </div>
</template>
<script>
import CryptoHistory from "@/components/CryptoHistory.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "CryptoView",
  components: {
    CryptoHistory,
  },
  data() {
    return {
      cryptoId: this.$route.params.id,
    };
  },
  computed: {
    ...mapState(["myCrypto"]),
  },
  created() {
    this.getCrypto(this.cryptoId);
  },
  methods: {
    ...mapActions(["getCrypto"]),
  },
};
</script>
