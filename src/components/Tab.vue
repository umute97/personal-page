<template>
    <div v-show="props.isActive" class="tab">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    isActive: boolean;
}>();
</script>