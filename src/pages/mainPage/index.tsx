import { Canvas } from "@react-three/fiber";
import Dog from "./Dog";
import { Stats, OrbitControls } from "@react-three/drei";
import { useEffect } from "react";
import Stars from "./Stars";

const MainPage: React.FunctionComponent = () => {
  return (
    <Canvas
      style={{ width: "100%", height: "100%", background: "black" }}
      camera={{ position: [0, 0, 6] }}
    >
      <ambientLight intensity={Math.PI / 2} />1
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Dog />
      <Stars />
      <OrbitControls
        // enableZoom={false}
        enablePan={false}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
      />
      <Stats />
    </Canvas>
  );
};
export default MainPage;
