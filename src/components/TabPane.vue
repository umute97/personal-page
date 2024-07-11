<template>
    <div>
        <nav role="tablist">
            <a :class="activeClass[tab.title]" v-for="(tab, index,) in props.tabs" :key="tab.title" @click="emit('selectTab', index)">{{ tab.title }}</a>
        </nav>
        <slot ref="tabs"></slot>
    </div>
</template>

<script lang="ts" setup>
import { type ActiveClass } from '@/views/Showcase.vue';
import { onMounted } from 'vue';

interface TabItem {
    title: string;
    isActive: boolean;
}

const emit = defineEmits(['selectTab'])

const props = defineProps<{
    tabs: TabItem[],
    activeClass: ActiveClass,
}>()

onMounted(() => {
    emit('selectTab', 0)
})
</script>
