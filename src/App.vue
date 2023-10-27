<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view class="main-content" />
    <footer id="footer"></footer>
  </div>
</template>
<script lang="ts">
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
@import url('@/assets/main.css');
</style>