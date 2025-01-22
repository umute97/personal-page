<template>
  <main id="photography">
    <article class="intro">
      <header>
        <h1><span class="glitch">P</span>hotography</h1>
        <h2>is more than just a hobby.</h2>
      </header>
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
        I invite you to take a look at a few of my favorite memories below.
      </p>
    </article>
    <article class="gallery">
      <div class="gallery-item" v-for="(image, i) of images" :key="i">
        <img class="gallery-image" :src="image" /> <!-- @click="enlargeImage(i)" /> -->
      </div>
    </article>
    <!-- <ZoomedView :index="enlargedImageIndex" :imagedata="imagedata" :enlarged="showEnlargedImage"
      @minimizeImage="minimizeImage()" @prevImage="prevImage()" @nextImage="nextImage()" /> -->
  </main>
</template>

<script lang="ts">
// import ZoomedView from "../components/ZoomedView.vue";
import data from "@/imagemeta.json";

export default {
  name: "Photography",
  title: "Photography | Umut Elicabuk",
  // components: { ZoomedView },
  data() {
    return {
      // enlargedImageIndex: 0,
      // showEnlargedImage: false,
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
    // enlargeImage(index: number) {
    //   this.enlargedImageIndex = index;
    //   this.showEnlargedImage = true;
    // },
    // minimizeImage() {
    //   this.showEnlargedImage = false;
    // },
    // nextImage() {
    //   if (this.enlargedImageIndex >= this.imagedata.length - 1) {
    //     this.enlargedImageIndex = 0;
    //     return;
    //   }
    //   this.enlargedImageIndex++;
    // },
    // prevImage() {
    //   if (this.enlargedImageIndex <= 0) {
    //     this.enlargedImageIndex = this.imagedata.length - 1;
    //     return;
    //   }
    //   this.enlargedImageIndex--;
    // },
  },
};
</script>
