<template>
    <div class="status-bar bg-dark border-top p-2 flex-shrink-0">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col">
                    <small class="text-muted">Ready</small>
                </div>
                <div class="col text-end">
                    <small class="text-muted">CPU: 12% | RAM: 2.1GB</small>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// Status bar component
</script>

<style scoped>
.status-bar {
    background-color: #2c2c2c !important;
    font-family: 'Courier New', monospace;
    background: linear-gradient(to right, #2c2c2c, #333);
    border-top: 1px solid #444;
}
</style>
