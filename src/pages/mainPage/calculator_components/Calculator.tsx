import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, useScroll } from "@react-three/drei";
import { CAL_EO, CAL_SO } from "../../../data/scroll_offset";

const Calculator: React.FC = () => {
  const scroll = useScroll();
  const meshRef = useRef<THREE.Mesh>(null!);
  const [wasAnimated, setWasAnimated] = useState(false);
  const gltf = useGLTF("/assets/models/calculator/calculator.glb");
  const { animations } = useGLTF("/assets/models/calculator/button.glb");
  let mixer = new THREE.AnimationMixer(gltf.scene);
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const { camera } = useThree();

  const findAndApplyMaterial = (object: THREE.Object3D) => {
    if (object instanceof THREE.Mesh && object.name === "Cube193") {
      const material = object.material as THREE.MeshStandardMaterial;
      material.transparent = true;
      material.opacity = 0.3;
    }
  };

  useEffect(() => {
    let parentMesh: THREE.Object3D<THREE.Object3DEventMap> =
      gltf.scene.children[0];
    parentMesh.children.forEach((child) => {
      findAndApplyMaterial(child);
    });
    gltf.animations.forEach((clip) => {
      if (wasAnimated) {
        const action = mixer.clipAction(clip);
        action.reset();
        action.loop = THREE.LoopOnce;
        action.clampWhenFinished = true;
        action.play();
      }
    });
  }, [gltf.scene, wasAnimated, gltf]);

  useFrame((state, delta) => {
    if (CAL_SO < scroll.offset && scroll.offset < CAL_EO) {
      if (!wasAnimated) setWasAnimated(true);
      mixer.update(delta);
    } else if (wasAnimated) setWasAnimated(false);
  });

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (CAL_SO < scroll.offset && scroll.offset < CAL_EO) {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects([meshRef.current]);
      if (intersects.length > 0) {
        const clickedMesh = intersects[0].object;
        animations.forEach((clip) => {
          if (clip.name.includes(clickedMesh.name.slice(-3))) {
            const action = mixer.clipAction(clip);
            action.reset();
            action.loop = THREE.LoopOnce;
            action.clampWhenFinished = true;
            action.play();
          }
        });
      }
    }
  };

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return (
    <primitive
      ref={meshRef}
      object={gltf.scene}
      scale={[0.5, 0.5, 0.5]}
      onClick={handleMouseDown}
    />
  );
};

export default Calculator;
