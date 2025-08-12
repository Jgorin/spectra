<template>
    <div class="spectra-editor d-flex flex-column vh-100">
        <MenuBar :project="project" />
        <TransportControls />
        <WorkspaceLayout 
            :project="project"
            @add-track="handleAddTrack"
            @open-settings="handleOpenSettings"
        />
        <StatusBar />
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import Project from "../core/project/project";
import MenuBar from './layout/MenuBar.vue';
import TransportControls from './layout/TransportControls.vue';
import WorkspaceLayout from './layout/WorkspaceLayout.vue';
import StatusBar from './layout/StatusBar.vue';

defineProps({
    project: Project
});

// Event handlers
const handleAddTrack = () => {
    console.log('Add track requested');
    // TODO: Implement add track functionality
};

const handleOpenSettings = () => {
    console.log('Settings requested');
    // TODO: Implement settings functionality
};
</script>

<style scoped>
.spectra-editor {
    background-color: #1a1a1a;
    color: #ffffff;
    height: 100vh;
    overflow: hidden;
}

/* Ensure proper flexbox behavior */
.min-h-0 {
    min-height: 0;
}

.min-w-0 {
    min-width: 0;
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

<style scoped>
.spectra-editor {
    background-color: #1a1a1a;
    color: #ffffff;
    height: 100vh;
    overflow: hidden;
}

.transport-bar {
    background-color: #333333 !important;
}

.track-controls-sidebar {
    background-color: #2c2c2c;
    user-select: none;
    transition: box-shadow 0.2s ease;
}

.track-controls-sidebar:has(.resize-handle:hover) {
    box-shadow: 2px 0 5px rgba(0, 123, 255, 0.2);
}

.timeline-area {
    background-color: #1e1e1e;
    min-width: 0; /* Allows flex item to shrink below its content width */
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

/* Resize handle styling */
.resize-handle {
    background-color: rgba(0, 0, 0, 0.1);
    transition: background-color 0.2s ease;
    border-left: 1px solid #444;
}

.resize-handle:hover {
    background-color: rgba(0, 123, 255, 0.3);
    border-left: 1px solid #007bff;
}

.resize-indicator {
    width: 2px;
    height: 30px;
    background-color: #666;
    border-radius: 1px;
    opacity: 0.5;
    transition: all 0.2s ease;
}

.resize-handle:hover .resize-indicator {
    background-color: #007bff;
    opacity: 1;
}

/* Ensure proper flexbox behavior */
.min-h-0 {
    min-height: 0;
}

.min-w-0 {
    min-width: 0;
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