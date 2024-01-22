<template>
    <div class="project-view">
        <h1>
            {{ project?.name }}
        </h1>
        <div>
            <ProjectViewTrack v-for="track in project?.tracks" :track="track" :key="track.name"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import ProjectViewTrack from './track/ProjectViewTrack.vue';
import Project from "@/core/project/project"
import { defineProps } from 'vue';

defineProps({
    project: Project
});

</script>

<style scoped>
.project-view{
    min-height: 100vh;
}
</style>
