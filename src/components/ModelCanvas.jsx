// src/components/ModelCanvas.jsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import FloatingModel from './FloatingModel';
import { Suspense } from 'react';

export default function ModelCanvas() {
  return (
    <div className="h-[500px] w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <Suspense fallback={null}>
          <FloatingModel />
          <Environment preset="night" />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

