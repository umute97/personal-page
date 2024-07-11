<template>
    <article class="showcase-item">
        <img class="showcase-image" :src="img" />
        <h2 class="showcase-title">{{ title }}</h2>
        <p class="showcase-desc">{{ desc }}</p>
        <footer>
            <div class="btn accent">Visit</div>
        </footer>
    </article>
</template>

<script lang="ts" setup>
defineProps<{
    title: string;
    desc: string;
    img: string;
}>();
</script>