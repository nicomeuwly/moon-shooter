<script setup>
import "../aframe/hit-handler.js";
defineProps({
  position: { type: String, default: "0 -2 -8" },
});
</script>

<template>
  <a-entity
    class="target"
    target="healthPoints: 2"
    gltf-model="assets/sci-fi_crate.glb"
    :position="position"
    hit-handler
    sound="src: #target-hit; on: break; poolSize: 5"
  ></a-entity>
</template>
