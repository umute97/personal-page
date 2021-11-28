<template>
  <b-navbar class="navbar" toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand to="home">Umut</b-navbar-brand>
    <b-navbar-nav class="m-auto">
      <b-nav-item id="nav-item" to="home">Home</b-nav-item>
      <b-nav-item id="nav-item" to="home">Skillset</b-nav-item>
      <b-nav-item id="nav-item" to="home">Photography</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss">
#nav-item {
    margin-left: 1rem;
    margin-right: 1rem;
    color: $text;
}
</style>
