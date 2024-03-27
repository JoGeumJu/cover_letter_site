import { Html, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { keyframes, styled } from "styled-components";
import {
  CAL_EO,
  CAL_SO,
  CU_EO,
  CU_SO,
  DOS_EO,
  DOS_SO,
  MEONG_EO,
  MEONG_SO,
  ST_EO,
  ST_SO,
} from "../../../data/scroll_offset";
import { LabelType, TalkingText } from "../../../data/talking_text";
import useTalking from "../../../hook/useTalking";
import { moveModeState } from "../../../recoil/globalState";
import { MoveButtons } from "./MoveButtons";

const ACTIVE_OPACITY = 0.9;

export const TextBubble: React.FunctionComponent = () => {
  const scroll = useScroll();
  const [opacity, setOpacity] = useState(1);
  const [isFolding, setIsFolding] = useState<boolean>(false);
  const [talkingOption, setTalkingOption] = useState<{
    text: string;
    speed: number;
  }>({ text: "", speed: 50 });
  const [textIndex, setTextIndex] = useState<number>(0);
  const [skip, setSkip] = useState(false);
  const [moveMode, setMoveMode] = useRecoilState(moveModeState);
  const taking = useTalking(
    talkingOption.text,
    talkingOption.speed,
    moveMode,
    skip
  );
  const scrollOffsets: Array<{ s: number; e: number; l: LabelType }> = [
    { s: CU_SO, e: CU_EO, l: LabelType.cu },
    { s: CAL_SO, e: CAL_EO, l: LabelType.calculator },
    { s: ST_SO, e: ST_EO, l: LabelType.streetStore },
    { s: DOS_SO, e: DOS_EO, l: LabelType.dos },
    { s: MEONG_SO, e: MEONG_EO, l: LabelType.meonghae },
  ];

  useFrame((state, delta) => {
    let filtering = false;
    scrollOffsets.some((offsets) => {
      if (
        offsets.s - 0.02 < scroll.offset &&
        scroll.offset < offsets.e + 0.02
      ) {
        filtering = true;
        if (scroll.offset < offsets.s) {
          checkIndex(offsets.l);
          setOpacity(scroll.range(offsets.s - 0.02, 0.02));
        } else if (scroll.offset > offsets.e) {
          checkIndex(offsets.l);
          setOpacity(1 - scroll.range(offsets.e, 0.02));
        } else {
          checkIndex(offsets.l);
          setOpacity(1);
        }
        return true;
      } else {
        return false;
      }
    });
    if (scroll.offset <= 0.02) {
      checkIndex(LabelType.intro);
      setOpacity(1 - scroll.range(0, 0.03));
    } else if (scroll.offset >= 0.98) {
      checkIndex(LabelType.git);
      setOpacity(scroll.range(0.98, 0.02));
    } else {
      if (!filtering) {
        setTextIndex(0);
        setOpacity(0);
        setIsFolding(false);
        setTalkingOption({ text: "", speed: 50 });
        setMoveMode(false);
        setSkip(false);
      }
    }
  });

  const checkIndex = (label: LabelType) => {
    if (!moveMode) {
      const labelitems = TalkingText(label);
      if (labelitems[textIndex]) {
        setTalkingOption({
          text: labelitems[textIndex].text,
          speed: labelitems[textIndex].speed,
        });
      } else {
        setTextIndex(0);
        setTalkingOption({
          text: labelitems[0].text,
          speed: labelitems[0].speed,
        });
      }
    }
  };

  return (
    <Html>
      <Bubble opacity={opacity} $isfolding={isFolding}>
        <BubbleInner>
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
        </BubbleInner>
      </Bubble>
      <MoveButtons
        setUnmoveMode={() => setMoveMode(false)}
        scroll={scroll}
        moveMode={moveMode}
      />
    </Html>
  );
};

const Bubble = styled.section<{ opacity: number; $isfolding: boolean }>`
  position: fixed;
  width: 50vw;
  max-width: 800px;
  min-width: 600px;
  object-fit: cover;
  left: 50vw;
  top: calc(100vh - 30px);
  transform: translate(-50%, ${(props) => (props.$isfolding ? -16 : -100)}%);
  background-image: url("/assets/images/bubble.png");
  background-size: cover;
  aspect-ratio: 2.875/1;
  z-index: 500;
  opacity: ${(props) => props.opacity};
  overflow: visible;
  transition: transform 0.4s ease;
  pointer-events: ${(props) =>
    props.opacity >= ACTIVE_OPACITY ? "auto" : "none"};
`;
const BubbleInner = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
const Name = styled.div`
  color: #fff9e9;
  font-weight: 600;
  position: absolute;
  top: 11%;
  left: 11.5%;
  transform: translate(-50%, -50%) rotateZ(-3deg);
  font-size: 20px;
  cursor: default;
  @media screen and (max-width: 1600px) {
    font-size: 1.2vw;
  }
  @media screen and (max-width: 1200px) {
    font-size: 14px;
  }
`;
const BubbleBtn = styled.button`
  display: flex;
  flex-direction: column;
  gap: 10%;
  position: absolute;
  border: 1px solid black;
  width: 86%;
  height: 76%;
  top: 56%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  justify-content: center;
  align-items: center;
  overflow: "hidden";
`;
const Text = styled.div`
  color: #70684f;
  position: relative;
  font-weight: bold;
  text-align: center;
  font-size: 24px;
  line-height: 180%;
  white-space: pre;
  @media screen and (max-width: 1600px) {
    font-size: 1.5vw;
  }
  @media screen and (max-width: 1200px) {
    font-size: 18px;
  }
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
  font-size: 20px;
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
  background: none;
  border: none;
  color: #70684f;
  font-weight: bold;
  padding: 4%;
  cursor: pointer;
  font-size: 20px;
  @media screen and (max-width: 1600px) {
    font-size: 1.2vw;
  }
  @media screen and (max-width: 1200px) {
    font-size: 14px;
  }
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
