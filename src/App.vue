<template>
    <div id="app" class="daw-container">
        <SpectraEditor :project="project"/>
    </div>
</template>

<script setup lang="ts">
import SpectraEditor from './components/SpectraEditor.vue';
import Project from '@/core/project/project';
import Track from '@/core/project/track';

const project = new Project("My Song");
const track1 = new Track("guitar 1", 0);
const track2 = new Track("bass", 1);
const track3 = new Track("drums", 2);
const track4 = new Track("vocals", 3);
project.tracks.push(track1);
project.tracks.push(track2);
project.tracks.push(track3);
project.tracks.push(track4);

</script>

<style lang="scss">
html, body {
  margin: 0 !important;
  padding: 0 !important;
  height: 100%;
  overflow: hidden;
}

#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  background-color: #2c2c2c;
  color: #ffffff;
}

.daw-container {
  height: 100vh;
  overflow: hidden;
}
</style>
