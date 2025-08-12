<template>
    <div class="track-panel-header p-2 border-bottom bg-secondary d-flex align-items-center justify-content-between flex-shrink-0" style="height: 60px;">
        <h6 class="mb-0 text-light">Tracks</h6>
        <div class="track-count">
            <small class="text-muted">{{ trackCount }} tracks</small>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
    trackCount: {
        type: Number,
        default: 0
    }
});
</script>

<style scoped>
.track-panel-header {
    background-color: #333333 !important;
}
</style>
