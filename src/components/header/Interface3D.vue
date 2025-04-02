<template>
  <div class="Interface3D">
    <div class="scene3D" ref="scene3D"></div>
  </div>
</template>

<script>
import { createCamera, createRenderer, createScene } from "@/three/sceneSetUp";
import { retrieveData } from "@/three/modelsLoarder";
import { animate } from "@/three/animation";
import {
  onCursorMove,
  onCanvasClick,
  onWindowResize,
} from "@/three/eventHandlers";

export default {
  name: "Interface3D",

  data() {
    return {
      state: { 
        lightIsOn: true,
    },
  };
  },

  async mounted() {
    const canvas = this.$refs.scene3D;

    // Créer la scène 3D
    this.scene = createScene();
    this.renderer = createRenderer(canvas);
    this.camera = createCamera();

    // Récupérer les modèles
    await retrieveData(this.scene);

    // Lancer la boucle d'animation
    animate(this.camera, this.scene, this.renderer);

    // Écouter les actions sur la scène
    canvas.addEventListener("mousemove", (event) =>
      onCursorMove(event, this.camera, canvas)
    );
    canvas.addEventListener("click", (event) =>
      onCanvasClick(event, this.camera, this.scene, this.state)
    );

    // Gérer le redimensionnement de la fenêtre
    window.addEventListener("resize", () =>
      onWindowResize(this.camera, this.renderer)
    );
  },

  // Nettoyer les ressources avant la destruction du composant
  beforeUnmount() {
    if (this.renderer) this.renderer.dispose();
    if (this.scene) this.scene.clear();
  },
};
</script>

<style>
.scene3D {
  background: rgb(255, 255, 255);
}

.scene3D canvas {
  width: 100vw !important;
  height: 90vh !important;
}
</style>
