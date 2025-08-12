<template>
    <div class="timeline-view flex-grow-1 bg-dark position-relative d-flex flex-column min-w-0">
        <TimelineHeader />
        <TimelineContent />
    </div>
</template>

<script setup lang="ts">
import TimelineHeader from './TimelineHeader.vue';
import TimelineContent from './TimelineContent.vue';
</script>

<style scoped>
.timeline-view {
    background-color: #1e1e1e;
    min-width: 0; /* Allows flex item to shrink below its content width */
}
</style>
