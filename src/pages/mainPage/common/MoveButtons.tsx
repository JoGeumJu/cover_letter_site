import { Html, useScroll } from "@react-three/drei";
import { useState } from "react";
import { styled } from "styled-components";

export const MoveButtons: React.FunctionComponent = () => {
  const scroll = useScroll();
  const [isFolding, setIsFolding] = useState<boolean>(false);

  const handleClick = (offset: number) => {
    const height = scroll.el.scrollHeight - scroll.el.clientHeight;
    scroll.el.scrollTo({ top: height * offset });
    scroll.offset = 0.5;
  };

  return (
    <Html>
      <Wrapper isfolding={isFolding ? -16 : -100}>버튼들</Wrapper>
    </Html>
  );
};

const Wrapper = styled.section<{ isfolding: number }>`
  position: fixed;
  width: 50vw;
  max-width: 800px;
  min-width: 600px;
  object-fit: cover;
  left: 50vw;
  top: calc(100vh - 30px);
  transform: translate(-50%, ${(props) => props.isfolding}%);
  width: 50vw;
  aspect-ratio: 2.875/1;
  z-index: 500;
  overflow: visible;
  transition: transform 0.4s ease;
`;
const WrapperInner = styled.div`
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
