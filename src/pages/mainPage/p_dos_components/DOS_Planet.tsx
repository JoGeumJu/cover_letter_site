import { DOS_EO, DOS_SO } from "../../../data/scroll_offset";
import MoreButton from "../common/MoreButton";
import Display from "./Display";
import Keyword from "./Keyword";

const DOSPlanet: React.FC = () => {
  return (
    <mesh
      position={[17.2, -17.5, -656.3]}
      scale={[1.3, 1.3, 1.3]}
      rotation={[0.6, -0.2, 0.1]}
    >
      <group>
        <Display />
        <Keyword />
        <MoreButton
          position={[-2.5, 0.5, 0]}
          scale={[0.3, 0.3, 0.3]}
          rotation={[Math.PI - 0.6, Math.PI - 0.5, -0.2]}
          active_s={DOS_SO}
          active_e={DOS_EO}
          content={"dos"}
        />
      </group>
    </mesh>
  );
};

export default DOSPlanet;
