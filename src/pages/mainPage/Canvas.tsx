import { Canvas } from "@react-three/fiber";
import Dog from "./Dog";
import { Stats, OrbitControls } from "@react-three/drei";
import Stars from "./Stars";
import LightController from "./LightController";
import { ScrollControls } from "@react-three/drei";
import MoveController from "./MoveController";

const MainCanvas: React.FunctionComponent = () => {
  return (
    <Canvas
      style={{ width: "100%", height: "100%", background: "black" }}
      camera={{ position: [0, 0, 0], fov: 75 }}
    >
      <fog attach={"fog"} color={"black"} near={0} far={130} />
      <LightController />
      <ScrollControls pages={14} damping={0.25}>
        <MoveController />
      </ScrollControls>
      <Stars />
      <Stats />
    </Canvas>
  );
};
export default MainCanvas;
