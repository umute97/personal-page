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
          I'm a <a class="breakout" href="https://github.com/umute97">software developer</a> and <span
            class="breakout">physicist</span> from Germany (he/she).
        </p>
        <p>
          Currently working on my PhD in silicon detector physics at the <a class="breakout"
            href="https://home.cern/science/experiments/cms">CMS Group</a> of the <a class="breakout"
            href="https://www.etp.kit.edu/">ETP</a> in Karlsruhe and expect to finish in <span class="breakout">February
            2025</span>.
        </p>
        <p>
          Better in person, so let's meet!
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
        { icon: 'instagram', link: 'https://instagram.com/kiss.me.bliss' },
        { icon: 'github', link: 'https://github.com/umute97' },
      ],
    };
  },
};
</script>