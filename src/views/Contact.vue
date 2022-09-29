<template>
  <div class="contact">
    <h1><span class="glitch">C</span>ontact me!</h1>
    <p>Have a question, recommendation or a wish? Say no more!</p>
    <p>I'd love to hear from you! Please, feel free to contact me via any of the following ways. Keep in mind that providing a clear topic for your inquiry makes the process much simpler.</p>
  </div>
</template>
<script>
export default {
  name: "Contact",
  title: "Contact | Umut Elicabuk"
}
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}

.contact {
  display: block;
  padding-top: 5em;
  margin: 0 auto;
  max-width: 50em;
}

.contact h1 {
  margin: 0 auto;
  text-align: center;
  font-size: 6em;
  font-weight: bold;

  transition: transform 150ms cubic-bezier(0.57, -1.3, 0.34, 2.28) 0ms;
}

.contact h1:hover {
  transform: scale(1.05);
}

.contact p {
  text-align: center;
  margin-top: 1em;
}
</style>