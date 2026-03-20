import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import { useRef, Suspense, useMemo } from "react";
import * as THREE from "three";

function LogoModel() {
  const { scene } = useGLTF("/logo/LogoRWeb_Fondo.glb");
  const modelRef = useRef();

  // Material cristal mágico VISIBLE sobre fondo oscuro
  const crystalMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    // Cristal semitransparente — menos de 1 para que se vea sobre negro
    transmission: 0.6,
    thickness: 2.5,
    roughness: 0.05,
    ior: 1.8,

    // Iridiscencia arcoíris
    iridescence: 1,
    iridescenceIOR: 1.6,
    iridescenceThicknessRange: [150, 700],

    // Reflexiones y brillo
    metalness: 0.1,
    reflectivity: 1,
    envMapIntensity: 2.5,

    // Color base visible
    color: new THREE.Color("#a0c8ff"),
    emissive: new THREE.Color("#7b2fff"),
    emissiveIntensity: 0.35,   // Más alto para que se vea siempre

    transparent: true,
    opacity: 1,
    side: THREE.DoubleSide,
  }), []);

  useMemo(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = crystalMaterial;
      }
    });
  }, [scene, crystalMaterial]);

  const colorA = useMemo(() => new THREE.Color("#7b2fff"), []);
  const colorB = useMemo(() => new THREE.Color("#00e5ff"), []);

  useFrame((state) => {
    if (modelRef.current) {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const scrollProgress = Math.min(scrollY / vh, 1);
      const time = state.clock.getElapsedTime();

      // Pulso de color emissivo morado ↔ cian
      const pulse = (Math.sin(time * 1.4) + 1) / 2;
      crystalMaterial.emissive.lerpColors(colorA, colorB, pulse);
      crystalMaterial.emissiveIntensity = 0.3 + pulse * 0.25;

      // Posición Y
      modelRef.current.position.y =
        4 - scrollProgress * (4 - (-1));

      // Posición X
      modelRef.current.position.x =
        3.5 - scrollProgress * 3.5;

      // Escala
      const scale = 6.5 - scrollProgress * (6.5 - 3);
      modelRef.current.scale.setScalar(scale);

      // Rotación
      modelRef.current.rotation.y =
        -Math.PI / 2 + time * 0.2 + scrollProgress * 2;
    }
  });

  return <primitive ref={modelRef} object={scene} />;
}

function AnimatedLights() {
  const purpleRef = useRef();
  const cyanRef   = useRef();
  const goldRef   = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    purpleRef.current.position.set(Math.sin(t * 0.7) * 6,  Math.cos(t * 0.5) * 4, 6);
    cyanRef.current.position.set(Math.cos(t * 0.6) * 6,    Math.sin(t * 0.8) * 4, 6);
    goldRef.current.position.set(Math.sin(t * 0.4 + 2) * 5, -2, Math.cos(t * 0.9) * 4 + 4);
  });

  return (
    <>
      <pointLight ref={purpleRef} color="#a855f7" intensity={12} distance={25} />
      <pointLight ref={cyanRef}   color="#06b6d4" intensity={12} distance={25} />
      <pointLight ref={goldRef}   color="#fbbf24" intensity={8}  distance={20} />
    </>
  );
}

export default function Hero3DBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#020202] pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.6,
        }}
      >
        <Suspense fallback={null}>
          {/* Luz ambiente suficiente para ver el modelo */}
          <ambientLight intensity={1.2} color="#ffffff" />
          <directionalLight position={[5, 5, 5]} intensity={2} color="#ffffff" />

          {/* Luces de color para cáusticas mágicas */}
          <AnimatedLights />

          {/* Entorno que el cristal refleja */}
          <Environment preset="studio" />

          <LogoModel />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/logo/LogoRWeb_Fondo.glb");