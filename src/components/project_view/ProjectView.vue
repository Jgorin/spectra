<template>
    <div class="project-view">
        <h1>
            {{ project?.name }}
        </h1>
        <ProjectTrackList :project="project"/>
    </div>
</template>

<script setup lang="ts">
import ProjectTrackList from './track/ProjectTrackList.vue';
import Project from "@/core/project/project"
import { defineProps } from 'vue';

defineProps({
    project: Project
});

</script>
