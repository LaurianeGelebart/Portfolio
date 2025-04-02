import * as THREE from "three";

/**
 * Crée une nouvelle scène Three.js avec des lumières configurées et une couleur de fond.
 *
 * @returns {THREE.Scene} La scène Three.js créée.
 *
 * @example
 * const scene = createScene();
 */
export const createScene = () => 
{
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
  
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xf7e3c1, 2);
    pointLight.position.set(-0.6, 0.2, 0.8);
    scene.add(pointLight);

    const shadowLight = new THREE.PointLight(0xf7e3c1, 2);
    shadowLight.position.set(0.5, 0.6, -0.4);
    shadowLight.castShadow = true;
    shadowLight.shadow.radius = 8;
    shadowLight.name = "shadowLight";
    scene.add(shadowLight);

    return scene;
};

/**
 * Crée et configure le renderer WebGL, y compris la taille, le ratio de pixel, et la gestion des ombres.
 *
 * @param {HTMLElement} container - L'élément DOM dans lequel le renderer sera ajouté.
 * @returns {THREE.WebGLRenderer} Le renderer WebGL configuré.
 *
 * @example
 * const renderer = createRenderer(document.body);
 */
export const createRenderer = (container) => 
{
    const renderer = new THREE.WebGLRenderer();
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);
    return renderer;
};

/**
 * Crée et configure une caméra Perspective pour la scène.
 *
 * @returns {THREE.PerspectiveCamera} La caméra Perspective créée.
 *
 * @example
 * const camera = createCamera();
 */
export const createCamera = () => 
{
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 1.1);
    camera.lookAt(0, 0, 0);
    return camera;
};