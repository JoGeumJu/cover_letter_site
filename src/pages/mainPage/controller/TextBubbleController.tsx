import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
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
import {
  bubbleIsFoldingState,
  bubbleOpacityState,
  bubbleSkipState,
  bubbleTalkingOptionState,
  bubbleTextIndex,
  moveModeState,
  moveOffsetState,
} from "../../../recoil/globalState";

export const TextBubbleController: React.FunctionComponent = () => {
  const scroll = useScroll();
  const setOpacity = useSetRecoilState(bubbleOpacityState);
  const setIsFolding = useSetRecoilState(bubbleIsFoldingState);
  const setTalkingOption = useSetRecoilState(bubbleTalkingOptionState);
  const [textIndex, setTextIndex] = useRecoilState(bubbleTextIndex);
  const setSkip = useSetRecoilState(bubbleSkipState);
  const [moveMode, setMoveMode] = useRecoilState(moveModeState);
  const moveOffset = useRecoilValue(moveOffsetState);

  useEffect(() => {
    if (scroll.offset < moveOffset[0] || scroll.offset > moveOffset[1]) {
      const height = scroll.el.scrollHeight - scroll.el.clientHeight;
      scroll.el.scrollTo({
        top: (height * (moveOffset[0] + moveOffset[1])) / 2,
      });
      scroll.offset = 0.5;
    }
    setMoveMode(false);
  }, [moveOffset]);

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

  return <></>;
};
