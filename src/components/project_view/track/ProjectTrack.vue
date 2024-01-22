<template>
    <div>
        <ProjectTrackLabel :track="track"/>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import Track from '@/core/project/track';
import ProjectTrackLabel from './ProjectTrackLabel.vue';

defineProps({
    track: Track
});

</script>

<style scoped>

.project-track{
    text-align: left;
    padding:5px;
    width: 100%;
}
</style>