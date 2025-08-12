<template>
    <div class="spectra-editor d-flex flex-column vh-100">
        <!-- Top Navigation/Menu Bar -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
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

        <!-- Transport Controls -->
        <div class="transport-bar bg-secondary p-2 border-bottom">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <div class="btn-group" role="group">
                            <button type="button" class="btn btn-outline-light btn-sm">
                                <i class="fas fa-step-backward"></i>
                            </button>
                            <button type="button" class="btn btn-outline-light btn-sm">
                                <i class="fas fa-play"></i>
                            </button>
                            <button type="button" class="btn btn-outline-light btn-sm">
                                <i class="fas fa-pause"></i>
                            </button>
                            <button type="button" class="btn btn-outline-light btn-sm">
                                <i class="fas fa-stop"></i>
                            </button>
                            <button type="button" class="btn btn-outline-light btn-sm">
                                <i class="fas fa-circle text-danger"></i>
                            </button>
                        </div>
                        <span class="ms-3 text-light">00:00:00</span>
                    </div>
                    <div class="col-md-6 text-end">
                        <span class="me-3 text-light">BPM: 120</span>
                        <span class="text-light">4/4</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Content Area -->
        <div class="main-content flex-grow-1 d-flex">
            <!-- Left Sidebar - Track Controls -->
            <div class="track-controls-sidebar bg-dark border-end" style="width: 250px;">
                <div class="track-header p-2 border-bottom bg-secondary d-flex align-items-center" style="height: 60px;">
                    <h6 class="mb-0 text-light">Tracks</h6>
                </div>
                <ProjectView :project="project" class="h-100"/>
            </div>

            <!-- Main Timeline/Arrangement Area -->
            <div class="timeline-area flex-grow-1 bg-dark position-relative">
                <div class="timeline-header bg-secondary border-bottom d-flex align-items-center" style="height: 60px;">
                    <div class="timeline-controls p-2">
                        <span class="text-light me-3">Timeline</span>
                    </div>
                    <div class="timeline-ruler flex-grow-1 position-relative">
                        <div class="ruler-container d-flex align-items-center h-100">
                            <div class="ruler-marks d-flex align-items-end h-100 w-100 position-relative">
                                <div v-for="n in 16" :key="n" class="ruler-mark d-flex flex-column align-items-center position-relative">
                                    <div class="ruler-tick"></div>
                                    <span class="ruler-number text-light">{{ n }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="timeline-content flex-grow-1 p-2">
                    <div class="text-light text-center mt-5">
                        <i class="fas fa-waveform fa-3x mb-3 opacity-50"></i>
                        <p>Timeline view will be implemented here</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom Status Bar -->
        <div class="status-bar bg-dark border-top p-2">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col">
                        <small class="text-muted">Ready</small>
                    </div>
                    <div class="col text-end">
                        <small class="text-muted">CPU: 12% | RAM: 2.1GB</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ProjectView from './project_view/ProjectView.vue';
import Project from "../core/project/project"
import { defineProps } from 'vue';

defineProps({
    project: Project
});

</script>

<style scoped>
.spectra-editor {
    background-color: #1a1a1a;
    color: #ffffff;
}

.transport-bar {
    background-color: #333333 !important;
}

.track-controls-sidebar {
    min-width: 250px;
    background-color: #2c2c2c;
}

.timeline-area {
    background-color: #1e1e1e;
}

.timeline-header {
    background-color: #333333 !important;
    height: 60px;
}

.track-header {
    background-color: #333333 !important;
    height: 60px;
}

.timeline-controls {
    min-width: 100px;
    border-right: 1px solid #444;
}

.ruler-container {
    background: linear-gradient(to bottom, #333, #2a2a2a);
    position: relative;
}

.ruler-marks {
    background-image: repeating-linear-gradient(
        90deg,
        #444 0px,
        #444 1px,
        transparent 1px,
        transparent 80px
    );
}

.ruler-mark {
    width: 80px;
    height: 100%;
    border-left: 1px solid #444;
    position: relative;
    justify-content: flex-end;
    padding-bottom: 8px;
}

.ruler-mark:first-child {
    border-left: none;
}

.ruler-tick {
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 20px;
    background-color: #666;
}

.ruler-number {
    font-size: 0.75rem;
    color: #ccc;
    position: absolute;
    bottom: 4px;
    left: 4px;
    text-align: left;
}

.status-bar {
    background-color: #2c2c2c !important;
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

/* Custom scrollbars for dark theme */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #2c2c2c;
}

::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: #666;
}
</style>