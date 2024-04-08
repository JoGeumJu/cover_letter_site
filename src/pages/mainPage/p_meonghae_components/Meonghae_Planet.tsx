import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import Cat from "./Cat";
import Hats from "./Hats";
import Keyword from "./Keyword";
import { MEONG_EO, MEONG_SO } from "../../../data/scroll_offset";
import { useScroll } from "@react-three/drei";
import { useRecoilValue } from "recoil";
import { isScannerOpenState, moveModeState } from "../../../recoil/globalState";
import MoreButton from "../common/MoreButton";

const HAT_NUM = 4;
const MeonghaePlanet: React.FC = () => {
  const [wasAnimated, setWasAnimated] = useState(false);
  const catRef = useRef<THREE.Group>(null!);
  const [clickCat, setClickCat] = useState(0);
  const scroll = useScroll();
  const moveMode = useRecoilValue(moveModeState);
  const isScannerOpen = useRecoilValue(isScannerOpenState);

  useFrame((state, delta) => {
    if (MEONG_SO < scroll.offset && scroll.offset < MEONG_EO) {
      if (!wasAnimated) setWasAnimated(true);
    } else if (wasAnimated) setWasAnimated(false);
    if (catRef.current) catRef.current.rotateY(delta / 2);
  });

  return (
    <mesh position={[-61, 29, -827.2]} rotation={[0, 0, 0]}>
      <group>
        <group
          ref={catRef}
          onClick={() => {
            if (wasAnimated && !moveMode) {
              if (clickCat >= HAT_NUM) setClickCat(0);
              else setClickCat(clickCat + 1);
            }
          }}
        >
          <Cat wasAnimated={wasAnimated} isScannerOpen={isScannerOpen} />
          <Hats clickCat={clickCat} />
        </group>
        <Keyword wasAnimated={wasAnimated} isScannerOpen={isScannerOpen} />
        <MoreButton
          delay={15}
          position={[8.5, 5, 1]}
          scale={[0.3, 0.3, 0.3]}
          rotation={[0, 0, -0.2]}
          wasAnimated={wasAnimated}
          content={"meong"}
          isScannerOpen={isScannerOpen}
        />
      </group>
    </mesh>
  );
};

export default MeonghaePlanet;
