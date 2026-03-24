import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

interface PlanetProps {
  textureUrl: string;
}

export function Planet({ textureUrl }: Readonly<PlanetProps>) {
  const meshRef = useRef<Mesh>(null);
  const texture = useTexture(textureUrl);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
