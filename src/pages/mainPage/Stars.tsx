import * as THREE from "three";
import { useEffect, useRef } from "react";
import { useFrame, ThreeElements, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

const tempBoxes = new THREE.Object3D();

const Stars: React.FC = () => {
  const { nodes } = useGLTF("/assets/models/star.glb");
  const ref = useRef<THREE.InstancedMesh>(null!);
  useEffect(() => {
    let counter = 0;
    for (let x = 0; x < 100; x++) {
      for (let z = 0; z < 100; z++) {
        const id = counter++;
        tempBoxes.scale.set(0.1, 0.1, 0.1);
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
    // let counter = 0;
    // const t = clock.oldTime * 0.001;
    // for (let x = 0; x < 100; x++) {
    //   for (let z = 0; z < 100; z++) {
    //     const id = counter++;
    //     tempBoxes.scale.set(0.1, 0.1, 0.1);
    //     tempBoxes.position.set(
    //       (Math.random() - 0.5) * 100,
    //       (Math.random() - 0.5) * 100,
    //       (Math.random() - 0.5) * 100
    //     );
    //     tempBoxes.rotation.y = t;
    //     tempBoxes.updateMatrix();
    //     ref.current.setMatrixAt(id, tempBoxes.matrix);
    //   }
    // }

    if (ref.current) {
      ref.current.rotation.y += delta / 30;
    }
  });

  return (
    <instancedMesh
      ref={ref}
      args={[(nodes.Icosphere as Mesh).geometry, undefined, 1000]}
    />
  );
};

export default Stars;
