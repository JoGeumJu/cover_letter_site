import Display from "./Display";
import Keyword from "./Keyword";

const DOSPlanet: React.FC = () => {
  return (
    <mesh
      position={[32, 4, -612]}
      scale={[1.5, 1.5, 1.5]}
      rotation={[Math.PI / 7, Math.PI / 10, -Math.PI / 20]}
    >
      <group>
        <Display />
        <Keyword />
      </group>
    </mesh>
  );
};

export default DOSPlanet;
