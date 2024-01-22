<template>
    <SpectraEditor :project="project"/>
</template>

<script setup lang="ts">
import SpectraEditor from './components/SpectraEditor.vue';
import Project from '@/core/project/project';
import Track from '@/core/project/track';

const project = new Project("Test Project");
const track1 = new Track("Track 1", 0);
const track2 = new Track("Track 2", 1);
project.tracks.push(track1);
project.tracks.push(track2);
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html, body {
  margin: 0px !important;
  padding: 0px !important;
}
</style>
