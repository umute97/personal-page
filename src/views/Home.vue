<template>
  <div class="home">
    <div class="short-desc">
      <div class="title-short-desc">
        <div class="first-line-title-short-desc">Hi, the name's</div>
        <h1 class="second-line-title-short-desc">
          <span class="glitch">U</span>mut.
        </h1>
        <div class="third-line-title-short-desc">Pleasure meeting you!</div>
      </div>
      <p class="text-short-desc">
        Long story short: I'm a charismatic particle physicist currently working
        at getting that PhD going. <br />
        In love with DSLR photography, coding and solving problems in general.
        <br /><br />
        Better in person, so let's meet!
      </p>
      <div class="socials-short-desc">
        <span class="mr-2">Follow me on</span>
        <a class="hop" v-for="(social, i) in socials" :key="i" :href="social.link">
          <b-icon class="mx-2" :icon="social.icon"></b-icon>
        </a>
      </div>
    </div>
    <b-img
      fluid
      class="profile-picture"
      alt="That's me!"
      src="@/assets/images/profile-picture.jpg"
    ></b-img>
    <footer class="footer"></footer>
  </div>
</template>

<script>
import { BIcon, BIconInstagram, BIconGithub } from "bootstrap-vue";
export default {
  name: "Home",
  components: {
    BIcon,
    BIconInstagram,
    BIconGithub,
  },
  data() {
    return {
      socials: [
        { icon: "instagram", link: "https://instagram.com/esistderboss" },
        { icon: "github", link: "https://github.com/umute97" },
      ],
    };
  },
};
</script>

<style lang="scss">

.hop {
  display: inline-block;
  color: $text;
  transition: transform 120ms cubic-bezier(.42,-0.47,.74,.05) 0ms;
}

.hop:hover,
.hop:focus {
  color: $primary;
  transform: scale(1.2);
  outline: none;
}

.home {
  display: grid;
  top: 250px;
  margin-left: auto;
  margin-right: auto;
  max-width: 940px;
  grid-template-areas:
    "short-desc profile-pic"
    "footer footer";
  grid-template-columns: 1fr 1fr;
  gap: 2em;
  line-height: 25px;
}

.short-desc {
  display: grid;
  grid-area: short-desc;
  grid-template-areas:
    "short-desc-title"
    "short-desc-text"
    "short-desc-socials";
  height: fit-content;
  align-self: center;
}

.title-short-desc {
  display: grid;
  grid-template-areas:
    "first-line"
    "second-line"
    "third-line";
  grid-area: short-desc-title;
  text-align: start;
  font-size: 2.2em;
  line-height: 0px;
  padding-bottom: 1em;
}

.text-short-desc {
  grid-area: short-desc-text;
  text-align: start;
  line-height: 30px;
}

.socials-short-desc {
  grid-area: short-desc-socials;
}

.profile-picture {
  grid-area: profile-pic;
  border: 1px solid white;
  border-radius: 2rem;
}

.first-line-title-short-desc {
  grid-area: first-line;
}

.second-line-title-short-desc {
  grid-area: second-line;
  font-size: 3.5em;
  font-weight: bold;
  text-align: start;

  transition: transform 150ms cubic-bezier(.57,-1.3,.34,2.28) 0ms;
}

.second-line-title-short-desc:hover {
  transform: 
    scale(1.05);
}

.third-line-title-short-desc {
  grid-area: third-line;
}

.footer {
  grid-area: footer;
}

.glitch {
  text-shadow: 7px 7px $primary;
}
</style>
