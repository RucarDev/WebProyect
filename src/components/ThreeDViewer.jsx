import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function Model({ url }) {
  // useGLTF fallará si la URL es mala, por eso necesitamos el Suspense en el padre
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export default function ThreeDViewer({ modelPath }) {
  // Si no hay ruta, no renderizamos nada para evitar el pantallazo blanco
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