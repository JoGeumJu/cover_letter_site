import { Html, Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { keyframes, styled } from "styled-components";
import { LabelType, TalkingText } from "../../data/talking_text";
import useTalking from "../../hook/useTalking";

export const TextBubble: React.FunctionComponent = () => {
  const scroll = useScroll();
  const [opacity, setOpacity] = useState(1);
  const [isFolding, setIsFolding] = useState<boolean>(false);
  const [talkingOption, setTalkingOption] = useState<{
    text: string;
    speed: number;
  }>({ text: "", speed: 50 });
  const taking = useTalking(talkingOption.text, talkingOption.speed);
  const [textIndex, setTextIndex] = useState<number>(0);

  useFrame((state, delta) => {
    if (scroll.offset <= 1 / 14) {
      checkIndex(LabelType.intro);
      setOpacity(1 - scroll.range(0, 1 / 14));
    } else if (0.21 < scroll.offset && scroll.offset < 0.235) {
      checkIndex(LabelType.cu);
      setOpacity(scroll.curve(0.21, 0.035));
    } else {
      setTextIndex(0);
      setOpacity(0);
      setIsFolding(false);
    }
  });

  const checkIndex = (label: LabelType) => {
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
  };

  return (
    <Html>
      <Bubble opacity={opacity} isfoling={isFolding}>
        <BubbleInner>
          <Name>흥이</Name>
          <BubbleBtn
            type="button"
            onClick={() => {
              if (opacity >= 0.2 && !isFolding) setTextIndex(textIndex + 1);
            }}
          >
            <Text>{taking}</Text>
          </BubbleBtn>
          <SelectBubble>
            <SelectBtn
              type="button"
              onClick={() => {
                if (opacity >= 0.2) {
                  setIsFolding(!isFolding);
                }
              }}
            >
              {isFolding ? "말풍선 올려줘" : "말풍선 내려줘"}
            </SelectBtn>
            <SelectBtn
              type="button"
              onClick={() => {
                if (opacity >= 0.2) {
                  window.open(
                    "https://github.com/JoGeumJu?tab=stars",
                    "_blank"
                  );
                }
              }}
            >
              git 알려줘
            </SelectBtn>
          </SelectBubble>
        </BubbleInner>
      </Bubble>
    </Html>
  );
};
export default TextBubble;

const Bubble = styled.section<{ opacity: number; isfoling: boolean }>`
  position: fixed;
  width: 50vw;
  max-width: 800px;
  min-width: 600px;
  object-fit: cover;
  left: 50vw;
  top: calc(100vh - 30px);
  transform: ${(props) =>
    props.isfoling ? "translate(-50%, -16%)" : "translate(-50%, -100%)"};
  background-image: url("/assets/images/bubble.png");
  background-size: cover;
  width: 50vw;
  aspect-ratio: 2.875/1;
  z-index: 500;
  opacity: ${(props) => props.opacity};
  overflow: visible;
  transition: transform 0.4s ease;
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
`;
const Text = styled.div`
  color: #70684f;
  position: relative;
  font-weight: bold;
  top: 50%;
  transform: translateY(-50%);
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
const SelectBtn = styled.button`
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
      background-color: #f0d24a;
      z-index: -1;
      border-radius: 10%;
      transform-origin: left;
      animation: ${fillAnimation} 0.4s ease;
    }
  }
`;
