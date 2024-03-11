import { Box } from "@react-three/drei";
import { ThreeElements } from "@react-three/fiber";
import { MeshStandardMaterial } from "three";

interface CubeProps {
  args: [number, number, number];
  position: [number, number, number];
  scale: [number, number, number];
}

const Planet: React.FC<CubeProps> = (props) => {
  const material = new MeshStandardMaterial({ color: "#ff0000" });
  return <Box {...props} material={material} />;
};

export default Planet;
