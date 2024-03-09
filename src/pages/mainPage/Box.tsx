import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useFrame, ThreeElements, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

type BoxProps = ThreeElements["mesh"];

const Box: React.FC<BoxProps> = (props) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const gltf = useGLTF("/assets/models/heongee_test2.glb");
  const { camera, raycaster, mouse } = useThree();
  //   const [hovered, setHover] = useState<boolean>(false);
  //   const [active, setActive] = useState<boolean>(false);
  useEffect(() => {
    // GLTF 모델이 로드된 후에 특정 메쉬를 찾아 처리합니다.
    const findAndApplyMaterial = (object: THREE.Object3D) => {
      if (object instanceof THREE.Mesh && object.name === "glass") {
        // "glass" 메쉬를 찾습니다.
        const material = object.material as THREE.MeshStandardMaterial; // 혹은 MeshBasicMaterial에 따라 적절히 변경
        material.transparent = true; // 머티리얼을 투명하게 설정합니다.
        material.opacity = 0.3;
      }
      // 자식 요소에 대해서도 동일한 처리를 재귀적으로 적용합니다.
      object.children.forEach((child) => {
        findAndApplyMaterial(child);
      });
    };

    // 모델의 Root 객체에서 시작하여 모든 자식 객체를 검색합니다.
    gltf.scene.children.forEach((child) => {
      findAndApplyMaterial(child);
    });
  }, [gltf]);
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta / 10;
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <>
      <primitive ref={meshRef} object={gltf.scene} scale={[0.5, 0.5, 0.5]} />
    </>
  );
};

export default Box;
