<template>
  <main id="home">
    <article class="intro">
      <header>
        <h2>Hi, the name's</h2>
        <h1 class="hop">
          <span class="glitch mr">U</span>mut.
        </h1>
        <h2>Pleasure meeting you!</h2>
      </header>
      <section>
        <p>
          Long story short: I'm a charismatic particle physicist currently working
          at getting that PhD going.
        </p>
        <p>
          In love with DSLR photography, coding and solving problems in general.
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
        { icon: 'instagram', link: 'https://instagram.com/esistderboss' },
        { icon: 'github', link: 'https://github.com/umute97' },
      ],
    };
  },
};
</script>