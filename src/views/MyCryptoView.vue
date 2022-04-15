<template>
  <div>
    <h1>This is a crypto history</h1>
    <CryptoHistory :myCrypto="myCrypto" />
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
