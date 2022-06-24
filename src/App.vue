<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view class="content" />
    <footer id="footer"></footer>
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

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
@import url('https://fonts.googleapis.com/css2?family=Outfit&display=swap');
#app {
  font-family: Outfit, Avenir, Helvetica, Arial, sans-serif;
  font-size: 1.5em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text;
}

::selection {
  background: $primary;
}

@media (max-width: 768px) {
#app {
  font-family: Outfit, Avenir, Helvetica, Arial, sans-serif;
  font-size: 1em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text;
}

}
</style>
