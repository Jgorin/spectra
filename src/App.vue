<template>
    <SpectraEditor :project="project"/>
</template>

<script setup lang="ts">
import SpectraEditor from './components/SpectraEditor.vue';
import Project from '@/core/project/project';
import Track from '@/core/project/track';

const project = new Project("My Song");
const track1 = new Track("guitar 1", 0);
const track2 = new Track("bass", 1);
project.tracks.push(track1);
project.tracks.push(track2);

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

html, body {
  margin: 0px !important;
  padding: 0px !important;
}
</style>
