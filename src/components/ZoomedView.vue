<template>
  <div id="image-viewer" v-if="enlarged">
    <nav>
      <h2>{{ title }}</h2>
      <div class="tag-area">
        <span>Tags: </span>
        <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
      <div class="close-button">
        <icon name="close" @click="$emit('minimizeImage')" id="close" />
      </div>
    </nav>
    <div class="fullscreen-image">
      <img :src="imagePath" alt="Enlarged Image">
    </div>
  </div>
</template>

<script lang="ts">
import Icon from '@/components/Icon.vue';
export default {
  props: {
    index: {
      type: Number,
      required: true
    },
    imagedata: {
      type: Object,
      required: true
    },
    enlarged: {
      type: Boolean,
      required: true
    }
  },
  components: {
    Icon
  },
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
}
</script>