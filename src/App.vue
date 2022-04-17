<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>
<style>
#app {
  font-family: "Montserrat", sans-serif;
  color: #05194e;
  box-sizing: border-box;
}

.table {
  background-color: #fafafa;
}
</style>
