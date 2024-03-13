import * as THREE from "three";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF, useScroll } from "@react-three/drei";

const START_SCROLL_OFFSET = 0;
const END_SCROLL_OFFSET = 0.1428;

const Box: React.FC = () => {
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
    if (meshRef.current) {
      meshRef.current.position.set(0, 0, -10);
    }
    // animations.forEach((clip) => {
    //   const action = mixer.clipAction(clip);
    //   action.play();
    // });
  }, [scene, actions]);

  useFrame((state, delta) => {
    // mixer.update(delta);
    if (
      START_SCROLL_OFFSET < scroll.offset &&
      scroll.offset < END_SCROLL_OFFSET &&
      meshRef.current
    ) {
      meshRef.current.rotation.y =
        Math.PI * (scroll.offset / END_SCROLL_OFFSET);
      meshRef.current.position.z =
        -10 + 9 * (scroll.offset / END_SCROLL_OFFSET);
      meshRef.current.position.y = -3 * (scroll.offset / END_SCROLL_OFFSET);
    }
  });

  return <primitive ref={meshRef} object={scene} scale={[0.5, 0.5, 0.5]} />;
};

export default Box;
