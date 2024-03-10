import { maxTime } from "../utils/timer.js";

AFRAME.registerComponent("object-to-hand", {
  schema: {
    target: { type: "string", default: "#hand-right" },
    isHeld: { type: "boolean", default: false },
  },

  init: function () {
    const object = this.el;
    const gunText = document.querySelector('[data-id="gun-text"]');
    const scoreBoard = document.getElementById("scoreboard");
    const targetZone = document.getElementById("target-zone");
    const timer = document.getElementById("timer");
    object.addEventListener("click", () => {
      if (!this.data.isHeld) {
        scoreBoard.emit("display")
        this.data.isHeld = true;
        timer.setAttribute("visible", true);
        timer.firstChild.setAttribute("value", maxTime);
        if (object.sceneEl.is("vr-mode")) {
          object.setAttribute("gltf-model", "assets/stylized_gun.glb");
          object.setAttribute("bind-rotation", `target: ${this.data.target}`);
          object.setAttribute("bind-position", `target: ${this.data.target}`);
        } else {
          object.setAttribute("gltf-model", "assets/stylized_gun_desktop.glb");
          object.setAttribute("bind-rotation", "target: #dummy-hand-right");
          object.setAttribute("bind-position", "target: #dummy-hand-right");
        }
        object.setAttribute("click-to-shoot", "");
        gunText.setAttribute("visible", false);
        scoreBoard.setAttribute("visible", true);
        targetZone.setAttribute("visible", true);
      }
    });
  },
});
