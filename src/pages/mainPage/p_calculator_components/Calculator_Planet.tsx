import { CAL_EO, CAL_SO } from "../../../data/scroll_offset";
import MoreButton from "../common/MoreButton";
import Calculator from "./Calculator";
import Keyword from "./Keyword";

const CalculatorPlanet: React.FC = () => {
  return (
    <mesh position={[64, -10.8, -344]} rotation={[0.4, -0.5, 0.15]}>
      <group>
        <Calculator />
        <Keyword />
        <MoreButton
          position={[-18, -5, -5]}
          scale={[1.5, 1.5, 1.5]}
          rotation={[-0.3, Math.PI + 0.6, 0]}
          active_s={CAL_SO}
          active_e={CAL_EO}
          content={"cal"}
        />
      </group>
    </mesh>
  );
};

export default CalculatorPlanet;
