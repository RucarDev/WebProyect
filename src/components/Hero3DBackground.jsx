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
    const documentHeight = document.documentElement.scrollHeight;
    const vh = window.innerHeight;
    const scrollProgress = Math.min(scrollY / (documentHeight - vh), 1);
    const time = state.clock.getElapsedTime();

    // Pulso emissivo
    const pulse = (Math.sin(time * 0.9) + 1) / 2;
    chromeMaterial.emissiveIntensity = 0.15 + pulse * 0.2;

    // --- 1. CALCULAMOS LAS POSICIONES OBJETIVO ---
    let targetX, targetY, targetScale;

    if (scrollProgress < 0.42) {
      // --- FASE 1: ENTRADA (0% a 42%) ---
      const p1 = scrollProgress / 0.42;
      targetX = 3.5 - (p1 * 3.5);     // 3.5 -> 0
      targetY = 4.0 - (p1 * 2.5);     // 4.0 -> 1.5
      targetScale = 6.5 - (p1 * 1.5); // 6.5 -> 5.0

    } else if (scrollProgress < 0.52) {
      // --- FASE 2: DESPLAZAMIENTO (42% a 55%) ---
      const p2 = (scrollProgress - 0.42) / 0.10;
      targetX = 0 - (p2 * 5.5);       // 0 -> -5.5 (Ajustado a tu valor original)
      targetY = 1.5 - (p2 * 1.4);     // 1.5 -> 1.0
      targetScale = 5.0 - (p2 * 1.0); // 5.0 -> 4.0

    } else if (scrollProgress < 0.80) {
      // --- FASE EXTRA: PAUSA (55% a 80%) ---
      targetX = -5.5;                 // Congelado en -5.5
      targetY = 0.1;                  // Congelado en 1.0
      targetScale = 4.0;              // Congelado en 4.0

    } else {
      // --- FASE 3: REGRESO (80% a 100%) ---
      const p3 = (scrollProgress - 0.80) / 0.20;
      targetX = -5.5 + (p3 * 5.5);    // -5.5 -> 0
      targetY = 0.1;                  // Se mantiene en 1.0
      targetScale = 4.0 - (p3 * 1.5); // 4.0 -> 2.3
    }

    // --- 2. APLICAMOS 'LERP' PARA UN MOVIMIENTO FLUIDO (EL SECRETO) ---
    // El 0.08 es la velocidad de suavizado. Ajusta este número si lo quieres más rápido (0.15) o más lento (0.05)
    modelRef.current.position.x = THREE.MathUtils.lerp(modelRef.current.position.x, targetX, 0.1);
    modelRef.current.position.y = THREE.MathUtils.lerp(modelRef.current.position.y, targetY, 0.1);

    // Para la escala usamos el valor actual en X como referencia
    const currentScale = modelRef.current.scale.x;
    const lerpedScale = THREE.MathUtils.lerp(currentScale, targetScale, 0.1);
    modelRef.current.scale.setScalar(lerpedScale);

    // Rotación suave
    modelRef.current.rotation.y = -Math.PI / 2 + time * 0.2 + scrollProgress * 2;
  });

  return <primitive ref={modelRef} object={scene} />;
}

export default function Hero3DBackground() {
  return (
    // position: fixed, z-[0] y el bg oscuro para ser la base de toda la web
    <div className="fixed top-0 left-0 w-full h-full z-[0] pointer-events-none bg-[#020202]">
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
          <pointLight position={[6, 1, 4]} color="#c026d3" intensity={15} distance={22} />

          <LogoModel />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/logo/LogoRWeb_Fondo.glb");