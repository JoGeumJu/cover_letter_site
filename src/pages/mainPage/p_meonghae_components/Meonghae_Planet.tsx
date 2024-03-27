import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import Cat from "./Cat";
import Hats from "./Hats";
import Keyword from "./Keyword";
import { MEONG_EO, MEONG_SO } from "../../../data/scroll_offset";
import { useScroll } from "@react-three/drei";
import { useRecoilValue } from "recoil";
import { moveModeState } from "../../../recoil/globalState";
import MoreButton from "../common/MoreButton";

const HAT_NUM = 4;
const MeonghaePlanet: React.FC = () => {
  const catRef = useRef<THREE.Group>(null!);
  const [clickCat, setClickCat] = useState(0);
  const scroll = useScroll();
  const moveMode = useRecoilValue(moveModeState);

  useFrame((state, delta) => {
    if (catRef.current) catRef.current.rotateY(delta / 2);
  });
  return (
    <mesh position={[-61, 29, -827.2]} rotation={[0, 0, 0]}>
      <group>
        <group
          ref={catRef}
          onClick={() => {
            if (
              MEONG_SO < scroll.offset &&
              MEONG_EO > scroll.offset &&
              !moveMode
            ) {
              if (clickCat >= HAT_NUM) setClickCat(0);
              else setClickCat(clickCat + 1);
            }
          }}
        >
          <Cat />
          <Hats clickCat={clickCat} />
        </group>
        <Keyword />
        <MoreButton
          position={[8.5, 5, 0]}
          scale={[1, 1, 1]}
          rotation={[0.2, -0.3, -0.2]}
          active_s={MEONG_SO}
          active_e={MEONG_EO}
          content={"meong"}
        />
      </group>
    </mesh>
  );
};

export default MeonghaePlanet;
