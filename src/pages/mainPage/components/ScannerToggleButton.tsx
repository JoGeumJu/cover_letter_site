import React, { useRef, useState } from "react";
import { css, keyframes, styled } from "styled-components";
import { CSSTransition } from "react-transition-group";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  isCheckAlarmState,
  isNewAlarmState,
  isScannerOpenState,
} from "../../../recoil/globalState";
import { ScannerInfo } from "./ScannerInfo";

export const ScannerToggleButton: React.FunctionComponent = () => {
  const [isFolding, setIsFolding] = useState(true);
  const scannerRef = useRef(null);
  const setIsScannerOpen = useSetRecoilState(isScannerOpenState);
  const isNewAlarm = useRecoilValue(isNewAlarmState);
  const [isCheckAlarm, setIsCheckAlarm] = useRecoilState(isCheckAlarmState);

  return (
    <>
      <CSSTransition
        in={!isFolding}
        nodeRef={scannerRef}
        className={"scanner"}
        timeout={700}
        unmountOnExit
      >
        <ScannerBox ref={scannerRef}>
          <Filter className="scanner_layout" />
          <ScannverImg
            className="scanner_layout"
            src={"/assets/images/scanner/scanner.webp"}
            alt={"scanner"}
          />
          <ScannerInfo />
        </ScannerBox>
      </CSSTransition>
      <ButtonBox $isAlarm={isNewAlarm && !isCheckAlarm}>
        <Button
          type="button"
          onClick={() => {
            if (isFolding) setIsScannerOpen(true);
            setIsFolding(!isFolding);
            setIsCheckAlarm(true);
          }}
        >
          <ButtonImg
            src={"/assets/images/scanner/scanner_button.webp"}
            alt={"scanner_button"}
          />
          {isNewAlarm && !isCheckAlarm ? <NewAlarm>N</NewAlarm> : null}
        </Button>
      </ButtonBox>
    </>
  );
};

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  40% {
    transform: scale(1);
  }
  60%{
    
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;
const ButtonBox = styled.div<{ $isAlarm: boolean }>`
  display: flex;
  position: fixed;
  right: 4.5vh;
  top: 3vh;
  z-index: 600;
  animation: ${(props) =>
    props.$isAlarm
      ? css`
          ${pulse} 2s ease infinite
        `
      : null};
  &:hover {
    transform: scale(1.2);
  }
  transition: transform 0.3s ease;
`;
const Button = styled.button`
  position: relative;
  height: 9vh;
  aspect-ratio: 1.376;
`;
const ButtonImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  transform: scale(1.2);
`;
const NewAlarm = styled.div`
  display: flex;
  position: absolute;
  background-color: #ff6666;
  font-size: 1.8vh;
  font-weight: bold;
  color: white;
  width: 3vh;
  height: 3vh;
  border-radius: 3vh;
  align-items: center;
  justify-content: center;
  top: 0.6vh;
  right: -0.6vh;
  padding-top: 0.3vh;
  box-sizing: border-box;
`;
const ScannerBox = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 600;
`;
const ScannverImg = styled.img`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: visible;
  z-index: 600;
`;
const Filter = styled.div`
  display: flex;
  position: fixed;
  width: 95%;
  height: 92%;
  background: #00000088;
  backdrop-filter: invert(35%);
  z-index: 600;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5vh;
`;
