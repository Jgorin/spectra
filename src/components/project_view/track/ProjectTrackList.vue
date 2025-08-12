<template>
    <div class="track-list">
        <ProjectTrack 
            v-for="track in project?.tracks" 
            :track="track" 
            :key="track.id" 
            class="track-item"
        />
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import Project from "@/core/project/project"
import ProjectTrack from '@/components/project_view/track/ProjectTrack.vue';

defineProps({
    project: Project
});

</script>

<style scoped>
.track-list {
    padding: 0;
}

.track-item {
    border-bottom: 1px solid #444;
}

.track-item:last-child {
    border-bottom: none;
}
</style>