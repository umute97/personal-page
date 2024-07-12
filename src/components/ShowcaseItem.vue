<template>
    <article class="showcase-item">
        <img class="showcase-image" :src="img" />
        <header>
            <h2 class="showcase-title">{{ title }}</h2>
            <a :href="link" target="_blank" rel="noopener noreferrer" :style="show">
                <div class="btn accent">{{ actionText ? actionText : "" }}</div>
            </a>
        </header>
        <p class="showcase-desc">{{ desc }}</p>
    </article>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
    title: string,
    desc: string,
    img: string,
    link?: string,
    actionText?: string,
}>();

const show = computed(() => props.link ? 'opacity: 1;' : 'opacity: 0;')
</script>