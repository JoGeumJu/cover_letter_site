import * as THREE from "three";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF, useScroll } from "@react-three/drei";

const Box: React.FC = () => {
  const startScrollPosition = 0;
  const endScrollPosition = 0.125;
  const scroll = useScroll();
  const meshRef = useRef<THREE.Mesh>(null);
  const { scene, animations } = useGLTF("/assets/models/heongee_test2.glb");
  const { actions } = useAnimations(animations, meshRef);
  let mixer = new THREE.AnimationMixer(scene);

  const findAndApplyMaterial = (object: THREE.Object3D) => {
    if (object instanceof THREE.Mesh && object.name === "glass") {
      const material = object.material as THREE.MeshStandardMaterial;
      material.transparent = true;
      material.opacity = 0.3;
    }
  };

  useEffect(() => {
    scene.children.forEach((child) => {
      findAndApplyMaterial(child);
    });
    // animations.forEach((clip) => {
    //   const action = mixer.clipAction(clip);
    //   action.play();
    // });
  }, [scene, actions]);

  useFrame((state, delta) => {
    mixer.update(delta);
    if (
      startScrollPosition < scroll.offset &&
      scroll.offset < endScrollPosition &&
      meshRef.current
    ) {
      meshRef.current.rotation.y =
        Math.PI * (scroll.offset / endScrollPosition);
      meshRef.current.position.z = 17.5 * (scroll.offset / endScrollPosition);
      meshRef.current.position.y = -3 * (scroll.offset / endScrollPosition);
    }
  });

  return <primitive ref={meshRef} object={scene} scale={[0.5, 0.5, 0.5]} />;
};

export default Box;
