import * as THREE from "three";
import { Float, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useRecoilValue } from "recoil";
import { moveModeState } from "../../../recoil/globalState";

const Display: React.FC<{ wasAnimated: boolean; isScannerOpen: boolean }> = ({
  wasAnimated,
  isScannerOpen,
}) => {
  const displayRef = useRef<THREE.Mesh>(null!);
  const { scene, animations } = useGLTF("/assets/models/dos/display.glb");
  const mixer = new THREE.AnimationMixer(scene);
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const { camera } = useThree();
  const moveMode = useRecoilValue(moveModeState);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (wasAnimated && !moveMode) {
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
              return;
            } else if (clickedMesh.name === "popup_button_n") {
              action.reset().stop();
              return;
            } else if (clickedMesh.name === "popup_button_y") {
              action.reset().stop();
              return window.open(
                "https://develop-order-service.site/",
                "_blank"
              );
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
  }, [wasAnimated, animations, isScannerOpen]);

  useFrame((state, delta) => {
    if (wasAnimated) mixer.update(delta);
  });

  return (
    <Float floatIntensity={0.1} speed={4} rotationIntensity={0.1}>
      <primitive ref={displayRef} object={scene} onClick={handleClick} />
    </Float>
  );
};

export default Display;
