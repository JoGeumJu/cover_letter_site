import Candy from "./Candy";
import CU from "./CU";
import Keyword from "./Keyword";
import Milk from "./Milk";

const CUPlanet: React.FC = () => {
  return (
    <mesh position={[-28, 25.5, -100]} scale={[0.8, 0.8, 0.8]}>
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
