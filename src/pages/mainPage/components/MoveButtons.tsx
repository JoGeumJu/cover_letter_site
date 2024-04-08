import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import {
  CAL_EO,
  CAL_SO,
  CU_EO,
  CU_SO,
  DOS_EO,
  DOS_SO,
  GIT_EO,
  MEONG_EO,
  MEONG_SO,
  ST_EO,
  ST_SO,
} from "../../../data/scroll_offset";
import { moveOffsetState } from "../../../recoil/globalState";
import { CSSTransition } from "react-transition-group";
import { useEffect, useRef } from "react";

interface ButtonPropsType {
  moveMode: boolean;
}

export const MoveButtons: React.FunctionComponent<ButtonPropsType> = ({
  moveMode,
}) => {
  const moveButtonsRef = useRef(null);
  const setMoveOffset = useSetRecoilState(moveOffsetState);

  const handleClick = (offset: number[]) => {
    setMoveOffset(offset);
  };

  useEffect(() => {}, []);

  const settingButtons: Array<{
    name: string;
    position: number[];
    offset: number[];
  }> = [
    {
      name: "cu",
      position: [0, 10],
      offset: [CU_SO, CU_EO],
    },
    {
      name: "cal",
      position: [-1, -2],
      offset: [CAL_SO, CAL_EO],
    },
    {
      name: "st",
      position: [0, -10],
      offset: [ST_SO, ST_EO],
    },
    {
      name: "dos",
      position: [1, -10],
      offset: [DOS_SO, DOS_EO],
    },
    {
      name: "meong",
      position: [1, -2],
      offset: [MEONG_SO, MEONG_EO],
    },
    {
      name: "git",
      position: [0, 10],
      offset: [GIT_EO, GIT_EO],
    },
  ];

  return (
    <CSSTransition
      in={moveMode}
      nodeRef={moveButtonsRef}
      className={"move"}
      timeout={300}
      unmountOnExit
    >
      <div ref={moveButtonsRef}>
        <Background />
        <SelectPlanets>
          {settingButtons.map((i) => {
            return (
              <Button
                key={i.name}
                $position={i.position}
                type="button"
                $moveMode={moveMode}
                onClick={() => handleClick(i.offset)}
              >
                <Image
                  src={`/assets/images/move_buttons/${i.name}.webp`}
                  alt={"move_buttons"}
                />
              </Button>
            );
          })}
        </SelectPlanets>
      </div>
    </CSSTransition>
  );
};

const Background = styled.div`
  display: flex;
  position: fixed;
  background: #000000c5;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease;
`;
const SelectPlanets = styled.section`
  display: flex;
  position: fixed;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 70%;
  left: 50%;
  transform: translate(-50%, 0);
  gap: 1%;
  transition: all 0.3s ease;
`;
const Button = styled.button<{ $position: number[]; $moveMode: boolean }>`
  display: flex;
  width: 15%;
  align-items: center;
  justify-content: center;
  transform: ${(props) =>
    `translate(${props.$position[0]}vw, ${props.$position[1]}vh) scale(${
      props.$moveMode ? 1 : 0
    })`};
  transition: all 0.3s ease;
  &:hover img {
    transform: scale(1.15);
  }
`;
const Image = styled.img`
  width: 110%;
  transition: transform 0.3s ease;
`;
