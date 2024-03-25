import { Canvas } from "@react-three/fiber";
import { Stats, useScroll } from "@react-three/drei";
import Stars from "./Stars";
import { ScrollControls } from "@react-three/drei";
import MoveController from "../controller/MoveController";
import { TextBubble } from "./TextBubble";
import LightController from "../controller/LightController";
import { styled } from "styled-components";

const MainCanvas: React.FunctionComponent = () => {
  return (
    <CustomCanvas>
      <fog attach={"fog"} color={"black"} near={0} far={130} />
      <LightController />
      <ScrollControls pages={40} damping={0.25}>
        <MoveController />
        <TextBubble />
      </ScrollControls>
      <Stars />
      <Stats />
    </CustomCanvas>
  );
};
export default MainCanvas;

const CustomCanvas = styled(Canvas)`
  width: 100%;
  height: 100%;
  background-color: black;
`;
