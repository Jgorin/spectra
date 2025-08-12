<template>
    <div class="track-panel-controls p-3 border-top bg-secondary flex-shrink-0">
        <button class="btn btn-success btn-sm w-100 mb-2" @click="addTrack">
            <i class="fas fa-plus me-1"></i>Add Track
        </button>
        <button class="btn btn-outline-light btn-sm w-100" @click="openSettings">
            <i class="fas fa-cog me-1"></i>Settings
        </button>
    </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits(['add-track', 'open-settings']);

const addTrack = () => {
    emit('add-track');
};

const openSettings = () => {
    emit('open-settings');
};
</script>

<style scoped>
.track-panel-controls {
    background-color: #333333 !important;
    min-height: 80px;
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
