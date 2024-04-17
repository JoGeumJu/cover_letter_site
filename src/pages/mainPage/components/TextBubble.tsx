import { useRecoilState, useRecoilValue } from "recoil";
import { keyframes, styled } from "styled-components";
import useTalking from "../../../hook/useTalking";
import {
  bubbleIsFoldingState,
  bubbleOpacityState,
  bubbleSkipState,
  bubbleTalkingOptionState,
  bubbleTextIndex,
  moveModeState,
} from "../../../recoil/globalState";
import { MoveButtons } from "./MoveButtons";

const ACTIVE_OPACITY = 0.9;

export const TextBubble: React.FunctionComponent = () => {
  const opacity = useRecoilValue(bubbleOpacityState);
  const [isFolding, setIsFolding] = useRecoilState(bubbleIsFoldingState);
  const [moveMode, setMoveMode] = useRecoilState(moveModeState);
  const [skip, setSkip] = useRecoilState(bubbleSkipState);
  const [textIndex, setTextIndex] = useRecoilState(bubbleTextIndex);
  const talkingOption = useRecoilValue(bubbleTalkingOptionState);

  const taking = useTalking(talkingOption.text, talkingOption.speed, moveMode);

  return (
    <>
      <Wrapper opacity={opacity} $isfolding={isFolding}>
        <WrapperInner>
          <Bubble src={"/assets/images/bubble.webp"} alt={"bubble"} />
          <Name>흥이</Name>
          <BubbleBtn
            type="button"
            onClick={() => {
              if (!moveMode) {
                if (skip) {
                  setSkip(false);
                  setTextIndex(textIndex + 1);
                } else {
                  setSkip(true);
                }
              }
            }}
          >
            <Text>{taking}</Text>
          </BubbleBtn>
          <SelectBubble>
            <SelectBtn type="button" onClick={() => setIsFolding(!isFolding)}>
              {isFolding ? "말풍선 올려줘" : "말풍선 내려줘"}
            </SelectBtn>
            <SelectBtn
              $movemode={moveMode}
              type="button"
              className="canRed"
              onClick={async () => {
                if (moveMode) {
                  setMoveMode(false);
                } else {
                  setSkip(false);
                  setIsFolding(false);
                  setMoveMode(true);
                }
              }}
            >
              {moveMode ? "안갈래~" : "행성으로 갈래"}
            </SelectBtn>
          </SelectBubble>
        </WrapperInner>
      </Wrapper>
      <MoveButtons moveMode={moveMode} />
    </>
  );
};

const Wrapper = styled.section<{ opacity: number; $isfolding: boolean }>`
  position: fixed;
  width: 40%;
  object-fit: cover;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, ${(props) => (props.$isfolding ? 75 : -10)}%);
  aspect-ratio: 2.875/1;
  z-index: 500;
  opacity: ${(props) => props.opacity};
  overflow: visible;
  transition: transform 0.4s ease;
  pointer-events: ${(props) =>
    props.opacity >= ACTIVE_OPACITY ? "auto" : "none"};
`;
const WrapperInner = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
const Bubble = styled.img`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
`;
const Name = styled.div`
  color: #fff9e9;
  font-weight: 600;
  position: absolute;
  top: 11%;
  left: 11.5%;
  transform: translate(-50%, -50%) rotateZ(-3deg);
  font-size: 0.9vw;
  cursor: default;
`;
const BubbleBtn = styled.button`
  display: flex;
  flex-direction: column;
  gap: 10%;
  position: absolute;
  width: 86%;
  height: 76%;
  top: 56%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;
  overflow: "hidden";
`;
const Text = styled.div`
  color: #70684f;
  position: relative;
  font-weight: bold;
  text-align: center;
  font-size: 1.2vw;
  line-height: 180%;
  white-space: pre;
`;
const SelectBubble = styled.section`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: #f7e9ba;
  border: none;
  width: 28%;
  aspect-ratio: 3/2;
  right: -3%;
  top: -2%;
  transform: translate(0, -50%);
  border-radius: 45%;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;
const fillAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%) scaleX(0);
  }
  100% {
    transform: translate(-50%, -50%) scaleX(1); 
  }
`;
const SelectBtn = styled.button<{ $movemode?: boolean }>`
  position: relative;
  color: #70684f;
  font-weight: bold;
  padding: 4%;
  font-size: 1.05vw;
  &:hover {
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 92%;
      height: 60%;
      background-color: ${(props) => (props.$movemode ? "#ff8b8b" : "#f0d24a")};
      z-index: -1;
      border-radius: 10%;
      transform-origin: left;
      animation: ${fillAnimation} 0.4s ease;
    }
  }
`;
