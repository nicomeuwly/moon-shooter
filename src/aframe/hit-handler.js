import { createTarget, maxTargets } from "../utils/targets.js";
import { startTimer } from "../utils/timer.js";

AFRAME.registerComponent("hit-handler", {
  init: function () {
    const el = this.el;
    const index = +el.getAttribute("class").slice(7);
    const score = document.getElementById("score");
    let scoreValue = +score.getAttribute("value");
    el.addEventListener("die", () => {
      this.el.emit("break");
      if (index === 0) {
        startTimer();
      }
      score.setAttribute("value", scoreValue + 1);
      el.setAttribute("visible", false);
      if (index < maxTargets - 1) createTarget(index + 1);
    });
  },

  tick: function () {
    const el = this.el;
    const score = document.getElementById("score");
    let scoreValue = +score.getAttribute("value");

    el.addEventListener("die", () => {
      score.setAttribute("value", scoreValue + 1);
    });
  },
});
