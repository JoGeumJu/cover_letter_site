import * as THREE from "three";
import { useEffect, useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useScroll } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isLoadingState } from "../../../recoil/globalState";

interface ButtonPropsType {
  position?: number[];
  rotation?: number[];
  scale?: number[];
  active_s: number;
  active_e: number;
  content: string;
}

const MoreButton: React.FC<ButtonPropsType> = ({
  position,
  rotation,
  scale,
  active_s,
  active_e,
  content,
}) => {
  const scroll = useScroll();
  const meshRef = useRef<THREE.Mesh>(null);
  const { scene, animations } = useGLTF("/assets/models/more_button.glb");
  const copiedScene = useMemo(() => scene.clone(), [scene]);
  const [wasAnimated, setWasAnimated] = useState(false);
  let mixer = new THREE.AnimationMixer(copiedScene);

  const navigate = useNavigate();
  const setIsLoading = useSetRecoilState(isLoadingState);

  const handleClick = () => {
    if (active_s < scroll.offset && scroll.offset < active_e) {
      setIsLoading(true);
      navigate(`/detail?content=${content}`);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.loop = THREE.LoopRepeat;
      action.reset().setDuration(5).play();
    });
  }, [animations, wasAnimated]);

  useFrame((state, delta) => {
    if (active_s <= scroll.offset && scroll.offset <= active_e) {
      if (!wasAnimated) setWasAnimated(true);
      mixer.update(delta);
    } else if (wasAnimated) setWasAnimated(false);
  });

  return (
    <primitive
      ref={meshRef}
      object={copiedScene}
      scale={scale}
      position={position}
      rotation={rotation}
      onClick={handleClick}
    />
  );
};

export default MoreButton;
