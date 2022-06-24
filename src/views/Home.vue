<template>
  <div class="home">
    <div class="short-desc">
      <h2>Hi, the name's</h2>
      <h1 class="second-line-title-short-desc">
        <span class="glitch">U</span>mut.
      </h1>
      <h2>Pleasure meeting you!</h2>
      <p>
        Long story short: I'm a charismatic particle physicist currently working
        at getting that PhD going. <br />
        In love with DSLR photography, coding and solving problems in general.
        <br /><br />
        Better in person, so let's meet!
      </p>
      <span class="mr-2">Follow me on</span>
      <a
        class="hop"
        v-for="(social, i) in socials"
        :key="i"
        :href="social.link"
      >
        <b-icon class="mx-2" :icon="social.icon"></b-icon>
      </a>
    </div>
    <b-img alt="That's me!" src="@/assets/images/profile-picture.jpg"></b-img>
  </div>
</template>

<script>
import { BIcon, BIconInstagram, BIconGithub } from 'bootstrap-vue';
export default {
  name: 'Home',
  components: {
    BIcon,
    BIconInstagram,
    BIconGithub,
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

<style scoped lang="scss">
.hop {
  display: inline-block;
  color: $text;
  transition: transform 120ms cubic-bezier(0.42, -0.47, 0.74, 0.05) 0ms;
}

.hop:hover,
.hop:focus {
  color: $primary;
  transform: scale(1.2);
  outline: none;
}

.home {
  padding-top: 4em;
  display: grid;
  grid-auto-flow: column;
  margin: 0 auto;
  max-width: 50em;
  gap: 3em;
}

.short-desc h2 {
  font-size: 2em;
}

.short-desc h1 {
  display: inline-block;
  font-size: 8em;
  font-weight: bold;
  text-align: start;

  transition: transform 150ms cubic-bezier(0.57, -1.3, 0.34, 2.28) 0ms;
}

.short-desc h1:hover {
  transform: scale(1.05);
}

img {
  max-height: 28em;
  border: 1px solid white;
  border-radius: 2rem;
}

.glitch {
  text-shadow: 0.07em 0.07em $primary;
}

@media (max-width: 768px) {
  .home {
    display: block;
    margin: 0 auto;
    max-width: 30em;
    text-align: center;
  }

  img {
    margin: 2em auto;
  }
}
</style>
