import * as THREE from 'three';

/**
 * Gère le clic sur un objet lampe.
 *
 * @param {Object} clickedObject - L'objet cliqué, représentant une lampe.
 * @param {Object} state - L'état de la lumière.
 * @param {THREE.Scene} scene - La scène où les objets sont présents.
 * 
 * @example
 * canvas.addEventListener('click', (event) => handleLampClick(clickedObject, scene, { lightIsOn: true }));
 */
export const handleLampClick = (clickedObject, scene, state) => {
    if (/lampe/i.test(clickedObject.name)) {
        switchOffTheLight(clickedObject, state);
        toggleTheme(scene, state);
        state.lightIsOn = !state.lightIsOn;
    }
};

/**
 * Change le thème d'éclairage de la scène en fonction de l'état de la lumière.
 *
 * @param {THREE.Scene} scene - La scène Three.js dont le thème doit être modifié.
 * @param {Object} state - L'état de la lumière.
 * 
 * @example
 * toggleTheme(scene, { lightIsOn: true });
 */
const toggleTheme = (scene, state) => {
    scene.children.forEach((child) => {
        if (child instanceof THREE.PointLight) {
            updateLight(child, state.lightIsOn, 0.1, 2, 0xc1d5f7, 0xf7e3c1);
            if (/shadowLight/i.test(child.name)) {
                updateShadowLight(child, state.lightIsOn);
            }
        } else if (child instanceof THREE.AmbientLight) {
            updateLight(child, state.lightIsOn, 0.1, 1.3, 0xc1d5f7, 0xffffff);
        }
    });
    scene.background = new THREE.Color(state.lightIsOn ? 0x4e5257 : 0xffffff);
};

/**
 * Met à jour l'intensité et la couleur d'une source de lumière.
 *
 * @param {THREE.Light} light - La source de lumière à mettre à jour.
 * @param {boolean} isLightOn - Indique si la lumière doit être allumée (true) ou éteinte (false).
 * @param {number} lowIntensity - Intensité lorsque la lumière est éteinte.
 * @param {number} highIntensity - Intensité lorsque la lumière est allumée.
 * @param {THREE.Color} lowColor - Couleur lorsque la lumière est éteinte.
 * @param {THREE.Color} highColor - Couleur lorsque la lumière est allumée.
 * 
 * @example
 * updateLight(pointLight, true, 0.1, 2, 0xc1d5f7, 0xf7e3c1);
 */
const updateLight = (light, isLightOn, lowIntensity, highIntensity, lowColor, highColor) => {
    light.intensity = isLightOn ? lowIntensity : highIntensity;
    light.color = new THREE.Color(isLightOn ? lowColor : highColor);
};

/**
 * Met à jour les propriétés de la lumière projetant l'ombre en fonction de l'état de la lumière.
 *
 * @param {THREE.Light} light - La source de lumière à mettre à jour (dans ce cas, la shadowLight).
 * @param {boolean} isLightOn - Indique si la lumière doit être allumée (true) ou éteinte (false).
 * 
 * @example
 * updateShadowLight(shadowLight, true);
 */
const updateShadowLight = (light, isLightOn) => {
    light.shadow.radius = isLightOn ? 20 : 10; // Ajuster la taille de l'ombre
    light.color.set(isLightOn ? 0x252526 : 0xf7e3c1); // Changer la couleur de la lumière pour correspondre au thème
};

/**
 * Allume ou éteint l'ampoule de la lampe.
 *
 * @param {Object} clickedObject - L'objet cliqué, représentant une lampe.
 * @param {Object} state - L'état de la lumière.
 * 
 * @example
 * switchOffTheLight(clickedObject, { lightIsOn: true });
 */
const switchOffTheLight = (clickedObject, state) => {
    clickedObject.parent.children.forEach((child) => {
        if (/lampe_2/i.test(child.name)) {
            const ampouleMaterial = child.material;
            updateLightMaterial(ampouleMaterial, state.lightIsOn);
        }
    });
};

/**
 * Met à jour le matériau d'une ampoule.
 *
 * @param {THREE.Material} material - Le matériau de l'ampoule à mettre à jour.
 * @param {boolean} isLightOn - Indique si la lumière est allumée (true) ou éteinte (false).
 * 
 * @example
 * updateLightMaterial(ampouleMaterial, true);
 */
const updateLightMaterial = (material, isLightOn) => {
    if (isLightOn) {
        material.emissive.setRGB(0.1, 0.05, 0);
        material.emissiveIntensity = 1;
    } else {
        material.emissive.setRGB(1, 0.573, 0);
        material.emissiveIntensity = 17;
    }
};
