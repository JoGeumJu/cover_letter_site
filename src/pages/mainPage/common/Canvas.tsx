import { Canvas } from "@react-three/fiber";
import Stars from "./Stars";
import { ScrollControls } from "@react-three/drei";
import MoveController from "../controller/MoveController";
import LightController from "../controller/LightController";
import { styled } from "styled-components";
import { TextBubbleController } from "../controller/TextBubbleController";

const MainCanvas: React.FunctionComponent = () => {
  return (
    <CustomCanvas>
      <fog attach={"fog"} color={"black"} near={0} far={130} />
      <LightController />
      <ScrollControls pages={40} damping={0.25}>
        <MoveController />
        <TextBubbleController />
      </ScrollControls>
      <Stars />
    </CustomCanvas>
  );
};
export default MainCanvas;

const CustomCanvas = styled(Canvas)`
  width: 100%;
  height: 100%;
  background-color: #09010d;
`;
