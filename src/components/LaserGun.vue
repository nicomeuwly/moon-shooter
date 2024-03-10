<script setup>
import "../aframe/clickable.js";
import "../aframe/object-to-hand.js";
</script>

<template>
  <a-entity
    id="gun"
    gltf-model="assets/stylized_gun.glb"
    position="1.071 0.742 -1.372"
    rotation="0 19.075 -90"
    scale="0.05 0.05 0.05"
    clickable
    object-to-hand
    shooter
    sound="src: #gunshot; on: shoot; poolSize: 20"
  ></a-entity>
</template>
