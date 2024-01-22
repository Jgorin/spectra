<template>
    <div>
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