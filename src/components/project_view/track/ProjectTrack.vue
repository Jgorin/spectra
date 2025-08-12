<template>
    <div class="project-track p-2">
        <div class="d-flex align-items-center">
            <!-- Track Color/Icon -->
            <div class="track-color me-2" :style="{ backgroundColor: trackColor }"></div>
            
            <!-- Track Info -->
            <div class="track-info flex-grow-1">
                <div class="track-name text-light fw-semibold">{{ track?.name }}</div>
                <div class="track-type text-muted small">Audio Track</div>
            </div>

            <!-- Track Controls -->
            <div class="track-controls d-flex align-items-center">
                <!-- Solo/Mute buttons -->
                <button class="btn btn-outline-warning btn-sm me-1" :class="{ active: isSolo }" @click="toggleSolo">S</button>
                <button class="btn btn-outline-danger btn-sm me-2" :class="{ active: isMute }" @click="toggleMute">M</button>
                
                <!-- Volume slider -->
                <div class="volume-control me-2">
                    <input 
                        type="range" 
                        class="form-range form-range-sm" 
                        min="0" 
                        max="100" 
                        v-model="volume"
                        style="width: 60px;"
                    >
                    <small class="text-muted">{{ volume }}</small>
                </div>

                <!-- Track menu -->
                <div class="dropdown">
                    <button class="btn btn-outline-secondary btn-sm" data-bs-toggle="dropdown">
                        <i class="fas fa-ellipsis-v"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-dark">
                        <li><a class="dropdown-item" href="#">Duplicate</a></li>
                        <li><a class="dropdown-item" href="#">Delete</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref, computed } from 'vue';
import Track from '@/core/project/track';

const props = defineProps({
    track: Track
});

// Track state
const volume = ref(75);
const isSolo = ref(false);
const isMute = ref(false);

// Generate a color based on track ID for visual distinction
const trackColor = computed(() => {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd', '#98d8c8'];
    return colors[(props.track?.id || 0) % colors.length];
});

const toggleSolo = () => {
    isSolo.value = !isSolo.value;
};

const toggleMute = () => {
    isMute.value = !isMute.value;
};

</script>

<style scoped>
.project-track {
    background-color: #2c2c2c;
    border: 1px solid #444;
    transition: all 0.2s ease;
}

.project-track:hover {
    background-color: #363636;
    border-color: #555;
}

.track-color {
    width: 4px;
    height: 40px;
    border-radius: 2px;
}

.track-name {
    font-size: 0.9rem;
    margin-bottom: 2px;
}

.track-type {
    font-size: 0.75rem;
}

.btn-sm {
    font-size: 0.75rem;
    padding: 0.15rem 0.4rem;
    min-width: 28px;
}

.btn-outline-warning.active {
    background-color: #ffc107;
    color: #000;
}

.btn-outline-danger.active {
    background-color: #dc3545;
    color: #fff;
}

.volume-control {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form-range {
    height: 0.5rem;
}

.form-range::-webkit-slider-thumb {
    background-color: #007bff;
}

.dropdown-menu-dark {
    background-color: #343a40;
}

.btn-outline-secondary {
    border-color: #555;
    color: #ccc;
}

.btn-outline-secondary:hover {
    background-color: #444;
    border-color: #666;
    color: #fff;
}
</style>