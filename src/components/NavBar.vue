<template>
  <b-navbar class="navbar" toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand to="home">Umut</b-navbar-brand>
    <b-navbar-nav class="m-auto">
      <b-nav-item class="nav-item" to="home">Home</b-nav-item>
      <b-nav-item class="nav-item" to="home">Skillset</b-nav-item>
      <b-nav-item class="nav-item" to="photography">Photography</b-nav-item>
      <b-nav-item class="nav-item" to="home">Contact</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss">
.nav-item {
    margin-left: 1rem;
    margin-right: 1rem;
    color: $text;
    position: relative;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: 0%;
  width: 0%;
  height: 1px;
  background: $text;
  transition: width 300ms;
}

.nav-item:hover::after,
.nav-item:focus::after {
  width: 100%;
}
</style>
