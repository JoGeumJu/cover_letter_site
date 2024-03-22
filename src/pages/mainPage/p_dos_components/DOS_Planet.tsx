import Display from "./Display";
import Keyword from "./Keyword";

const DOSPlanet: React.FC = () => {
  return (
    <mesh
      position={[17.2, -18, -656.3]}
      scale={[1.3, 1.3, 1.3]}
      rotation={[0.6, -0.2, 0.1]}
    >
      <group>
        <Display />
        <Keyword />
      </group>
    </mesh>
  );
};

export default DOSPlanet;
