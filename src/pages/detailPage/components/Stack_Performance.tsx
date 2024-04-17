import React from "react";
import styled from "styled-components";

export const Stack_Performance: React.FunctionComponent<{
  stack?: string[];
  performance?: string[];
}> = ({ stack, performance }) => {
  return (
    <>
      <ExplainStack>
        {stack?.map((i, id) => (
          <ExplainStackItem key={i + id}>✦ {i}</ExplainStackItem>
        ))}
      </ExplainStack>
      <SectionTitle_L $position={[120, -340]} $rotation={5}>
        기술스택 및 라이브러리
      </SectionTitle_L>
      <ExplainPerformance>
        {performance?.map((i, id) => (
          <ExplainPerformanceItem key={id + "performance"}>
            {"✱ " + i}
          </ExplainPerformanceItem>
        ))}
      </ExplainPerformance>
      <SectionTitle_L $position={[47, -60]} $rotation={-2}>
        맡은 역할 및 성과
      </SectionTitle_L>
    </>
  );
};

const SectionTitle_L = styled.div<{ $position: number[]; $rotation: number }>`
  display: flex;
  position: absolute;
  height: 11%;
  aspect-ratio: 2.754;
  top: 50%;
  left: 50%;
  transform: ${(props) =>
    `translate(${-50 + props.$position[0]}%, ${
      -50 + props.$position[1]
    }%) rotate(${props.$rotation}deg)`};
  background-image: url("/assets/images/wide_book/wide_sticker_2.webp");
  background-size: cover;
  align-items: center;
  justify-content: center;
  font-size: 2vh;
`;
const ExplainStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 14.8vh;
  left: 50%;
  width: 41vh;
  max-height: 26%;
  transform: translate(11%, 0);
  gap: 1.2vh 0;
`;
const ExplainStackItem = styled.div`
  display: flex;
  width: 50%;
  padding-right: 0.6vh;
  box-sizing: border-box;
  height: fit-content;
  white-space: pre-wrap;
  word-break: break-word;
  font-size: 1.6vh;
  letter-spacing: -0.08vh;
`;
const ExplainPerformance = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40.25vh;
  max-height: 35%;
  aspect-ratio: 1.15;
  transform: translate(10%, -10%);
  gap: 1.25vh 0;
  word-break: keep-all;
`;
const ExplainPerformanceItem = styled.div`
  display: flex;
  width: 100%;
  line-height: 2.5vh;
  letter-spacing: -0.02vh;
  font-size: 1.8vh;
  white-space: pre-wrap;
  word-break: keep-all;
`;
