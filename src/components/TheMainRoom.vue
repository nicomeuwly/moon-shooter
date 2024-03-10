<script setup>
import LaserGun from "./LaserGun.vue";
import TheTargetZone from "./TheTargetZone.vue";
import Bullet from "./Bullet.vue";
import "../aframe/bind-position.js";
import "../aframe/bind-rotation.js";
import "../aframe/click-to-shoot.js";
import "../aframe/hit-handler.js";
import "../aframe/hit-handler-button.js";
import "../aframe/clickable.js";

const exit = () => {
  window.location.reload();
};
</script>

<template>
  <a-sky src="#sky"></a-sky>
  <a-entity
    data-id="moon"
    gltf-model="assets/moon_-_giordano_bruno_crater.glb"
    position="-9.07 -1.60155 -22.486"
    scale="0.04 0.04 0.04"
    rotation="0 90 0"
  ></a-entity>

  <a-entity
    data-id="platform"
    gltf-model="assets/round_platform.glb"
    position="0 -0.08495 0"
  ></a-entity>

  <a-entity
    position="-1.50438 -0.60931 -1.59538"
    rotation="4.4616223506837205 -102.22082727149504 -0.9654338847954371"
    ><a-entity
      data-id="spaceship"
      gltf-model="assets/death_row_spaceship.glb"
      position="12.726 1.96 -14.466"
      scale="0.4 0.4 0.4"
      rotation="-3.15 -29.999999999999996 4.25"
    ></a-entity
    ><a-entity
      data-id="landing-pad"
      gltf-model="assets/landing_pad.glb"
      scale="0.8 0.8 0.8"
      position="13.00572 -1.38166 -14.78663"
      rotation="-5.919799939291665 0 0"
    ></a-entity
    ><a-entity
      data-id="landing-stairs"
      gltf-model="assets/scifi_walkways_grunge___stairs.glb"
      scale="0.004 0.004 0.004"
      position="14.14033 -0.51569 -7.52757"
      rotation="0 180 0"
    ></a-entity
  ></a-entity>

  <a-entity
    data-id="panel"
    gltf-model="assets/scifi_panel.glb"
    position="1.08508 -0.04035 -2.85738"
    rotation="0 55.64 0"
    scale="1 1 1.69"
  ></a-entity>

  <a-entity
    data-id="table"
    gltf-model="assets/sci-fi_table.glb"
    position="1.11944 0.66936 -1.37206"
    rotation="0 -34.04056852431247 0"
  ></a-entity>

  <a-entity
    class="crate"
    gltf-model="assets/sci-fi_crate.glb"
    position="2.74648 -0.1256 2.12203"
    rotation="9.073932601486849 -41.38703337347988 -5.131410013191653"
  ></a-entity>
  <a-entity
    class="crate"
    gltf-model="assets/sci-fi_crate.glb"
    position="3.69206 -0.06503 1.58795"
    scale="1.2 1.2 1.2"
    rotation="6.268731236526336 18.704207222045724 1.0628367099676772"
  ></a-entity>

  <a-entity
    data-id="shooting-panel"
    gltf-model="assets/sci-fi_panel.glb"
    scale="0.09 0.09 0.09"
    position="-2.15905 -0.72557 -18.68106"
    rotation="0 -90 0"
  ></a-entity>

  <a-entity
    data-id="terminal"
    gltf-model="assets/sci-fi_master_control_terminal.glb"
    scale="0.15 0.15 0.15"
    position="-0.12778 0 2.2171"
    rotation="0 -175.47004363220003 0"
  ></a-entity>

  <a-plane
    id="exit"
    color="red"
    opacity="0.5"
    height="0.2"
    width="0.3"
    position="-0.135 0.84298 2.13298"
    rotation="-47.8654671630241 178.64021911265885 2.7593647413500446"
    hit-handler-button
    clickable
    @click="exit"
    ><a-text
      position="-0.10171 0.00557 0.01032"
      scale="0.5 0.5 0.5"
      value="Exit"
      text=""
    ></a-text
  ></a-plane>

  <a-plane
    id="endgame"
    color="green"
    opacity="0.5"
    height="0.5"
    width="3"
    position="-1.11784 2.91283 -5.58482"
    visible="false"
    sound="src: #end; on: endgame; poolSize: 1"
    ><a-text
      position="-1.117 0.01177 0.00865"
      value="Times Up ! Nice work !"
      text=""
    ></a-text
  ></a-plane>

  <a-text
    data-id="gun-text"
    text=""
    position="0.52665 0.88435 -2.30895"
    rotation="0 -34.52299898781262 0"
    value="Take the gun to start"
  ></a-text>

  <a-plane
    id="timer"
    color="green"
    opacity="0.5"
    height="0.5"
    width="1"
    position="1.40582 2.15 -1.76986"
    rotation="0 -34.10900000000001 0"
    visible="false"
  >
    <a-text
      id="timer-value"
      value=""
      position="-0.1336 0.01177 0.00865"
    ></a-text>
  </a-plane>

  <a-entity
    id="scoreboard"
    geometry="primitive: plane; width: 1.5; height: 0.5"
    material="color: blue; opacity: 0.5"
    position="1.40582 1.47747 -1.76986"
    rotation="0 -34.10900000000001 0"
    visible="false"
    sound="src: #display; on: display; poolSize: 1"
  >
    <a-text
      scale="0.7 0.7 0.7"
      position="-0.63334 0.0527 0.00572"
      value="Score :"
      text=""
    ></a-text>
    <a-text
      id="score"
      position="0.30432 0.05196 0.00655"
      value="0"
      text=""
    ></a-text>
    <a-text
      scale="0.4 0.4 0.4"
      position="-0.63334 -0.11888 0.00572"
      value="Best score :"
      color="#dedede"
    ></a-text>
    <a-text
      id="best-score"
      position="0.33899 -0.12397 0.00779"
      value="0"
      color="#dedede"
      scale="0.6 0.6 0.6"
    ></a-text>
  </a-entity>

  <a-entity
    id="restart"
    class="target"
    geometry="primitive: plane; width: 1; height: 0.3"
    material="color: red; opacity: 0.5"
    position="1.39525 0.94329 -1.76442"
    rotation="0 -34.523 0"
    visible="false"
    hit-handler-button
    target="healthPoints: 2"
    ><a-text
      position="-0.26464 0 0.0005"
      scale="0.7 0.7 0.7"
      value="Restart"
    ></a-text>
  </a-entity>

  <Bullet />

  <TheTargetZone />

  <LaserGun />
  <!-- Main room navigation mesh  -->
  <a-entity
    geometry="primitive: plane; height: 2; width: 2"
    position="0 0 0"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: blue"
    visible="false"
  ></a-entity>
</template>
