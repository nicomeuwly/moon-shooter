import { createTarget } from "../utils/targets.js";
import { maxTime } from "../utils/timer.js";

AFRAME.registerComponent("hit-handler-button", {
  init: function () {
    const el = this.el;
    const id = el.getAttribute("id");
    el.addEventListener("hit", () => {
      el.setAttribute("material", "color: orange");
      setTimeout(() => {
        el.setAttribute("material", "color: red");
      }, 200);
      if (id === "restart") {
        const timer = document.getElementById("timer-value");
        const targetZone = document.getElementById("target-zone");
        const allTargets = document.querySelectorAll('[class^="target-"]');
        const score = document.getElementById("score");
        const endgame = document.getElementById("endgame");
        allTargets.forEach((target) => {
          targetZone.removeChild(target);
        });
        score.setAttribute("value", 0);
        timer.setAttribute("position", "-0.1336 0.01177 0.00865");
        timer.setAttribute("value", maxTime);
        targetZone.setAttribute("visible", true);
        createTarget(0);
        setTimeout(() => {
          el.setAttribute("visible", false);
          endgame.setAttribute("visible", false);
        }, 300);
      } else {
        window.location.reload();
      }
    });
  },
});
