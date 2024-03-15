import * as THREE from "three";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

const tempBoxes = new THREE.Object3D();

const Stars: React.FC = () => {
  const { nodes } = useGLTF("/assets/models/star.glb");
  const ref = useRef<THREE.InstancedMesh>(null!);
  const starsNum = 4000;

  useEffect(() => {
    let counter = 0;
    for (let i = 0; i < 20000; i++) {
      const id = counter++;
      tempBoxes.scale.set(0.1, 0.1, 0.1);
      tempBoxes.position.set(
        (Math.random() - 0.5) * 150,
        (Math.random() - 0.5) * 150,
        (Math.random() - 0.5) * starsNum
      );
      tempBoxes.updateMatrix();
      ref.current.setMatrixAt(id, tempBoxes.matrix);
    }
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.z += delta / 200;
    }
  });

  return (
    <instancedMesh
      ref={ref}
      args={[
        (nodes.Icosphere as Mesh).geometry,
        (nodes.Icosphere as Mesh).material,
        starsNum * 4,
      ]}
    />
  );
};

export default Stars;
