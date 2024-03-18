import Cat from "./Cat";
import Keyword from "./Keyword";

const MeonghaePlanet: React.FC = () => {
  return (
    <mesh
      position={[-28, -21, -877]}
      scale={[1.7, 1.7, 1.7]}
      rotation={[0, 0, 0]}
    >
      <group>
        <Cat />
        <Keyword />
      </group>
    </mesh>
  );
};

export default MeonghaePlanet;
