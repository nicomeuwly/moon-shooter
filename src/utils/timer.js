const maxTime = 30;
let timer = maxTime;
let interval;

const startTimer = () => {
  const timerValue = document.getElementById("timer-value");
  const targetZone = document.getElementById("target-zone");
  const restart = document.getElementById("restart");
  const endgame = document.getElementById("endgame");
  interval = setInterval(() => {
    if (timer < 11) {
      timerValue.setAttribute("position", "-0.05895 0.01177 0.01111");
    }
    if (timer === 0) {
      const score = document.getElementById("score");
      const bestScore = document.getElementById("best-score");
      endgame.emit("endgame");
      console.log("Game Over");
      targetZone.setAttribute("visible", false);
      restart.setAttribute("visible", true);
      endgame.setAttribute("visible", true);
      timer = maxTime;
      if (+score.getAttribute("value") > +bestScore.getAttribute("value")) {
        bestScore.setAttribute("value", score.getAttribute("value"));
      }
      clearInterval(interval);
      return;
    }
    timer--;
    timerValue.setAttribute("value", timer);
  }, 1000);
};

export { startTimer, maxTime };
