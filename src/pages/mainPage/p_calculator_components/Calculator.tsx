import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, useGLTF, useScroll } from "@react-three/drei";
import { CAL_EO, CAL_SO } from "../../../data/scroll_offset";

const Calculator: React.FC = () => {
  const scroll = useScroll();
  const meshRef = useRef<THREE.Mesh>(null!);
  const [wasAnimated, setWasAnimated] = useState(false);
  const { scene, animations } = useGLTF(
    "/assets/models/calculator/calculator.glb"
  );
  let mixer = new THREE.AnimationMixer(scene);
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const { camera } = useThree();

  const findAndApplyMaterial = (object: THREE.Object3D) => {
    if (object instanceof THREE.Mesh && object.name.includes("window")) {
      const material = object.material as THREE.MeshStandardMaterial;
      material.transparent = true;
      material.opacity = 0.2;
    } else if (object instanceof THREE.Mesh && object.name.includes("water")) {
      const material = object.material as THREE.MeshStandardMaterial;
      material.transparent = true;
      material.opacity = 0.6;
    }
  };

  useEffect(() => {
    let parentMesh: THREE.Object3D<THREE.Object3DEventMap> = scene.children[0];
    parentMesh.children.forEach((child) => {
      findAndApplyMaterial(child);
    });
  }, []);

  useEffect(() => {
    if (wasAnimated) {
      animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        if (clip.name === "main") {
          action.loop = THREE.LoopOnce;
          action.clampWhenFinished = true;
          action.setEffectiveTimeScale(1.3);
          action.reset().play();
        } else if (clip.name.includes("fishs")) {
          action.loop = THREE.LoopRepeat;
          action.reset().play();
        } else if (
          clip.name.includes("Armature") &&
          !clip.name.includes("020")
        ) {
          //019 21 22 23
          action.loop = THREE.LoopRepeat;
          action.reset().play();
        }
      });
    }
  }, [wasAnimated, animations]);

  useFrame((state, delta) => {
    if (CAL_SO < scroll.offset && scroll.offset < CAL_EO) {
      if (!wasAnimated) setWasAnimated(true);
      mixer.update(delta);
    } else if (wasAnimated) setWasAnimated(false);
  });

  const handleClcik = (event: React.MouseEvent<HTMLDivElement>) => {
    if (CAL_SO < scroll.offset && scroll.offset < CAL_EO) {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects([meshRef.current]);
      if (intersects.length > 0) {
        const clickedMesh = intersects[0].object;
        animations.forEach((clip) => {
          console.log(clip.name);
          if (clip.name.includes("Cube." + clickedMesh.name.slice(-3))) {
            const action = mixer.clipAction(clip);
            action.loop = THREE.LoopOnce;
            action.reset().play();
          }
        });
      }
    }
  };

  return (
    <Float floatIntensity={0.2} speed={4} rotationIntensity={0.2}>
      <primitive
        ref={meshRef}
        object={scene}
        scale={[0.5, 0.5, 0.5]}
        onClick={handleClcik}
      />
    </Float>
  );
};

export default Calculator;
