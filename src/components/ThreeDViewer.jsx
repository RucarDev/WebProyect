// src/components/ThreeDViewer.jsx
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeDViewer = () => {
  useEffect(() => {
    // Crear la escena, cámara y renderizador
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('threeDContainer').appendChild(renderer.domElement);

    // Agregar luz ambiental para iluminar la escena
    const light = new THREE.AmbientLight(0x404040, 1);  // Luz suave
    scene.add(light);

    // Agregar una luz direccional (simula luz como la del sol)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);  // Posición de la luz
    scene.add(directionalLight);

    // Cargar el modelo 3D usando GLTFLoader
    const loader = new GLTFLoader();
    loader.load(
      '/models/lion_head_1k.gltf',  // Cambia la ruta al archivo de tu modelo GLTF
      (gltf) => {
        // Asegúrate de que el modelo se haya cargado
        scene.add(gltf.scene);  // Añadir el modelo a la escena
        console.log('Modelo 3D cargado exitosamente:', gltf);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
      },
      (error) => {
        console.error('Error al cargar el modelo 3D:', error);
      }
    );

    // Ajustar la cámara para que el modelo sea visible
    camera.position.z = 3;

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