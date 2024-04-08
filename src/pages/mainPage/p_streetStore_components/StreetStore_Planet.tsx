import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { ST_EO, ST_SO } from "../../../data/scroll_offset";
import { isScannerOpenState } from "../../../recoil/globalState";
import MoreButton from "../common/MoreButton";
import Fish from "./Fish";
import Keyword from "./Keyword";
import RedBean1 from "./RedBean1";
import RedBean2 from "./RedBean2";

const StreetStorePlanet: React.FC = () => {
  const [wasAnimated, setWasAnimated] = useState(false);
  const isScannerOpen = useRecoilValue(isScannerOpenState);
  const scroll = useScroll();

  useFrame((state, delta) => {
    if (ST_SO < scroll.offset && scroll.offset < ST_EO) {
      if (!wasAnimated) setWasAnimated(true);
    } else if (wasAnimated) setWasAnimated(false);
  });

  return (
    <mesh position={[-40, -35, -513]} rotation={[0.2, -0.4, -0.1]}>
      <group>
        <Fish wasAnimated={wasAnimated} isScannerOpen={isScannerOpen} />
        <RedBean1 wasAnimated={wasAnimated} isScannerOpen={isScannerOpen} />
        <RedBean2 wasAnimated={wasAnimated} isScannerOpen={isScannerOpen} />
        <Keyword wasAnimated={wasAnimated} isScannerOpen={isScannerOpen} />
        <MoreButton
          delay={20}
          position={[8.5, 6, 0]}
          scale={[0.3, 0.3, 0.3]}
          rotation={[0, -0.2, -0.1]}
          wasAnimated={wasAnimated}
          content={"st"}
          isScannerOpen={isScannerOpen}
        />
      </group>
    </mesh>
  );
};

export default StreetStorePlanet;
