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
      </group>
    </mesh>
  );
};

export default StreetStorePlanet;
