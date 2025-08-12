<template>
    <div class="transport-controls bg-secondary p-2 border-bottom flex-shrink-0">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <div class="btn-group" role="group">
                        <button type="button" class="btn btn-outline-light btn-sm">
                            <i class="fas fa-step-backward"></i>
                        </button>
                        <button type="button" class="btn btn-outline-light btn-sm">
                            <i class="fas fa-play"></i>
                        </button>
                        <button type="button" class="btn btn-outline-light btn-sm">
                            <i class="fas fa-pause"></i>
                        </button>
                        <button type="button" class="btn btn-outline-light btn-sm">
                            <i class="fas fa-stop"></i>
                        </button>
                        <button type="button" class="btn btn-outline-light btn-sm">
                            <i class="fas fa-circle text-danger"></i>
                        </button>
                    </div>
                    <span class="ms-3 text-light">00:00:00</span>
                </div>
                <div class="col-md-6 text-end">
                    <span class="me-3 text-light">BPM: 120</span>
                    <span class="text-light">4/4</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// Transport controls component
</script>

<style scoped>
.transport-controls {
    background-color: #333333 !important;
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

.transport-controls .btn-group .btn {
    border-radius: 4px;
    margin: 0 2px;
    min-width: 40px;
    height: 36px;
}

.transport-controls .btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
}
</style>
