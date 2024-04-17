import React, { useRef, useState } from "react";
import { styled } from "styled-components";
import { CSSTransition } from "react-transition-group";
import { useSetRecoilState } from "recoil";
import { isScannerOpenState } from "../../../recoil/globalState";
import { ScannerInfo } from "./ScannerInfo";

export const ScannerToggleButton: React.FunctionComponent = () => {
  const [isFolding, setIsFolding] = useState(true);
  const scannerRef = useRef(null);
  const setIsScannerOpen = useSetRecoilState(isScannerOpenState);

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
      <ButtonBox>
        <Button
          type="button"
          onClick={() => {
            if (isFolding) setIsScannerOpen(true);
            setIsFolding(!isFolding);
          }}
        >
          <ButtonImg
            src={"/assets/images/scanner/scanner_button.webp"}
            alt={"scanner_button"}
          />
        </Button>
      </ButtonBox>
    </>
  );
};

const ButtonBox = styled.div`
  display: flex;
  position: fixed;
  right: 4.5vh;
  top: 3vh;
  z-index: 600;
`;
const Button = styled.button`
  height: 9vh;
  aspect-ratio: 1.376;
  &:hover img {
    transform: scale(1.35);
  }
`;
const ButtonImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  transform: scale(1.2);
  transition: transform 0.3s ease;
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
