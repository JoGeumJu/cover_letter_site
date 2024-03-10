import { Canvas } from "@react-three/fiber";
import Dog from "./Dog";
import { Stats, OrbitControls } from "@react-three/drei";
import Stars from "./Stars";
import LightController from "./LightController";

const MainPage: React.FunctionComponent = () => {
  return (
    <Canvas
      style={{ width: "100%", height: "100%", background: "black" }}
      camera={{ position: [0, 0, 6] }}
      shadows
    >
      <LightController />
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
