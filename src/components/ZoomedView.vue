<template>
  <div class="overlay" v-if="enlarged">
    <div class="topbar">
      <div class="image-title-area">
        <span class="ml-2">{{ title }}</span>
      </div>
      <div class="tag-list-area">
        <span class="mr-2">Tags:</span>
        <b-btn
          pill
          variant="primary"
          class="mx-2"
          v-for="(tag, i) in tags"
          :key="i"
          >{{ tag }}</b-btn
        >
      </div>
      <div class="close-button-area">
        <b-icon
          @click="$emit('minimizeImage')"
          class="mx-2 close-button"
          font-scale="2"
          icon="X"
        ></b-icon>
      </div>
    </div>
    <div @click="$emit('minimizeImage')" class="image-area">
      <b-img center class="image" dark :src="imagePath"></b-img>
    </div>
  </div>
</template>
<script>
import { BIcon, BIconX } from 'bootstrap-vue';

export default {
  name: 'ZoomedView',
  components: {
    BIcon,
    BIconX,
  },
  props: ['index', 'imageData', 'enlarged'],
  created() {
    // Key controls for gallery
    window.addEventListener('keydown', (event) => {
      if (this.enlarged) {
        switch (event.key) {
          case 'Escape':
            this.$emit('minimizeImage');
            break;
          case 'left arrow':
            this.$emit('prevImage');
            break;
          case 'right arrow':
            this.$emit('nextImage');
            break;

        }
      }
    });
  },
  computed: {
    title() {
      return this.imagedata[index].title;
    },
    tags() {
      return this.imagedata[index].tags;
    },
    imagePath() {
      return this.imagedata[index].imagePath;
    },
  },
};
</script>
<style lang="scss">
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}
.topbar {
  position: relative;
  display: grid;
  grid-template-areas: 'image-title tag-list close-button';
  gap: 2em;
  place-items: center;
  align-items: stretch;
  justify-items: stretch;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  height: 2em;
  background: rgba(0, 0, 0, 0.7);
  line-height: 0;
}
.image-title-area {
  grid-area: image-title;
  justify-self: start;
  align-self: center;
}
.tag-list-area {
  grid-area: tag-list;
  justify-self: center;
  align-self: center;
}
.close-button-area {
  grid-area: close-button;
  justify-self: end;
  align-self: center;
}
.close-button {
  cursor: pointer;
}
.image-area {
  width: 100%;
  height: 100%;
}
.image {
  // position: absolute;
  // top: 0;
  // bottom: 0;
  // left: 0;
  // right: 0;
  // display: block;
  // margin: auto;
  max-height: 95vh;
}
</style>
