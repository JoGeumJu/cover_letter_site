import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { CU_EO, CU_SO } from "../../../data/scroll_offset";
import MoreButton from "../common/MoreButton";
import Candy from "./Candy";
import CU from "./CU";
import Keyword from "./Keyword";
import Milk from "./Milk";

const CUPlanet: React.FC = () => {
  const [wasAnimated, setWasAnimated] = useState(false);
  const scroll = useScroll();

  useFrame((state, delta) => {
    if (CU_SO < scroll.offset && scroll.offset < CU_EO) {
      if (!wasAnimated) setWasAnimated(true);
    } else if (wasAnimated) setWasAnimated(false);
  });

  return (
    <mesh position={[-55, 26, -195]} rotation={[0.4, -0.1, 0.03]}>
      <group>
        <CU wasAnimated={wasAnimated} />
        <Milk wasAnimated={wasAnimated} />
        <Candy wasAnimated={wasAnimated} />
        <Keyword wasAnimated={wasAnimated} />
        <MoreButton
          wasAnimated={wasAnimated}
          delay={15}
          position={[-11.5, 3, 2]}
          scale={[0.4, 0.4, 0.4]}
          rotation={[0, 0, -0.2]}
          content={"cu"}
        />
      </group>
    </mesh>
  );
};

export default CUPlanet;
