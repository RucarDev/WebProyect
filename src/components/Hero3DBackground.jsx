import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import { useRef, Suspense, useMemo } from "react";
import * as THREE from "three";

function LogoModel() {
  const { scene } = useGLTF("/logo/LogoRWeb_Fondo.glb");
  const modelRef = useRef();

  // Chrome iridiscente: oscuro + espejo + arcoíris azul/morado/rosa
  // Sin transmission → rendimiento comparable a MeshStandardMaterial
  const chromeMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: new THREE.Color("#050510"),        // base casi negra
    metalness: 1.0,
    roughness: 0.04,                          // casi espejo
    reflectivity: 1.0,
    envMapIntensity: 2.5,

    // Iridiscencia: crea los destellos azul/morado/rosa como en la imagen
    iridescence: 1.0,
    iridescenceIOR: 1.8,
    iridescenceThicknessRange: [200, 600],    // rango que da azul↔morado↔rosa

    // Brillo emissivo suave (azul-morado)
    emissive: new THREE.Color("#2a0a5a"),
    emissiveIntensity: 0.2,

    transparent: false,
    side: THREE.DoubleSide,
  }), []);

  useMemo(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = chromeMaterial;
        child.castShadow = false;
        child.receiveShadow = false;
      }
    });
  }, [scene, chromeMaterial]);

  useFrame((state) => {
    if (!modelRef.current) return;

    const scrollY = window.scrollY;
    const vh = window.innerHeight;
    const scrollProgress = Math.min(scrollY / vh, 1);
    const time = state.clock.getElapsedTime();

    // Pulso emissivo sutil: morado profundo ↔ azul índigo
    const pulse = (Math.sin(time * 0.9) + 1) / 2;
    chromeMaterial.emissiveIntensity = 0.15 + pulse * 0.2;

    // Posición Y
    modelRef.current.position.y = 4 - scrollProgress * 5;

    // Posición X
    modelRef.current.position.x = 3.5 - scrollProgress * 3.5;

    // Escala
    modelRef.current.scale.setScalar(6.5 - scrollProgress * 3.5);

    // Rotación lenta — muestra mejor las reflexiones iridiscentes
    modelRef.current.rotation.y = -Math.PI / 2 + time * 0.2 + scrollProgress * 2;
  });

  return <primitive ref={modelRef} object={scene} />;
}

export default function Hero3DBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[0] pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.4,
        }}
      >
        <Suspense fallback={null}>
          {/* Entorno imprescindible para que el chrome iridiscente refleje */}
          <Environment preset="night" />

          {/* Luz fría azulada desde arriba */}
          <directionalLight position={[3, 8, 5]} intensity={3} color="#a0c0ff" />

          {/* Relleno morado desde abajo */}
          <pointLight position={[-4, -4, 3]} color="#7b2fff" intensity={20} distance={25} />

          {/* Acento rosa-magenta desde la derecha */}
          <pointLight position={[6, 1, 4]}  color="#c026d3" intensity={15} distance={22} />

          <LogoModel />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/logo/LogoRWeb_Fondo.glb");