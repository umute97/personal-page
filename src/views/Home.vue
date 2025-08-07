<template>
  <main id="home">
    <article class="intro">
      <header>
        <h2>Hi, my name is</h2>
        <h1 class="hop">
          <span class="glitch mr">U</span>mut.
        </h1>
        <h2>Pleasure meeting you!</h2>
      </header>
      <section>
        <p>
          I'm a <a class="breakout" href="https://github.com/umute97">developer</a> and <span
            class="breakout">physicist</span> based in Karlsruhe, Germany (he/she).
        </p>
        <p>
          After acquiring my PhD in physics at <a href="https://www.kit.edu" class="breakout">KIT</a> in 2025, I've began my career in data science.
          Currently working as a data scientist at <a class="breakout" href="https://xentral.com">xentral</a>.
        </p>
        <p>
          Easy to talk to, so let's meet!
        </p>
        <p>
          Follow me on
          <a class="hop" v-for="(social, i) in socials" :key="i" :href="social.link">
            <icon :name="social.icon" />
          </a>
        </p>
      </section>
    </article>
    <img src="@/assets/images/profile-picture.jpg" alt="That's me!">
  </main>
</template>

<script lang="ts">
import Icon from '@/components/Icon.vue';
export default {
  name: 'Home',
  title: "Home | Umut Elicabuk",
  components: {
    Icon,
  },
  data() {
    return {
      socials: [
        { icon: 'linkedin', link: 'https://www.linkedin.com/in/umut-elicabuk-19b470276/' },
        { icon: 'github', link: 'https://github.com/umute97' },
      ],
    };
  },
};
</script>