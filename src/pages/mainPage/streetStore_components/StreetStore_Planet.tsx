import Fish from "./Fish";
import Keyword from "./Keyword";
import RedBean1 from "./RedBean1";
import RedBean2 from "./RedBean2";

const StreetStorePlanet: React.FC = () => {
  return (
    <mesh
      position={[-30, -45, -442]}
      scale={[2, 2, 2]}
      rotation={[Math.PI / 9, -Math.PI / 4, 0]}
    >
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
