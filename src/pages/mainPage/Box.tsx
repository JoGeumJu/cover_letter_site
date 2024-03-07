import * as THREE from "three";
import { useRef, useState } from "react";
import { useFrame, ThreeElements } from "@react-three/fiber";

type BoxProps = ThreeElements["mesh"];

const Box: React.FC<BoxProps> = (props) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  //   const [hovered, setHover] = useState<boolean>(false);
  //   const [active, setActive] = useState<boolean>(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
    }
  });

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={1}
      //   onClick={(event) => setActive(!active)}
      //   onPointerOver={(event) => setHover(true)}
      //   onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial />
    </mesh>
  );
};

export default Box;
