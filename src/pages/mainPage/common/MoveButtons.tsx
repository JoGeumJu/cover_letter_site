import { ScrollControlsState } from "@react-three/drei";
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

interface ButtonPropsType {
  setUnmoveMode: Function;
  scroll: ScrollControlsState;
  moveMode: boolean;
}

export const MoveButtons: React.FunctionComponent<ButtonPropsType> = ({
  setUnmoveMode,
  scroll,
  moveMode,
}) => {
  const handleClick = (offset: number[]) => {
    if (scroll.offset < offset[0] || scroll.offset > offset[1]) {
      const height = scroll.el.scrollHeight - scroll.el.clientHeight;
      setUnmoveMode();
      scroll.el.scrollTo({ top: (height * (offset[0] + offset[1])) / 2 });
      scroll.offset = 0.5;
    } else {
      setUnmoveMode();
    }
  };

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
    <>
      <Background $moveMode={moveMode} />
      <SelectPlanets $moveMode={moveMode}>
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
    </>
  );
};

const Background = styled.div<{ $moveMode: boolean }>`
  display: flex;
  position: fixed;
  background: black;
  opacity: ${(props) => (props.$moveMode ? 0.85 : 0)};
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease;
  pointer-events: ${(props) => (props.$moveMode ? "auto" : "none")};
`;
const SelectPlanets = styled.section<{ $moveMode: boolean }>`
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
  opacity: ${(props) => (props.$moveMode ? 1 : 0)};
  pointer-events: ${(props) => (props.$moveMode ? "auto" : "none")};
  transition: all 0.3s ease;
`;
const Button = styled.button<{ $position: number[]; $moveMode: boolean }>`
  display: flex;
  width: 15%;
  max-width: 200px;
  align-items: center;
  justify-content: center;
  transform: ${(props) =>
    `translate(${props.$position[0]}vw, ${props.$position[1]}vh) scale(${
      props.$moveMode ? 1 : 0
    })`};
  transition: transform 0.3s ease;
  &:hover img {
    transform: scale(1.15);
  }
`;
const Image = styled.img`
  width: 110%;
  transition: transform 0.3s ease;
`;
