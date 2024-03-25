import { CU_EO, CU_SO } from "../../../data/scroll_offset";
import MoreButton from "../common/MoreButton";
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
        <MoreButton
          position={[-11.5, 3, 0]}
          scale={[1.4, 1.4, 1.4]}
          rotation={[0, Math.PI + 0.4, 0]}
          active_s={CU_SO}
          active_e={CU_EO}
          content={"cu"}
        />
      </group>
    </mesh>
  );
};

export default CUPlanet;
