import Candy from "./Candy";
import CU from "./CU";
import Keyword from "./Keyword";
import Milk from "./Milk";

const CUPlanet: React.FC = () => {
  return (
    <mesh position={[-55, 26, -195]} rotation={[0.4, -0.1, 0.03]}>
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
