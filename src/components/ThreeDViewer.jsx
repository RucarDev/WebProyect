// src/components/ThreeDViewer.jsx
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeDViewer = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('threeDContainer').appendChild(renderer.domElement);

    // Cargar el modelo GLTF
    const loader = new GLTFLoader();
    loader.load(
      '/models/grass_medium_01_1k.gltf',  // Cambia la ruta al archivo de tu modelo 3D
      (gltf) => {
        scene.add(gltf.scene);  // Añadir el modelo a la escena
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
      },
      (error) => {
        console.error('Error al cargar el modelo 3D:', error);
      }
    );

    camera.position.z = 5;

    // Animación para que el modelo gire
    const animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div id="threeDContainer" style={{ width: '100%', height: '500px' }}></div>;
};

export default ThreeDViewer;