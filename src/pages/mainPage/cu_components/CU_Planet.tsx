import Candy from "./Candy";
import CU from "./CU";
import Keyword from "./Keyword";
import Milk from "./Milk";

const CUPlanet: React.FC = () => {
  return (
    <mesh
      position={[-28, 25.5, -100]}
      scale={[0.8, 0.8, 0.8]}
      rotation={[0, 0, 0]}
    >
      <group>
        <CU />
        <Milk />
        <Candy />
        <Keyword />
        {/* <MoreButton /> */}
      </group>
    </mesh>
  );
};

export default CUPlanet;
