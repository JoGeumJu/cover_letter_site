import React, { useState } from "react";
import { css, styled } from "styled-components";
import { useScannerData } from "../../../hook/useScannerInfo";

export const ScannerInfo: React.FunctionComponent = () => {
  const scannerData = useScannerData();
  return (
    <Wrapper className="scanner_info">
      {scannerData.map((i, id) => {
        switch (i.type) {
          case "bubble": {
            return (
              <BubbleType $position={i.position} key={id + i.type}>
                <Inner>
                  <img
                    src={"/assets/images/scanner/arrow.webp"}
                    alt={"scanner"}
                    style={{
                      width: "100%",
                      height: "100%",
                      transform: "translate(0,-15%)",
                      opacity: 0.8,
                    }}
                  />
                  <Text>{i.text}</Text>
                </Inner>
              </BubbleType>
            );
          }
          case "planet": {
            return (
              <PlanetType $position={i.position} key={id + i.type}>
                <Inner>
                  <img
                    src={"/assets/images/scanner/planet.webp"}
                    alt={"scanner"}
                    style={{
                      width: "100%",
                      height: "100%",
                      opacity: 0.6,
                    }}
                  />
                  <PlanetText>{i.text}</PlanetText>
                </Inner>
              </PlanetType>
            );
          }
          case "text": {
            return (
              <TextType $position={i.position} key={id + i.type}>
                <Inner>
                  <img
                    src={"/assets/images/scanner/arrow.webp"}
                    alt={"arrow"}
                    style={{
                      width: "15vh",
                      aspectRatio: "1.88",
                      transform: `translate(0,${
                        i.bottom ? "-55%" : "-15%"
                      }) rotateY(${i.right ? "180deg" : "0"}) rotateX(${
                        i.bottom ? "180deg" : "0"
                      })`,
                      opacity: 0.8,
                    }}
                  />
                  <Text $right={i.right}>{i.text}</Text>
                </Inner>
              </TextType>
            );
          }
          case "scroll_down": {
            return (
              <ScrollDownType key={id + i.type}>
                {i.text}
                <img
                  src={"/assets/images/scanner/down_arrow.webp"}
                  alt={"down_arrow"}
                  style={{
                    width: "15vh",
                    aspectRatio: "0.7593",
                    transform: "translate(0,0)",
                    opacity: 0.8,
                  }}
                />
              </ScrollDownType>
            );
          }
          case "scroll_up": {
            return (
              <ScrollUpType key={id + i.type}>
                <img
                  src={"/assets/images/scanner/up_arrow.webp"}
                  alt={"up_arrow"}
                  style={{
                    width: "100%",
                    height: "100%",
                    opacity: 0.8,
                  }}
                />
                {i.text}
              </ScrollUpType>
            );
          }
          case "scroll_init": {
            return (
              <ScrollInitType key={id + i.type}>
                <img
                  src={"/assets/images/scanner/scroll.webp"}
                  alt={"scroll_init"}
                  style={{
                    width: "15vh",
                    aspectRatio: "0.7593",
                    transform: "translate(0,0)",
                    opacity: 0.8,
                  }}
                />
                {i.text}
              </ScrollInitType>
            );
          }
          default:
            return null;
        }
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 600;
  color: #85edcacc;
  font-size: 2.2vh;
`;
const BubbleType = styled.div<{ $position?: number[] }>`
  display: flex;
  position: fixed;
  aspect-ratio: 1.88;
  bottom: 0;
  left: 50%;
  width: 8%;
  transform: ${(props) =>
    props.$position
      ? `translate(${-50 + props.$position[0]}%,${props.$position[1]}%)`
      : "translate(-50%,-50%)"};
`;
const PlanetType = styled.div<{ $position?: number[] }>`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 55vh;
  aspect-ratio: 1.1591;
  transform: ${(props) =>
    props.$position
      ? `translate(${-50 + props.$position[0]}%,${
          -50 + props.$position[1]
        }%) rotate(-10deg)`
      : "translate(-50%,-50%) rotate(-10deg)"};
`;
const TextType = styled.div<{ $position?: number[] }>`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: ${(props) =>
    props.$position
      ? `translate(${-50 + props.$position[0]}%,${-50 + props.$position[1]}%)`
      : "translate(-50%,-50%)"};
`;
const ScrollUpType = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  font-size: 2.55vh;
`;
const ScrollDownType = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 20%;
  left: 50%;
  transform: translate(-50%, 50%);
  align-items: center;
  font-size: 2.55vh;
`;
const ScrollInitType = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  font-size: 2.55vh;
`;
const Inner = styled.div`
  display: flex;
  position: relative;
`;
const PlanetText = styled.div<{ $right?: boolean }>`
  display: flex;
  position: absolute;
  white-space: nowrap;
  top: 50%;
  left: 50%;
  color: #ffffffa4;
  transform: translate(-50%, -50%);
  font-size: 3vh;
  font-weight: bold;
`;

const Text = styled.div<{ $right?: boolean }>`
  display: flex;
  position: absolute;
  white-space: nowrap;
  ${(props) =>
    props.$right
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `};
  transform: translate(${(props) => (props.$right ? "-100%" : "100%")}, 0);
`;
