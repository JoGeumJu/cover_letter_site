import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { CAL_EO, CAL_SO } from "../../../data/scroll_offset";
import MoreButton from "../common/MoreButton";
import Calculator from "./Calculator";
import Keyword from "./Keyword";

const CalculatorPlanet: React.FC = () => {
  const [wasAnimated, setWasAnimated] = useState(false);
  const scroll = useScroll();

  useFrame((state, delta) => {
    if (CAL_SO < scroll.offset && scroll.offset < CAL_EO) {
      if (!wasAnimated) setWasAnimated(true);
    } else if (wasAnimated) setWasAnimated(false);
  });

  return (
    <mesh position={[64, -10.8, -344]} rotation={[0.4, -0.5, 0.15]}>
      <group>
        <Calculator wasAnimated={wasAnimated} />
        <Keyword wasAnimated={wasAnimated} />
        <MoreButton
          delay={100}
          position={[-13, -1, 0]}
          scale={[0.4, 0.4, 0.4]}
          rotation={[-0.3, 0.6, 0]}
          wasAnimated={wasAnimated}
          content={"cal"}
        />
      </group>
    </mesh>
  );
};

export default CalculatorPlanet;
