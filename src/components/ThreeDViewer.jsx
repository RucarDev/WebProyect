// src/components/ThreeDViewer.jsx
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; // Importación correcta del cargador

const ThreeDViewer = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('threeDContainer').appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load(
      'C:\Users\Usuario\Desktop\WEB\WebProyect\src\assets\grass_medium_01_1k',  // Ruta a tu archivo GLTF
      (gltf) => {
        scene.add(gltf.scene);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
      },
      (error) => {
        console.error('Error al cargar el modelo 3D:', error);
      }
    );

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div id="threeDContainer" style={{ width: '100%', height: '500px' }}></div>;
};

export default ThreeDViewer;