<template>
    <article class="showcase-item">
        <img class="showcase-image" :src="img" />
        <header>
            <h2 class="showcase-title">{{ title }}</h2>
            <a v-if="link !== 'none'" :href="link" target="_blank" rel="noopener noreferrer">
                <div v-if="actionText !== 'none'" class="btn accent">{{ actionText }}</div>
            </a>
        </header>
        <p class="showcase-desc">{{ desc }}</p>
    </article>
</template>

<script lang="ts" setup>
defineProps<{
    title: string,
    desc: string,
    img: string,
    link: string,
    actionText: string,
}>();
</script>