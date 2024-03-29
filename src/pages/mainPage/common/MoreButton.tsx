import * as THREE from "three";
import { useEffect, useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, useGLTF, useScroll } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isLoadingState, moveModeState } from "../../../recoil/globalState";

interface ButtonPropsType {
  position?: number[];
  rotation?: number[];
  scale?: number[];
  wasAnimated: boolean;
  content: string;
  delay: 15 | 20 | 35 | 45 | 90;
}

const MoreButton: React.FC<ButtonPropsType> = ({
  position,
  rotation,
  scale,
  wasAnimated,
  content,
  delay,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const moveMode = useRecoilValue(moveModeState);
  const { scene, animations } = useGLTF(
    `/assets/models/book/book_${delay}.glb`
  );
  const copiedScene = useMemo(() => scene.clone(), [scene]);
  let mixer = new THREE.AnimationMixer(copiedScene);

  const navigate = useNavigate();
  const setIsLoading = useSetRecoilState(isLoadingState);

  const handleClick = () => {
    if (wasAnimated && !moveMode) {
      setIsLoading(true);
      navigate(`/detail?content=${content}`);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  };

  useEffect(() => {
    animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.loop = THREE.LoopOnce;
      action.clampWhenFinished = true;
      action.reset().play();
    });
  }, [animations, wasAnimated]);

  useFrame((state, delta) => {
    if (wasAnimated) mixer.update(delta);
  });

  return (
    <Float floatIntensity={0.6} speed={2} rotationIntensity={0.6}>
      <primitive
        ref={meshRef}
        object={copiedScene}
        scale={scale}
        position={position}
        rotation={rotation}
        onClick={handleClick}
      />
    </Float>
  );
};

export default MoreButton;
