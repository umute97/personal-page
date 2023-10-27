<template>
  <div class="overlay" v-if="enlarged">
    <div class="topbar">
      <div class="image-title-area">
        <span>{{ title }}</span>
      </div>
      <div class="tag-list-area">
        <span class="mr-2">Tags:</span>
        <!-- <b-btn
          pill
          variant="primary"
          class="mx-2"
          v-for="(tag, i) in tags"
          :key="i"
          >{{ tag }}</b-btn
        > -->
      </div>
      <div class="close-button-area">
        <!-- <b-icon
          @click="$emit('minimizeImage')"
          class="mx-2 close-button"
          font-scale="2"
          icon="X"
        ></b-icon> -->
      </div>
    </div>
    <div @click="$emit('minimizeImage')" class="image-area">
      <img :src="imagePath" />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'ZoomedView',
  props: ['index', 'imagedata', 'enlarged'],
  created() {
    // Key controls for gallery
    window.addEventListener('keydown', (event) => {
      if (this.enlarged) {
        switch (event.key) {
          case 'Escape':
            this.$emit('minimizeImage');
            break;
          case 'ArrowLeft':
            this.$emit('prevImage');
            break;
          case 'ArrowRight':
            this.$emit('nextImage');
            break;

        }
      }
    });
  },
  computed: {
    title() {
      return this.imagedata[this.index].title;
    },
    tags() {
      return this.imagedata[this.index].tags;
    },
    imagePath() {
      return this.imagedata[this.index].imagePath;
    },
  },
};
</script>
<style lang="scss">
</style>
