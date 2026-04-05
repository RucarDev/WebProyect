import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import { useRef, Suspense, useMemo } from "react";
import * as THREE from "three";

function LogoModel() {
  const { scene } = useGLTF("/logo/LogoRWeb_Fondo.glb");
  const modelRef = useRef();

  // Iridescent chrome: dark base + mirror finish + blue/purple/pink rainbow
  // No transmission → performance comparable to MeshStandardMaterial
  const chromeMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: new THREE.Color("#050510"),        // near-black base
    metalness: 1.0,
    roughness: 0.04,                          // near-mirror finish
    reflectivity: 1.0,
    envMapIntensity: 2.5,

    // Iridescence: creates blue/purple/pink highlights
    iridescence: 1.0,
    iridescenceIOR: 1.8,
    iridescenceThicknessRange: [200, 600],    // range for blue↔purple↔pink

    // Subtle emissive glow (blue-purple)
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

    // Emissive pulse
    const pulse = (Math.sin(time * 0.9) + 1) / 2;
    chromeMaterial.emissiveIntensity = 0.15 + pulse * 0.2;

    // --- 1. CALCULATE TARGET POSITIONS ---
    let targetX, targetY, targetScale;

    if (scrollProgress < 0.42) {
      // --- PHASE 1: ENTRANCE (0% to 42%) ---
      const p1 = scrollProgress / 0.42;
      targetX = 3.5 - (p1 * 3.5);     // 3.5 -> 0
      targetY = 4.0 - (p1 * 2.5);     // 4.0 -> 1.5
      targetScale = 6.5 - (p1 * 1.5); // 6.5 -> 5.0

    } else if (scrollProgress < 0.52) {
      // --- PHASE 2: DISPLACEMENT (42% to 52%) ---
      const p2 = (scrollProgress - 0.42) / 0.10;
      targetX = 0 - (p2 * 5.5);       // 0 -> -5.5
      targetY = 1.5 - (p2 * 1.4);     // 1.5 -> 1.0
      targetScale = 5.0 - (p2 * 1.0); // 5.0 -> 4.0

    } else if (scrollProgress < 0.80) {
      // --- PHASE 3: HOLD (52% to 80%) ---
      targetX = -5.5;                 // Frozen at -5.5
      targetY = 0.1;                  // Frozen at 0.1
      targetScale = 4.0;              // Frozen at 4.0

    } else {
      // --- PHASE 4: RETURN (80% to 100%) ---
      const p3 = (scrollProgress - 0.80) / 0.20;
      targetX = -5.5 + (p3 * 5.5);    // -5.5 -> 0
      targetY = 0.3;                  // Stays at 0.1
      targetScale = 4.0 - (p3 * 1.8); // 4.0 -> 2.5
    }

    // --- 2. APPLY LERP FOR SMOOTH MOVEMENT ---
    modelRef.current.position.x = THREE.MathUtils.lerp(modelRef.current.position.x, targetX, 0.1);
    modelRef.current.position.y = THREE.MathUtils.lerp(modelRef.current.position.y, targetY, 0.1);

    const currentScale = modelRef.current.scale.x;
    const lerpedScale = THREE.MathUtils.lerp(currentScale, targetScale, 0.1);
    modelRef.current.scale.setScalar(lerpedScale);

    // Smooth rotation — showcases iridescent reflections
    modelRef.current.rotation.y = -Math.PI / 2 + time * 0.2 + scrollProgress * 2;
  });

  return <primitive ref={modelRef} object={scene} />;
}

export default function Hero3DBackground() {
  return (
    // Fixed position, z-[0] and dark bg as the base layer for the entire site
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
          {/* Environment map required for iridescent chrome reflections */}
          <Environment preset="night" />

          {/* Cool blue directional light from above */}
          <directionalLight position={[3, 8, 5]} intensity={3} color="#a0c0ff" />

          {/* Purple fill light from below */}
          <pointLight position={[-4, -4, 3]} color="#7b2fff" intensity={20} distance={25} />

          {/* Pink-magenta accent from the right */}
          <pointLight position={[6, 1, 4]} color="#c026d3" intensity={15} distance={22} />

          <LogoModel />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/logo/LogoRWeb_Fondo.glb");