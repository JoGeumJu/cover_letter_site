import { ST_EO, ST_SO } from "../../../data/scroll_offset";
import MoreButton from "../common/MoreButton";
import Fish from "./Fish";
import Keyword from "./Keyword";
import RedBean1 from "./RedBean1";
import RedBean2 from "./RedBean2";

const StreetStorePlanet: React.FC = () => {
  return (
    <mesh position={[-40, -35, -513]} rotation={[0.2, -0.4, -0.1]}>
      <group>
        <Fish />
        <RedBean1 />
        <RedBean2 />
        <Keyword />
        <MoreButton
          position={[8.5, 7, 0]}
          scale={[1, 1, 1]}
          rotation={[0.1, -0.2, 0]}
          active_s={ST_SO}
          active_e={ST_EO}
          content={"st"}
        />
      </group>
    </mesh>
  );
};

export default StreetStorePlanet;
