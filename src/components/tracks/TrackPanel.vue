<template>
    <div class="track-panel bg-dark border-end d-flex flex-column position-relative" 
         :style="{ width: width + 'px', minWidth: '180px', maxWidth: '500px' }">
        
        <TrackPanelHeader :track-count="project?.tracks?.length || 0" />
        
        <div class="tracks-content flex-grow-1 min-h-0 overflow-auto">
            <TrackList :project="project" />
        </div>
        
        <TrackPanelControls @add-track="handleAddTrack" @open-settings="handleOpenSettings" />
        
        <!-- Resize handle -->
        <div class="resize-handle position-absolute top-0 end-0 h-100 d-flex align-items-center justify-content-center" 
             @mousedown="$emit('start-resize', $event)"
             style="width: 0px; cursor: col-resize; z-index: 10;">
            <div class="resize-indicator"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import Project from "@/core/project/project";
import TrackPanelHeader from './TrackPanelHeader.vue';
import TrackList from './TrackList.vue';
import TrackPanelControls from './TrackPanelControls.vue';

defineProps({
    project: Project,
    width: {
        type: Number,
        default: 250
    }
});

const emit = defineEmits(['start-resize', 'add-track', 'open-settings']);

const handleAddTrack = () => {
    emit('add-track');
};

const handleOpenSettings = () => {
    emit('open-settings');
};
</script>

<style scoped>
.track-panel {
    background-color: #2c2c2c;
    user-select: none;
    transition: box-shadow 0.2s ease;
}

.track-panel:has(.resize-handle:hover) {
    box-shadow: 2px 0 5px rgba(0, 123, 255, 0.2);
}

.tracks-content {
    background-color: #2c2c2c;
    min-height: 0;
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
</style>
