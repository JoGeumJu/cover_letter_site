import Cat from "./Cat";
import Keyword from "./Keyword";

const MeonghaePlanet: React.FC = () => {
  return (
    <mesh position={[-61, 29, -827.2]} rotation={[0, 0, 0]}>
      <group>
        <Cat />
        <Keyword />
      </group>
    </mesh>
  );
};

export default MeonghaePlanet;
