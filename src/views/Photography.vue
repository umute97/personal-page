<template>
  <div class="photography">
    <div class="header">
      <div class="header-title">
        <h1><span class="glitch">P</span>hotography</h1>
        <div>is <span class="more">more</span> than just a hobby.</div>
      </div>
      <div class="header-desc">
        <p>
          To soothe the soul and expand my knowledge, I like to experience magic
          moments and capture them using my DSLR.
          <br />
          Throughout my journey I have come to realize that there is so much 
          more to photography than just pressing the shutter button. It combines 
          art with technical knowledge.
          <p />
          I invite you to take a look at a few of my favorite memories below
          (click on them!).
        </p>
      </div>
    </div>
    <div class="tag-selector"></div>
    <div class="gallery">
      <div class="gallery-item" v-for="(image, i) of images" :key="i">
        <b-img fluid class="gallery-image" :src="image" @click="enlargeImage(i)"></b-img>
      </div>
    </div>
    <ZoomedView :imagePath="enlargedImagePath" :title="enlargedTitle" :enlarged="showEnlargedImage" :tags="enlargedTags" @minimizeImage="minimizeImage()"/>
  </div>
</template>

<script>
import ZoomedView from '../components/ZoomedView.vue';
import data from "../imagemeta.json";
export default {
    name: 'Photography',
    components: {ZoomedView},
    data() {
      return {
        enlargedImagePath: "",
        enlargedTitle: "",
        enlargedTags: [],
        showEnlargedImage: false,
        imagedata: [],
      };
    },
    async created() {
      this.imagedata = data;
    },
    computed: {
        images() {
            var paths = [];
            for (const x of this.imagedata) {
                paths.push(x.imagePath);
            }
            return paths;
        },
    },
    methods: {
        enlargeImage(index) {
            this.enlargedImagePath = this.images[index];
            this.enlargedTitle = this.imagedata[index].title;
            this.enlargedTags = this.imagedata[index].tags;
            this.showEnlargedImage = true;
        },
        minimizeImage() {
          this.showEnlargedImage = false;
        }
    },
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
  transition: transform 150ms cubic-bezier(0.57, -1.3, 0.34, 2.28) 0ms;
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
</style>
