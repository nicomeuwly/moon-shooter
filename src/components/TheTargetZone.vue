<script setup>
import { onMounted } from "vue";
import Target from "./Target.vue";
import { createTarget } from "../utils/targets.js";

onMounted(() => {
  createTarget(0);
});
</script>

<template>
  <a-entity id="target-zone" visible="false">
    <Target visible="false" />
  </a-entity>
</template>
