import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

export default function FloatingModel() {
  const groupRef = useRef();
  const { scene } = useGLTF('/mandlacx.glb');

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.05; // soft float
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={9} />
    </group>
  );
}

