import { Float } from "@react-three/drei";
import Calculator from "./Calculator";
import Keyword from "./Keyword";

const CalculatorPlanet: React.FC = () => {
  return (
    <mesh
      position={[38, -25.5, -246]}
      scale={[1, 1, 1]}
      rotation={[Math.PI / 10, 0, 0]}
    >
      <group>
        <Calculator />
        <Keyword />
      </group>
    </mesh>
  );
};

export default CalculatorPlanet;
