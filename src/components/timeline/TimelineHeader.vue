<template>
    <div class="timeline-header bg-secondary border-bottom d-flex align-items-center flex-shrink-0" style="height: 60px;">
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
</template>

<script setup lang="ts">
// Timeline header component
</script>

<style scoped>
.timeline-header {
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
</style>
