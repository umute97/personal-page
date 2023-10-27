<template>
    <component :is="icon"></component>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
});

const icon = defineAsyncComponent(() => import(`@/assets/icons/${props.name}.svg`));
</script>