<template>
  <div>
    <b-navbar type="ligth" class="px-5 border-bottom shadow-sm">
      <b-navbar-brand tag="h1" class="mb-0">Cryptocurrency</b-navbar-brand>
      <b-navbar-nav class="ms-auto align-items-center">
        <b-icon-search class="mx-2"></b-icon-search>
        <input
          type="text"
          class="form form-control mh-auto"
          @keyup="searchData"
          v-model="search"
          placeholder="Search Crypto"
        />
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "NavBar",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    ...mapMutations(["SET_SEARCH"]),
    searchData() {
      this.$route.name === "home"
        ? this.SET_SEARCH(this.search)
        : this.$router.push({ path: "/" }) && this.SET_SEARCH(this.search);
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #05194e;
}

.navbar-brand {
  font-size: 2.5rem;
  font-weight: bold;
}
</style>
