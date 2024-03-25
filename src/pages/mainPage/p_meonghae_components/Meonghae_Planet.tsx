import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import Cat from "./Cat";
import Hats from "./Hats";
import Keyword from "./Keyword";

const HAT_NUM = 4;
const MeonghaePlanet: React.FC = () => {
  const catRef = useRef<THREE.Group>(null!);
  const [clickCat, setClickCat] = useState(0);
  useFrame((state, delta) => {
    if (catRef.current) catRef.current.rotateY(delta / 2);
  });
  return (
    <mesh position={[-61, 29, -827.2]} rotation={[0, 0, 0]}>
      <group>
        <group
          ref={catRef}
          onClick={() => {
            if (clickCat >= HAT_NUM) setClickCat(0);
            else setClickCat(clickCat + 1);
          }}
        >
          <Cat />
          <Hats clickCat={clickCat} />
        </group>
        <Keyword />
      </group>
    </mesh>
  );
};

export default MeonghaePlanet;
