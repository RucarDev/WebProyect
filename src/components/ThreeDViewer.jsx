import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function Model({ url }) {
  // useGLTF will throw if the URL is invalid — Suspense in the parent handles this
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export default function ThreeDViewer({ modelPath }) {
  // If no path is provided, render nothing to avoid a blank white screen
  if (!modelPath) return null;

  return (
    <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
      <Suspense fallback={null}>
        <Stage intensity={0.5} environment="city" adjustCamera={true}>
          <Model url={modelPath} />
        </Stage>
        <OrbitControls enableZoom={true} enableRotate={true} makeDefault />
      </Suspense>
    </Canvas>
  );
}