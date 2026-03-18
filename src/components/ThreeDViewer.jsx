import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function Model({ url }) {
  // Asegúrate de que url no sea null
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export default function ThreeDViewer({ modelPath }) {
  if (!modelPath) return null;

  return (
    <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
      <Suspense fallback={null}>
        <Stage intensity={0.5} environment="city" adjustCamera={true}>
          <Model url={modelPath} />
        </Stage>
        {/* Controles: Rotación (clic izq), Zoom (rueda), Pan (clic der) */}
        <OrbitControls 
          enableZoom={true} 
          enableRotate={true}
          makeDefault 
        />
      </Suspense>
    </Canvas>
  );
}