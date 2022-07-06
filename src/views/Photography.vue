<template>
  <div class="photography">
    <div class="header">
      <h1><span class="glitch">P</span>hotography</h1>
      <h2>is <span class="more">more</span> than just a hobby.</h2>
      <p>
        To soothe the soul and expand my knowledge, I like to experience magic
        moments and capture them using my DSLR.
      </p>
      <p>
        Throughout my journey I have come to realize that there is so much more
        to photography than just pressing the shutter button. It combines art
        with technical knowledge.
      </p>
      <p>
        I invite you to take a look at a few of my favorite memories below
        (click on them!).
      </p>
    </div>
    <div class="tag-selector">
      <b-input
        v-model="searchTerm"
        type="search"
        placeholder="Search by tag"
        class="tag-selector-input"
      ></b-input>
    </div>
    <div class="gallery">
      <div class="gallery-item" v-for="(image, i) of imagedata" :key="i">
        <b-img
          v-if="image.show"
          fluid
          class="gallery-image"
          :src="image.imagePath"
          @click="enlargeImage(i)"
        ></b-img>
      </div>
    </div>
    <ZoomedView
      :index="enlargedImageIndex"
      :imagedata="imagedata"
      :enlarged="showEnlargedImage"
      @minimizeImage="minimizeImage()"
      @prevImage="prevImage()"
      @nextImage="nextImage()"
    />
  </div>
</template>

<script>
import ZoomedView from "../components/ZoomedView.vue";
import data from "../imagemeta.json";
import fuzzysort from 'fuzzysort';

export default {
  name: "Photography",
  components: { ZoomedView },
  data() {
    return {
      enlargedImageIndex: 0,
      showEnlargedImage: false,
      imagedata: data,
      searchTerm: null,
    };
  },
  computed: {
    filteredImages() {
      const taglist = this.imagedata.map(a => a.tags);
      for (let i = 0; i < taglist.length; i++) {
        console.log(this.searchTerm, taglist[i]);
        const result = fuzzysort.go(this.searchTerm, taglist[i]);
        if (result.length > 0) {
          this.imagedata[i].show = true;
        }
      }
      console.log(this.imagedata);
      return this.searchTerm;
    },
  },
  methods: {
    enlargeImage(index) {
      this.enlargedImageIndex = index;
      this.showEnlargedImage = true;
    },
    minimizeImage() {
      this.showEnlargedImage = false;
    },
    nextImage() {
      if (this.enlargedImageIndex >= this.imagedata.length - 1) {
        this.enlargedImageIndex = 0;
        return;
      }
      this.enlargedImageIndex++;
    },
    prevImage() {
      if (this.enlargedImageIndex <= 0) {
        this.enlargedImageIndex = this.imagedata.length - 1;
        return;
      }
      this.enlargedImageIndex--;
    },
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

.photography {
  display: block;
  padding-top: 3em;
  margin: 0 auto;
  max-width: 50em;
}

.header {
  text-align: center;
  max-width: 90%;
  margin: 0 auto;
  margin-bottom: 2em;
}

.header p {
  text-align: start;
}
.header h2 {
  font-size: 2em;
}

.header h1 {
  display: inline-block;
  font-size: 6em;
  font-weight: bold;

  transition: transform 150ms cubic-bezier(0.57, -1.3, 0.34, 2.28) 0ms;
}

.header h1:hover {
  transform: scale(1.05);
}

.glitch {
  text-shadow: 0.07em 0.07em $primary;
}

.gallery {
  $width: minmax(300px, 1fr);
  display: grid;
  gap: 2em;
  grid-template-columns: repeat(auto-fill, $width);
}

.gallery-item {
  overflow: hidden;
}
.gallery-image {
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: transform 400ms ease-out 0s;
}

.gallery-image:hover,
.gallery-image:focus {
  transform: scale(1.15);
}

.tag-selector-input {
  background-color: $background;
  color: $text;
}

.tag-selector-input:focus {
  background-color: $background;
  color: $text;
}

.tag-selector {
  width: 30%;
  margin-left: auto;
  margin-bottom: 1em;
}

@media (max-width: 768px) {
  .header h1 {
    font-size: 15vw;
  }
  .tag-selector {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 1em;
  }
}
</style>
