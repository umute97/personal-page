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
    <div class="tag-selector"></div>
    <div class="gallery">
      <div class="gallery-item" v-for="(image, i) of images" :key="i">
        <b-img
          fluid
          class="gallery-image"
          :src="image"
          @click="enlargeImage(i)"
        ></b-img>
      </div>
    </div>
    <ZoomedView
      :index="enlargedImageIndex"
      :imageData="imagedata"
      :enlarged="showEnlargedImage"
      @minimizeImage="minimizeImage()"
      @prevImage="prevImage()"
      @nextImage="nextImage()"
    />
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
        enlargedImageIndex: 0,
        showEnlargedImage: false,
        imagedata: data,
      };
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
          this.showEnlargedImage = true;
        },
        minimizeImage() {
          this.showEnlargedImage = false;
        },
        nextImage() {
          this.enlargedImageIndex++;
        },
        prevImage() {
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

@media (max-width: 768px) {
  .header h1 {
    font-size: 15vw;
  }
}
</style>
