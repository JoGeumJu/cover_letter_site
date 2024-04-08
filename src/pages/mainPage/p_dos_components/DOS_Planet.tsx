import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { DOS_EO, DOS_SO } from "../../../data/scroll_offset";
import MoreButton from "../common/MoreButton";
import Display from "./Display";
import Keyword from "./Keyword";
import { useRecoilValue } from "recoil";
import { isScannerOpenState } from "../../../recoil/globalState";

const DOSPlanet: React.FC = () => {
  const [wasAnimated, setWasAnimated] = useState(false);
  const isScannerOpen = useRecoilValue(isScannerOpenState);
  const scroll = useScroll();

  useFrame((state, delta) => {
    if (DOS_SO < scroll.offset && scroll.offset < DOS_EO) {
      if (!wasAnimated) setWasAnimated(true);
    } else if (wasAnimated) setWasAnimated(false);
  });
  return (
    <mesh
      position={[17.2, -17.5, -656.3]}
      scale={[1.3, 1.3, 1.3]}
      rotation={[0.6, -0.2, 0.1]}
    >
      <group>
        <Display wasAnimated={wasAnimated} isScannerOpen={isScannerOpen} />
        <Keyword wasAnimated={wasAnimated} isScannerOpen={isScannerOpen} />
        <MoreButton
          delay={35}
          position={[-2.5, 1, 0]}
          scale={[0.1, 0.1, 0.1]}
          rotation={[-0.2, 0.5, 0]}
          wasAnimated={wasAnimated}
          content={"dos"}
          isScannerOpen={isScannerOpen}
        />
      </group>
    </mesh>
  );
};

export default DOSPlanet;
