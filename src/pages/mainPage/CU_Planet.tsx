import { useScroll } from "@react-three/drei";
import Candy from "./cu_components/Candy";
import CU from "./cu_components/CU";
import Keyword from "./cu_components/Keyword";
import Milk from "./cu_components/Milk";

interface CubeProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

const START_SCROLL_OFFSET = 0.21;
const END_SCROLL_OFFSET = 0.24;

const CUPlanet: React.FC<CubeProps> = (props) => {
  const scroll = useScroll();

  const handleClick = () => {};
  return (
    <mesh onClick={handleClick} {...props}>
      <group>
        <CU />
        <Milk />
        <Candy />
        <Keyword />
      </group>
    </mesh>
  );
};

export default CUPlanet;
