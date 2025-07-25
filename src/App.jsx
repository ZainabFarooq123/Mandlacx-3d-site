// src/App.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import FloatingModel from './components/FloatingModel';

export default function App() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-black">
      <h1 className="text-white text-4xl font-bold px-6 pt-4">
        MandlacX Edge <em className="text-gray-400 font-medium">Processor</em>
      </h1>

      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <FloatingModel />
      </Canvas>
    </div>
  );
}


