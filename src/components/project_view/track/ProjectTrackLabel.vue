<template>
    <div class="project-track-label">
      {{ track?.name }}
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import Track from '@/core/project/track';

defineProps({
    track: Track
});

</script>

<style scoped>
.project-track-label{
    text-align: left;
    padding: 10px;
    background-color: rgb(232, 232, 232);
    width: 180px;
    border-right: 1px solid;
}
</style>
