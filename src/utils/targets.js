let targets = [];
const maxTargets = 50;

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const setPositions = () => {
  const direction = Math.random();
  const x = direction < 0.5 ? getRandomIntInclusive(1, 4) * -1 : getRandomIntInclusive(0, 2);
  const y = getRandomIntInclusive(1, 3);
  const z = getRandomIntInclusive(8, 12) * -1;
  return `${x} ${y} ${z}`;
};

const createTargetsPositions = () => {
  for (let i = 0; i < maxTargets; i++) {
    let position;
    do {
      position = setPositions();
    } while (targets.includes(position));
    targets.push(position);
  }
};

const createTarget = (index) => {
  const targetZone = document.getElementById("target-zone");
  const targetModel = targetZone.querySelector(".target");
  const firstTarget = targetModel.cloneNode(true);
  targetZone.appendChild(firstTarget);
  firstTarget.setAttribute("visible", true);
  firstTarget.setAttribute("position", targets[index]);
  firstTarget.setAttribute("gltf-model", "assets/sci-fi_crate.glb");
  firstTarget.setAttribute("sound", "src: #target-hit; on: break; poolSize: 5");
  firstTarget.setAttribute("class", `target-${index}`);
};

createTargetsPositions();

export {createTarget, maxTargets};
