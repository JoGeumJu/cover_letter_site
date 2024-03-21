import { Float } from "@react-three/drei";
import GitText from "./GitText";
import Picture from "./Picture";

const GitPlanet: React.FC = () => {
  return (
    <mesh
      position={[40.6, 20.5, -1107]}
      scale={[1, 1, 1]}
      rotation={[0, -0.2, 0]}
    >
      <Float floatIntensity={0.2} speed={4} rotationIntensity={0.2}>
        <group>
          <Picture />
          <GitText />
        </group>
      </Float>
    </mesh>
  );
};

export default GitPlanet;
