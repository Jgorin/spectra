<template>
    <nav class="menu-bar navbar navbar-expand-lg navbar-dark bg-dark border-bottom flex-shrink-0">
        <div class="container-fluid">
            <a class="navbar-brand fw-bold" href="#">
                <i class="fas fa-music me-2"></i>Spectra DAW
            </a>
            <div class="navbar-nav ms-auto">
                <span class="navbar-text me-3">{{ project?.name }}</span>
                <button class="btn btn-outline-light btn-sm me-2">File</button>
                <button class="btn btn-outline-light btn-sm me-2">Edit</button>
                <button class="btn btn-outline-light btn-sm">View</button>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import Project from "@/core/project/project";

defineProps({
    project: Project
});
</script>

<style scoped>
.menu-bar {
    background-color: #1a1a1a !important;
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
