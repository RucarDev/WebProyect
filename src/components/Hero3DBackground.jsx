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
    // Progreso de scroll real de toda la página (0 a 1)
    const scrollProgress = Math.min(scrollY / (documentHeight - vh), 1);
    const time = state.clock.getElapsedTime();

    // Pulso emissivo sutil: morado profundo ↔ azul índigo
    const pulse = (Math.sin(time * 0.9) + 1) / 2;
    chromeMaterial.emissiveIntensity = 0.15 + pulse * 0.2;

    // --- LÓGICA DE ANIMACIÓN POR FASES ---
    let targetX, targetY, targetScale;

    if (scrollProgress < 0.42) {
      // --- FASE 1: ENTRADA (0% a 42%) ---
      const p1 = scrollProgress / 0.42;

      targetX = 3.5 - (p1 * 3.5);     // 3.5 -> 0 (Centro)
      targetY = 4.0 - (p1 * 2.5);     // 4.0 -> 1.5
      targetScale = 6.5 - (p1 * 1.5); // 6.5 -> 5.0

    } else if (scrollProgress < 0.55) {
      // --- FASE 2: DESPLAZAMIENTO RÁPIDO (42% a 55%) ---
      // El logo vuela a la izquierda (-5.5) y se encoge bastante (2.2)
      const p2 = (scrollProgress - 0.42) / 0.13;

      targetX = 0 - (p2 * 6);       // 0 -> -5.5
      targetY = 1.5 - (p2 * 0.5);     // 1.5 -> 1.0
      targetScale = 5.0 - (p2 * 1); // 5.0 -> 2.2 (Aquí es donde se hace pequeño)

    } else if (scrollProgress < 0.80) {
      // --- FASE EXTRA: PAUSA (55% a 80%) ---
      // Mantenemos el tamaño pequeño y la posición lateral
      targetX = -6;
      targetY = 1.0;
      targetScale = 4;

    } else {
      // --- FASE 3: REGRESO AL CENTRO (80% a 100%) ---
      const p3 = (scrollProgress - 0.80) / 0.20;

      targetX = -6 + (p3 * 6);    // -5.5 -> 0 (Vuelve al centro)
      targetY = 1.0 - (p3 * 0.3);     // 1.0 -> 0.2
      // MANTENER TAMAÑO PEQUEÑO: Se queda en 2.2 para no tapar el botón final
      targetScale = 4 - (p3 * 1.65);
    }

    modelRef.current.position.x = targetX;
    modelRef.current.position.y = targetY;
    modelRef.current.scale.setScalar(targetScale);

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
          <pointLight position={[6, 1, 4]} color="#c026d3" intensity={15} distance={22} />

          <LogoModel />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/logo/LogoRWeb_Fondo.glb");