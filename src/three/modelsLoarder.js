import { getModels } from '@/api/getData';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';

/**
 * Méthode asynchrone qui récupère les modèles et les charge dans la scène Three.js.
 *
 * @param {THREE.Scene} scene - La scène Three.js dans laquelle les modèles seront ajoutés.
 * @returns {Promise<void>} - Une promesse qui se résout lorsque tous les modèles sont chargés.
 *
 * @example
 * retrieveData(scene).then(() => console.log("Models loaded"));
 */
export const retrieveData = async (scene) => 
{
    const models = await getModels();
    models.objects.forEach(obj => loaderGLTF(obj.path, obj.position, scene, false));
    models.letters.forEach(obj => loaderGLTF(obj.path, obj.position, scene, true));
}

    
/**
 * Charge un modèle GLTF à partir d'un chemin donné et l'ajoute à la scène.
 *
 * @param {string} path - Le chemin du fichier GLTF à charger.
 * @param {Array<number>} position - La position [x, y, z] où placer le modèle dans la scène.
 * @param {THREE.Scene} scene - La scène Three.js où le modèle sera ajouté.
 * @param {boolean} isLetter - Le model est-il une lettre
 *
 * @example
 * loaderGLTF('models/lamp.glb', [0, 0, 0], scene, interactableObjects, false);
 */
const loaderGLTF = (path, position, scene, isLetter) => 
{
  const loader = new GLTFLoader();
  loader.load(
    path,
    (gltf) => {
      const model = gltf.scene;
      if (model) {
        // Créer une box englobante pour le modèle (utile pour le centrage)
        const box = new THREE.Box3().setFromObject(model);
        const center = new THREE.Vector3();
        box.getCenter(center); 
        model.position.sub(center); 
        model.isLetter = isLetter;
        if (!isLetter) {
          model.rotation.y -= 0.15;
        }
        shadowsSetUp(model);

        
        // Créer un pivot (un objet vide pour appliquer les transformations)
        const pivot = new THREE.Object3D();
        pivot.position.set(position[0]-0.2, position[1], position[2]); 
        pivot.rotation.y = -Math.PI / 2; 

        // Appliquer le modèle au pivot
        pivot.add(model);

        // Ajouter le pivot à la scène
        scene.add(pivot);
      } else {
        console.error('Erreur de chargement du modèle');
      }
    },
    undefined,
    (error) => {
      console.error('Erreur de chargement du modèle : ' + error);
    }
  );
};


/**
 * Configure les ombres du modèle, permettant à certains objets de projeter ou recevoir des ombres.
 *
 * @param {THREE.Object3D} model - Le modèle 3D sur lequel configurer les ombres.
 *
 * @example
 * shadowsSetUp(model);
 */
const shadowsSetUp = (model) => 
{
  model.traverse((node) => {
    if (node.isMesh) {
      if (/sol/i.test(node.name)) {
        node.receiveShadow = true;
      } else {
        node.castShadow = true;
      }
    }
  });
};
