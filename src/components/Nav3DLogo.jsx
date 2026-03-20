import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import { useRef, Suspense, useEffect } from "react";
import * as THREE from 'three';

function LogoModel({ isHovered, isDark }) {
  const { scene } = useGLTF("/logo/LogoRWeb.glb");
  const modelRef = useRef();
  const baseRotationY = -Math.PI / 2;

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        // REEMPLAZO TOTAL DE MATERIAL:
        // Si es Dark (fondo blanco), forzamos un material mate negro puro
        // Si no, volvemos al blanco brillante
        child.material = new THREE.MeshStandardMaterial({
          color: isDark ? "#000000" : "#ffffff",
          roughness: isDark ? 1 : 0.5, // Totalmente mate en negro para que no brille gris
          metalness: isDark ? 0 : 0.5, // Sin metalizado en negro
        });
        child.material.needsUpdate = true;
      }
    });
  }, [scene, isDark]);

  useFrame((state, delta) => {
    if (modelRef.current) {
      if (isHovered) {
        modelRef.current.rotation.y += delta * 5;
      } else {
        const currentY = modelRef.current.rotation.y;
        modelRef.current.rotation.y += (baseRotationY - currentY) * 0.15;
      }
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={1.6}
      rotation={[0, baseRotationY, 0]}
    />
  );
}

export default function Nav3DLogo({ isHovered, isDark }) {
  return (
    <div className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center pointer-events-none">
      {/* Usar isDark en la key evita que el logo desaparezca al refrescar el contexto */}
      <Canvas
        key={isDark ? "dark-canvas" : "light-canvas"}
        camera={{ position: [0, 0, 6.5], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          {/* Si es dark, bajamos la intensidad de la luz ambiente para que sea negro real */}
          <ambientLight intensity={isDark ? 0.2 : 1.5} />
          <pointLight position={[10, 10, 10]} intensity={isDark ? 1.5 : 2} />

          {/* Quitamos el Environment en modo dark para evitar reflejos grises del cielo/ciudad */}
          {!isDark && <Environment preset="city" />}

          <LogoModel isHovered={isHovered} isDark={isDark} />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/logo/LogoRWeb.glb");