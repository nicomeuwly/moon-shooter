AFRAME.registerComponent("bind-rotation", {
  schema: {
    target: { type: "selector" },
  },

  init: function () {
    this.position = new THREE.Vector3();
    this.quaternion = new THREE.Quaternion();
    this.scale = new THREE.Vector3();
  },

  tick: function () {
    const sourceObject = this.data.target.object3D;
    const targetObject = this.el.object3D;
    const sceneEl = this.el.sceneEl;

    sourceObject.matrixWorld.decompose(
      this.position,
      this.quaternion,
      this.scale
    );

    // Appliquer la rotation de l'objet source à l'objet cible
    targetObject.quaternion.copy(this.quaternion);

    if (sceneEl.is("vr-mode")) {
      const forwardQuaternion = new THREE.Quaternion().setFromAxisAngle(
        new THREE.Vector3(-1, 0, 0),
        Math.PI / 2
      );
      targetObject.quaternion.multiply(forwardQuaternion);
    }

    targetObject.updateMatrixWorld(true);
  },
});
