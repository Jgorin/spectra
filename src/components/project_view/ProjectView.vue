<template>
    <div class="project-view">
        <h1>
            {{ project?.name }}
        </h1>
        <div>
            <!-- add a bottom border to the final track  -->
            <ProjectViewTrack v-for="track in project?.tracks" :track="track" :key="track.name" class="track"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import ProjectViewTrack from './track/ProjectViewTrack.vue';
import Project from "@/core/project/project"
import { defineProps, onMounted } from 'vue';

defineProps({
    project: Project
});

</script>
