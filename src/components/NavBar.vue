<template>
  <nav id="navbar">
    <article>
      <router-link to="home">
        <logo />
      </router-link>
      <ul>
        <li><router-link to="home">Home</router-link></li>
        <li><router-link to="skills">Skillset</router-link></li>
        <li><router-link to="photography">Photography</router-link></li>
        <li><router-link to="contact">Contact</router-link></li>
      </ul>
    </article>
  </nav>
</template>

<script lang="ts">
import Logo from "@/assets/logo.vue";

export default {
  name: "NavBar",
  components: {
    Logo,
  }
};
</script>

<style></style>
