<script setup>
  import { ref } from 'vue';

  defineProps({
    loaded: Boolean,
  });

  const showOnboarding = ref(true);

  function enterScene() {
    document.querySelector('a-scene').emit('music');
    showOnboarding.value = false;
    if (AFRAME.utils.device.checkHeadsetConnected() && !AFRAME.utils.device.isMobile()) {
      document.querySelector('a-scene').enterVR();
    }
  }
</script>

<template>
  <div id="onboarding" v-if="showOnboarding">
    <div>
      <h1>Moon Shooter 🌙</h1>
      <p v-if="!loaded">loading...</p>
      <button v-if="loaded" @click="enterScene()">Enter scene</button>
      <div class="intro">
        <section>
          <h4>Context</h4>
          <p>You're sent to the moon to hone your shooting skills in preparation for the upcoming intergalactic war with the Marsians.</p>
          <p>The training program requires you to pick up a laser pistol and hit as many targets as possible within 30 seconds. Once the countdown is over, you can try again to increase your best score.</p>
        </section>
      </div>
      <div class="licences">
      <section>
        <h4>Movement modes support</h4>
        <ul>
          <li>
            Desktop – Keyboard for move (WASD or Arrows keys) + Mouse for look
            control (Drag and shoot)
          </li>
          <li>
            VR Headset – AR/VR walk + Gaze cursor for click
          </li>
        </ul>
      </section>
        <dl>
          <dt>
            <i>Included</i>
          </dt>
          <dt>
            <a href="https://github.com/c-frame/aframe-extras" target="_blank">aframe-extras controls and animation-mixer</a>
          </dt><dd>
            <a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/c-frame/physx" target="_blank">aframe physx</a>
          </dt><dd>
            <a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/jure/aframe-blink-controls/" target="_blank">aframe-blink-controls</a>
          </dt><dd>
            <a href="https://github.com/jure/aframe-blink-controls/blob/main/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/AdaRoseCannon/aframe-xr-boilerplate" target="_blank">simple-navmesh-constraint</a>
          </dt><dd>
            By Ada Rose Cannon under MIT License
          </dd>

          <dt>
            <a href="https://github.com/Chabloz/a-frame-vite-vue-boilerplate" target="_blank">a-frame-vite-vue-boilerplate</a>
          </dt><dd>
            By Nicolas Chabloz under MIT License
          </dd>

          <dt>
            <a href="https://github.com/supermedium/aframe-super-shooter-kit" target="_blank">aframe-super-shooter-kit</a>
          </dt><dd>
            By Supermedium under MIT License
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/moon-giordano-bruno-crater-1f49ab263ba1403f8874ae92743bb654" target="_blank">Moon - Giordano Bruno Crater (3D model)</a>
          </dt><dd>
            by <a href="https://sketchfab.com/SebastianSosnowski" target="_blank">SebastianSosnowski</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/round-platform-64de8f896e3e40e4a1e8a67d01620ac1" target="_blank">Round platform (3D Model)</a>
          </dt><dd>
            by <a href="https://sketchfab.com/noortjeschuur" target="_blank">n0stardust</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/landing-pad-c7c1ec44c9d54299ba2ec4fe246437b0" target="_blank">Landing Pad (3D model)</a>
          </dt><dd>
            by <a href="https://sketchfab.com/Galving16" target="_blank">Galvingibbons556</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/scifi-walkways-grunge-stairs-3d56f1b363d848b3b7d452920a59cab7" target="_blank">SciFi Walkways Grunge Stairs (3D model)</a>
          </dt><dd>
            by <a href="https://sketchfab.com/kenlong" target="_blank">The Elliseran Modeller</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/scifi-panel-d93944548ef64adba8e0e6ebdfd75136" target="_blank">SciFi panel (3D model)</a>
          </dt><dd>
            by <a href="https://sketchfab.com/sousinho" target="_blank">Sousinho</a>
            under <a href="https://sketchfab.com/licenses" target="_blank">Free Standard</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/sci-fi-panel-c53e038103544d17b8f0d81a8122ffd6" target="_blank">Sci-fi Panel (3D model)</a>
          </dt><dd>
            by <a href="https://sketchfab.com/San.Dro" target="_blank">OverLord</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/sci-fi-master-control-terminal-09587291d8e84cbd87c963a2dcf5f5e6" target="_blank">Sci-Fi Master Control Terminal (3D model)</a>
          </dt><dd>
            by <a href="https://sketchfab.com/Akturus" target="_blank">Esfinges</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/stylized-gun-2983dac401d741349ff35ff91a1786f0" target="_blank">Stylized Gun (3D model)</a>
          </dt><dd>
            by <a href="https://sketchfab.com/vaskopetrov" target="_blank">Vasko Petrov</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/sci-fi-crate-0e60a62a8f1e4048b638a32eb0661015" target="_blank">Sci-fi Crate (3D model)</a>
          </dt><dd>
            by <a href="https://sketchfab.com/DarrenMcnerney3D" target="_blank">Darren McNerney 3D</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/sci-fi-table-05de9f03e78449ad8691715f02b74839" target="_blank">Sci-Fi Table (3D model)</a>
          </dt><dd>
            by <a href="https://sketchfab.com/nenkea" target="_blank">nenkea</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://freesound.org/people/JakeAMT/sounds/681970/" target="_blank">FX_Red_Laser_Shot_1.wav (Sound)</a>
          </dt><dd>
            by <a href="https://freesound.org/people/JakeAMT/" target="_blank">JakeAMT</a>
            under <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank">CC0 1.0</a>
          </dd>

          <dt>
            <a href="https://freesound.org/people/kevinkace/sounds/66779/" target="_blank">Crate Break 3.wav (Sound)</a>
          </dt><dd>
            by <a href="https://freesound.org/people/kevinkace/" target="_blank">kevinkace</a>
            under <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank">CC0 1.0</a>
          </dd>

          <dt>
            <a href="https://freesound.org/people/bumpelsnake/sounds/456576/" target="_blank">up5.wav (Sound)</a>
          </dt><dd>
            by <a href="https://freesound.org/people/bumpelsnake/" target="_blank">bumpelsnake</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://freesound.org/people/Logatron/sounds/666280/" target="_blank">oldtada.wav (Sound)</a>
          </dt><dd>
            by <a href="https://freesound.org/people/Logatron/" target="_blank">Logatron</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://freesound.org/people/Sayn698/sounds/726320/" target="_blank">Sci-Fi mysterious intro music (Sound)</a>
          </dt><dd>
            by <a href="https://freesound.org/people/Sayn698/" target="_blank">Sayn698</a>
            under <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank">CC0 1.0</a>
          </dd>

          <dt>
            <a href="https://stock.adobe.com/ch_fr/search?k=equirectangular+space&asset_id=648321248" target="_blank">360 degree equirectangular projection space background (Image)</a>
          </dt><dd>
            by <a href="https://stock.adobe.com/ch_fr/contributor/211490113/jodie?load_type=author&prev_url=detail" target="_blank">Jodie</a>
            under <a href="https://stock.adobe.com/ch_fr/enterprise-conditions" target="_blank">Educational licence</a>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped>
  h1 { font-size: 1.5rem }
  a {
    color: #eee;
    text-decoration: none;
  }
  .licences, .intro {
    margin: 2rem 0;
    font-size: 1rem;
    text-align: left;
  }
  .licences dt {
    padding-top: 0.75rem;
    font-size: 0.9rem;
    font-weight: bold;
  }
  .licences dd {
    margin-left: 0;
    font-size: 0.8rem;
  }

  #onboarding {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #333;
    color: #ccc;
    width: 100vw;
    height: 100vh;
    padding: 1rem;
    font-family: monospace;
    z-index: 10000;
    overflow: auto;
  }
  #onboarding > * {
    margin: 0 auto;
    max-width: 50rem;
    width: calc(100vw - 10rem);
    text-align: center;
    border-radius: 0.3rem;
    padding: 1rem;
    font-size: 1.3rem;
  }
  #onboarding button {
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    background-color: white;
    color: black;
    border: none;
    cursor: pointer;
  }
  #onboarding li {
    font-size: 1rem;
    text-align: left;
  }
</style>
