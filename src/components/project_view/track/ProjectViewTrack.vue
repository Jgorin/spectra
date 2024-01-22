<template>
    <div class="track-label">
      {{ track?.name }}
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import Track from '@/core/project/track';

defineProps({
    track: Track
});

</script>

<style scoped>
div{
    outline: 1px solid;
    margin-top: 1px;
    margin-left: 1px;
}

.track-label{
    text-align: left;
    margin: 10px;
}
</style>