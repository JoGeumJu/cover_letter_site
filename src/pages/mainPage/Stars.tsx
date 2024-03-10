import * as THREE from "three";
import { useEffect, useRef } from "react";
import { useFrame, ThreeElements, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

const tempBoxes = new THREE.Object3D();

const Stars: React.FC = () => {
  const { nodes, materials } = useGLTF("/assets/models/star.glb");
  const ref = useRef<THREE.InstancedMesh>(null!);
  useEffect(() => {
    let counter = 0;
    for (let x = 0; x < 100; x++) {
      for (let z = 0; z < 100; z++) {
        const id = counter++;
        tempBoxes.scale.set(0.1, 0.1, 0.1);
        tempBoxes.castShadow = true;
        tempBoxes.position.set(
          (Math.random() - 0.5) * 200,
          (Math.random() - 0.5) * 200,
          (Math.random() - 0.5) * 200
        );
        tempBoxes.updateMatrix();
        ref.current.setMatrixAt(id, tempBoxes.matrix);
      }
    }
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta / 100;
      ref.current.rotation.x += delta / 100;
    }
  });

  console.log(materials);
  console.log(nodes);

  return (
    <instancedMesh
      ref={ref}
      // args={[(nodes.Icosphere as Mesh).geometry, undefined, 1000]}
      args={[
        (nodes.Icosphere as Mesh).geometry,
        (nodes.Icosphere as Mesh).material,
        1000,
      ]}
    />
  );
};

export default Stars;
