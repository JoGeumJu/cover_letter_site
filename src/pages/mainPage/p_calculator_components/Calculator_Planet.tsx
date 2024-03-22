import Calculator from "./Calculator";
import Keyword from "./Keyword";

const CalculatorPlanet: React.FC = () => {
  return (
    <mesh position={[64, -10.8, -344]} rotation={[0.4, -0.5, 0.15]}>
      <group>
        <Calculator />
        <Keyword />
      </group>
    </mesh>
  );
};

export default CalculatorPlanet;
