import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { CU_EO, CU_SO } from "../../../data/scroll_offset";
import MoreButton from "../common/MoreButton";
import Candy from "./Candy";
import CU from "./CU";
import Keyword from "./Keyword";
import Milk from "./Milk";
import { useRecoilValue } from "recoil";
import { isScannerOpenState } from "../../../recoil/globalState";

const CUPlanet: React.FC = () => {
  const [wasAnimated, setWasAnimated] = useState(false);
  const isScannerOpen = useRecoilValue(isScannerOpenState);
  const scroll = useScroll();

  useFrame((state, delta) => {
    if (CU_SO < scroll.offset && scroll.offset < CU_EO) {
      if (!wasAnimated) setWasAnimated(true);
    } else if (wasAnimated) setWasAnimated(false);
  });

  return (
    <mesh position={[-55, 26, -195]} rotation={[0.4, -0.1, 0.03]}>
      <group>
        <CU wasAnimated={wasAnimated} isScannerOpen={isScannerOpen} />
        <Milk wasAnimated={wasAnimated} isScannerOpen={isScannerOpen} />
        <Candy wasAnimated={wasAnimated} isScannerOpen={isScannerOpen} />
        <Keyword wasAnimated={wasAnimated} isScannerOpen={isScannerOpen} />
        <MoreButton
          wasAnimated={wasAnimated}
          isScannerOpen={isScannerOpen}
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
