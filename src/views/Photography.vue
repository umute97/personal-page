<template>
  <div class="photography">
    <div class="header">
      <div class="header-title">
        <h1><span class="glitch">P</span>hotography</h1>
        <div>is <span class="more">more</span> than just a hobby.</div>
      </div>
      <div class="header-desc">
        <p>
          To soothe the soul and find inner peace, I like to experience magic
          moments and capture them using my DSLR. I invite you to take a look at
          a few of my favorite memories below (click on them!).
        </p>
      </div>
    </div>
    <div class="tag-selector"></div>
    <div class="gallery">
      <b-img fluid class="gallery-image" v-for="(d, i) of eximages" :key="i" :src="d"></b-img>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    eximages() {
      var paths = []
      for(const x of Array(21).keys()) {
        paths.push(`https://source.unsplash.com/featured?${(x).toString()}`)
      }
      return paths
    },
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

.photography {
  top: 100px;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  line-height: 30px;
}

.header {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  max-width: 1000px;
}

.header-title {
  text-align: center;
  margin-bottom: 50px;
  font-size: 2.2em;
}

.header-title h1 {
  font-size: 2.5em;
  font-weight: bold;
  transition: transform 150ms cubic-bezier(.57,-1.3,.34,2.28) 0ms;
}
.header-title h1:hover {
  transform: scale(1.05);
}

.glitch {
  text-shadow: 7px 7px $primary;
}

.gallery {
  $width: minmax(300px, 1fr);
  display: grid;
  gap: 2em;
  grid-template-columns: repeat(auto-fill, $width);
}

.gallery-image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
