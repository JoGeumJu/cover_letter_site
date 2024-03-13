import { Box, useScroll } from "@react-three/drei";
import { useRef, useState } from "react";
import { MeshStandardMaterial } from "three";

interface CubeProps {
  args: [number, number, number];
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

const Planet: React.FC<CubeProps> = (props) => {
  const startScrollPosition = 0;
  const endScrollPosition = 0.1428;
  const scroll = useScroll();
  const [checked, setChecked] = useState(false);
  const material = new MeshStandardMaterial({
    color: checked ? "#22cc33" : "#cc2222",
  });
  const handleClick = () => {
    setChecked(!checked);
  };
  return (
    <mesh onClick={handleClick}>
      <Box {...props} material={material} />
    </mesh>
  );
};

export default Planet;
