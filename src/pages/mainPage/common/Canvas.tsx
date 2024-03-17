import { Canvas } from "@react-three/fiber";
import { Stats } from "@react-three/drei";
import Stars from "./Stars";
import { ScrollControls } from "@react-three/drei";
import MoveController from "../controller/MoveController";
import { TextBubble } from "./TextBubble";
import LightController from "../controller/LightController";

const MainCanvas: React.FunctionComponent = () => {
  return (
    <Canvas
      style={{ width: "100%", height: "100%", background: "black" }}
      camera={{ position: [0, 0, 0], fov: 75 }}
    >
      <fog attach={"fog"} color={"black"} near={0} far={130} />
      <LightController />
      <ScrollControls pages={20} damping={0.25}>
        <MoveController />
        <TextBubble />
      </ScrollControls>
      <Stars />
      <Stats />
    </Canvas>
  );
};
export default MainCanvas;
