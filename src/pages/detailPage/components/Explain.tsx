import React from "react";
import styled from "styled-components";

export const Explain: React.FunctionComponent<{ explain?: string }> = ({
  explain,
}) => {
  return (
    <>
      <SectionTitle_S $position={[-190, 60]} $rotation={-6}>
        간단 설명
      </SectionTitle_S>
      <ExplainText1>{explain}</ExplainText1>
    </>
  );
};

const SectionTitle_S = styled.div<{ $position: number[]; $rotation: number }>`
  display: flex;
  position: absolute;
  height: 11%;
  aspect-ratio: 2.103;
  top: 50%;
  left: 50%;
  transform: ${(props) =>
    `translate(${-50 + props.$position[0]}%, ${
      -50 + props.$position[1]
    }%) rotate(${props.$rotation}deg)`};
  background-image: url("/assets/images/wide_book/wide_sticker_1.png");
  background-size: cover;
  align-items: center;
  justify-content: center;
  font-size: 2.1vh;
`;
const ExplainText1 = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 38.4vh;
  aspect-ratio: 2.65;
  transform: translate(-126%, 70%);
  font-size: 1.9vh;
  word-break: keep-all;
  line-height: 2.5vh;
  letter-spacing: -0.02vh;
`;
