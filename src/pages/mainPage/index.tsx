import { Canvas } from "@react-three/fiber";
import Box from "./Box";
import { Stats, OrbitControls } from "@react-three/drei";

const MainPage: React.FunctionComponent = () => {
  return (
    <Canvas style={{ width: "100%", height: "100%", background: "black" }}>
      <ambientLight intensity={Math.PI / 2} />1
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box />
      <OrbitControls />
      <Stats />
    </Canvas>
  );
};
export default MainPage;
