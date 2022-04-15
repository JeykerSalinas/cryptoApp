<template>
  <div id="app">
    <b-navbar variant="dark" type="dark" class="px-5">
      <b-navbar-brand tag="h1" class="mb-0">BootstrapVue</b-navbar-brand>
      <b-navbar-nav class="ms-auto">
        <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <router-view />
  </div>
</template>

<style lang="scss">
body {
  font-family: "Montserrat", sans-serif;
  color: #05194e;
  background-color: #fafafa;
}
</style>
