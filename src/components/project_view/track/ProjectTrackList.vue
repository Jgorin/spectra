<template>
    <div>
        <ProjectTrack v-for="track in project?.tracks" :track="track" :key="track.name" class="project-track-list-item"/>
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
.project-track-list-item{
    outline: 1px solid;
    margin: 1px 10px 0px 10px;
}
</style>