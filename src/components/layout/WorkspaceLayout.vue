<template>
    <div class="workspace-layout flex-grow-1 d-flex min-h-0">
        <TrackPanel 
            :project="project" 
            :width="sidebarWidth"
            @start-resize="startResize"
            @add-track="handleAddTrack"
            @open-settings="handleOpenSettings"
        />
        <TimelineView />
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, onUnmounted } from 'vue';
import Project from "@/core/project/project";
import TrackPanel from '@/components/tracks/TrackPanel.vue';
import TimelineView from '@/components/timeline/TimelineView.vue';

defineProps({
    project: Project
});

const emit = defineEmits(['add-track', 'open-settings']);

// Resizable sidebar functionality
const sidebarWidth = ref(250);
const isResizing = ref(false);

const startResize = (e: MouseEvent) => {
    isResizing.value = true;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', stopResize);
    e.preventDefault();
};

const resize = (e: MouseEvent) => {
    if (!isResizing.value) return;
    
    const newWidth = e.clientX;
    if (newWidth >= 180 && newWidth <= 500) {
        sidebarWidth.value = newWidth;
    }
};

const stopResize = () => {
    isResizing.value = false;
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
    document.removeEventListener('mousemove', resize);
    document.removeEventListener('mouseup', stopResize);
};

const handleAddTrack = () => {
    emit('add-track');
};

const handleOpenSettings = () => {
    emit('open-settings');
};

onUnmounted(() => {
    document.removeEventListener('mousemove', resize);
    document.removeEventListener('mouseup', stopResize);
});
</script>

<style scoped>
/* Workspace layout styles will be added here if needed */
</style>
