<script setup>
import { ref } from 'vue';

import TheCameraRig from './TheCameraRig.vue';
import TheMainRoom from './TheMainRoom.vue';

defineProps({
  scale: Number,
  overlaySelector: String,
});

const allAssetsLoaded = ref(false);
</script>

<template>
  <a-scene background="color: black;" :webxr="`
      requiredFeatures: local-floor;
      referenceSpaceType: local-floor;
      optionalFeatures: dom-overlay;
      overlayElement: ${overlaySelector};
    `" xr-mode-ui="XRMode: xr" physx="
      autoLoad: true;
      delay: 1000;
      useDefaultScene: false;
      wasmUrl: lib/physx.release.wasm;
    " sound="src: #ambient; on: music; poolSize: 1; loop: true; volume: 0.5">

    <a-assets @loaded="allAssetsLoaded = true">
      <!--
        Title: Moon - Giordano Bruno Crater
        Model source: https://sketchfab.com/3d-models/moon-giordano-bruno-crater-1f49ab263ba1403f8874ae92743bb654
        Model author: https://sketchfab.com/SebastianSosnowski ( SebastianSosnowski )
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item id="moon-surface" src="assets/moon_-_giordano_bruno_crater.glb"></a-asset-item>
      <!--
        Title: Round platform
        Model source: https://sketchfab.com/3d-models/round-platform-64de8f896e3e40e4a1e8a67d01620ac1
        Model author: https://sketchfab.com/blacknibow ( blacknibolion )
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item id="platform" src="assets/round_platform.glb"></a-asset-item>
      <!--
        Title: Death Row Spaceship
        Model source: https://sketchfab.com/3d-models/death-row-spaceship-712057c4562d413594beb723f6ec6dd6
        Model author: https://sketchfab.com/noortjeschuur ( n0stardust )
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item id="spaceship" src="assets/death_row_spaceship.glb"></a-asset-item>
      <!--
        Title: Landing Pad
        Model source: https://sketchfab.com/3d-models/landing-pad-c7c1ec44c9d54299ba2ec4fe246437b0
        Model author: https://sketchfab.com/Galving16 ( Galvingibbons556 )
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item id="landing" src="assets/landing_pad.glb"></a-asset-item>
      <!--
        Title: SciFi Walkways Grunge Stairs
        Model source: https://sketchfab.com/3d-models/scifi-walkways-grunge-stairs-3d56f1b363d848b3b7d452920a59cab7
        Model author: https://sketchfab.com/kenlong ( The Elliseran Modeller )
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item id="stairs" src="assets/scifi_walkways_grunge___stairs.glb"></a-asset-item>
      <!--
        Title: SciFi panel
        Model source: https://sketchfab.com/3d-models/scifi-panel-d93944548ef64adba8e0e6ebdfd75136
        Model author: https://sketchfab.com/sousinho ( Sousinho )
        Model license: Free Standard ( https://sketchfab.com/licenses )
      -->
      <a-asset-item id="panel" src="assets/scifi_panel.glb"></a-asset-item>
      <!--
        Title: Sci-fi Panel
        Model source: https://sketchfab.com/3d-models/sci-fi-panel-c53e038103544d17b8f0d81a8122ffd6
        Model author: https://sketchfab.com/San.Dro ( OverLord )
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item id="shooting-panel" src="assets/sci-fi_panel.glb"></a-asset-item>
      <!--
        Title: Sci-Fi Master Control Terminal
        Model source: https://sketchfab.com/3d-models/sci-fi-master-control-terminal-09587291d8e84cbd87c963a2dcf5f5e6
        Model author: https://sketchfab.com/Akturus ( Esfinges )
        Model license: CC BY-NC 4.0 ( https://creativecommons.org/licenses/by-nc/4.0/ )
      -->
      <a-asset-item id="terminal" src="assets/sci-fi_master_control_terminal.glb"></a-asset-item>
      <!--
        Title: Stylized Gun
        Model source: https://sketchfab.com/3d-models/stylized-gun-2983dac401d741349ff35ff91a1786f0
        Model author: https://sketchfab.com/vaskopetrov ( Vasko Petrov )
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item id="gun-1" src="assets/stylized_gun.glb"></a-asset-item>
      <!--
        Variant of the gun model for desktop usage (modified on Blender)
      -->
      <a-asset-item id="gun-2" src="assets/stylized_gun_desktop.glb"></a-asset-item>
      <!--
        Title: Sci-fi Crate
        Model source: https://sketchfab.com/3d-models/sci-fi-crate-0e60a62a8f1e4048b638a32eb0661015
        Model author: https://sketchfab.com/DarrenMcnerney3D ( Darren McNerney 3D )
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item id="crate" src="assets/sci-fi_crate.glb"></a-asset-item>
      <!--
        Title: Sci-Fi Table
        Model source: https://sketchfab.com/3d-models/sci-fi-table-05de9f03e78449ad8691715f02b74839
        Model author: https://sketchfab.com/nenkea ( nenkea )
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item id="table" src="assets/sci-fi_table.glb"></a-asset-item>
      <!--
        Title: FX_Red_Laser_Shot_1.wav
        Sound source: https://freesound.org/people/JakeAMT/sounds/681970/
        Sound author: https://freesound.org/people/JakeAMT/ ( JakeAMT )
        Sound license: CC0 1.0 Deed ( https://creativecommons.org/publicdomain/zero/1.0/ )
      -->
      <a-asset-item id="gunshot" response-type="arraybuffer" src="assets/sound/681970__jakeamt__fx_red_laser_shot_1.wav" preload="auto"></a-asset-item>
      <!--
        Title: Crate Break 3.wav
        Sound source: https://freesound.org/people/kevinkace/sounds/66779/
        Sound author: https://freesound.org/people/kevinkace/ ( kevinkace )
        Sound license: CC0 1.0 Deed ( https://creativecommons.org/publicdomain/zero/1.0/ )
      -->
      <a-asset-item id="target-hit" response-type="arraybuffer" src="assets/sound/66779__kevinkace__crate-break-3.wav" preload="auto"></a-asset-item>
      <!--
        Title: up5.wav
        Sound source: https://freesound.org/people/bumpelsnake/sounds/456576/
        Sound author: https://freesound.org/people/bumpelsnake/ ( bumpelsnake )
        Sound license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item id="display" response-type="arraybuffer" src="assets/sound/456576__bumpelsnake__up5.wav" preload="auto"></a-asset-item>
      <!--
        Title: oldtada.wav
        Sound source: https://freesound.org/people/Logatron/sounds/666280/
        Sound author: https://freesound.org/people/Logatron/ ( Logatron )
        Sound license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item id="end" response-type="arraybuffer" src="assets/sound/666280__logatron__oldtada.wav" preload="auto"></a-asset-item>
      <!--
        Title: Sci-Fi mysterious intro music
        Sound source: https://freesound.org/people/Sayn698/sounds/726320/
        Sound author: https://freesound.org/people/Sayn698/ ( Sayn698 )
        Sound license: CC0 1.0 Deed ( https://creativecommons.org/publicdomain/zero/1.0/ )
      -->
      <a-asset-item id="ambient" response-type="arraybuffer" src="assets/sound/726320__sayn698__sci-fi-mysterious-intro-music.wav" preload="auto"></a-asset-item>
      <!--
        Title: 360 degree equirectangular projection space background
        Image source: https://stock.adobe.com/ch_fr/search?k=equirectangular+space&asset_id=648321248
        Image author: https://stock.adobe.com/ch_fr/contributor/211490113/jodie?load_type=author&prev_url=detail ( Jodie )
        Image license: Educational licence ( https://stock.adobe.com/ch_fr/enterprise-conditions )
      -->
      <img id="sky" src="/assets/space.jpeg"></img>
    </a-assets>

    <template v-if="allAssetsLoaded">
      <TheMainRoom />
    </template>

    <TheCameraRig />

  </a-scene>
</template>