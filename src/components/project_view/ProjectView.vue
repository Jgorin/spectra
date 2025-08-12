<template>
    <div class="project-view h-100 d-flex flex-column">
        <div class="tracks-container flex-grow-1 overflow-auto">
            <ProjectTrackList :project="project"/>
        </div>
        <div class="project-controls p-3 border-top bg-secondary flex-shrink-0">
            <button class="btn btn-success btn-sm w-100 mb-2">
                <i class="fas fa-plus me-1"></i>Add Track
            </button>
            <button class="btn btn-outline-light btn-sm w-100">
                <i class="fas fa-cog me-1"></i>Settings
            </button>
        </div>
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

<style scoped>
.project-view {
    background-color: #2c2c2c;
    min-height: 0;
}

.project-controls {
    background-color: #333333 !important;
    min-height: 80px; /* Ensure enough space for buttons */
}

.tracks-container {
    background-color: #2c2c2c;
    min-height: 0; /* Allow container to shrink */
}

.btn-outline-light {
    border-color: #555;
    color: #ccc;
}

.btn-outline-light:hover {
    background-color: #444;
    border-color: #666;
    color: #fff;
}
</style>
