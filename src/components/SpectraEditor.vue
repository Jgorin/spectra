<template>
    <div class="editor">
        <ProjectView :project="project"></ProjectView>
    </div>
</template>

<script setup lang="ts">
import ProjectView from './project_view/ProjectView.vue';
import Project from "../core/project/project"
import { defineProps } from 'vue';

defineProps({
    project: Project
});

</script>

<style scoped>
.editor{
    height:100%;
    width:100%;
    background-color: white;
    position: fixed;
}
</style>