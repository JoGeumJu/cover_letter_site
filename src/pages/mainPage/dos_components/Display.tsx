import * as THREE from "three";
import { Float, useGLTF, useScroll } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { DOS_EO, DOS_SO } from "../../../data/scroll_offset";
import { act } from "react-dom/test-utils";

const Display: React.FC = () => {
  const [wasAnimated, setWasAnimated] = useState(false);
  const scroll = useScroll();
  const displayRef = useRef<THREE.Mesh>(null!);
  const { scene, animations } = useGLTF("/assets/models/dos/display.glb");
  const mixer = new THREE.AnimationMixer(scene);
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const { camera } = useThree();

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (DOS_SO < scroll.offset && scroll.offset < DOS_EO) {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects([displayRef.current]);
      if (intersects.length > 0) {
        const clickedMesh = intersects[0].object;
        animations.forEach((clip) => {
          if (clip.name.includes("popup")) {
            const action = mixer.clipAction(clip);
            if (clickedMesh.name.includes("site_button")) {
              action.loop = THREE.LoopOnce;
              action.clampWhenFinished = true;
              action.reset().play();
            } else if (clickedMesh.name === "popup_button_n") {
              action.reset().stop();
            } else if (clickedMesh.name === "popup_button_y") {
              window.open("https://develop-order-service.site/", "_blank");
              action.reset().stop();
            }
          }
        });
      }
    }
  };

  useEffect(() => {
    if (wasAnimated) {
      animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        if (!clip.name.includes("popup")) {
          action.loop = THREE.LoopOnce;
          action.clampWhenFinished = true;
          action.reset().play();
        } else {
          action.reset().play();
          action.paused = true;
        }
      });
    }
  }, [scene, wasAnimated, animations]);

  useFrame((state, delta) => {
    if (DOS_SO < scroll.offset && scroll.offset < DOS_EO) {
      if (!wasAnimated) setWasAnimated(true);
      mixer.update(delta);
    } else if (wasAnimated) setWasAnimated(false);
  });
  return (
    <Float floatIntensity={0.2} speed={4} rotationIntensity={0.2}>
      <primitive ref={displayRef} object={scene} onClick={handleClick} />;
    </Float>
  );
};

export default Display;
