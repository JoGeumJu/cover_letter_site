import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { bubbleSkipState } from "../recoil/globalState";

const moveModeText = "좋아! 원하는 행성을 클릭해봐 멍!";

const useTalking = (text: String, speed: number = 50, moveMode: boolean) => {
  const [skip, setSkip] = useRecoilState(bubbleSkipState);
  const [displayText, setDisplayText] = useState<String>("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastUpdateRef = useRef<number>(0);

  const textTemp = moveMode ? moveModeText : text;

  useEffect(() => {
    setCurrentIndex(0);
    setDisplayText("");
  }, [text, moveMode]);

  useEffect(() => {
    let animationFrameId: number;
    const animateTyping = (timestamp: number) => {
      if (lastUpdateRef.current === null) lastUpdateRef.current = timestamp;
      const elapsed = timestamp - lastUpdateRef.current;
      if (elapsed >= (moveMode ? 50 : speed)) {
        lastUpdateRef.current = timestamp;
        if (textTemp.length > currentIndex) {
          setDisplayText((prev) => prev + textTemp[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        } else {
          setSkip(true);
        }
      }
      animationFrameId = requestAnimationFrame(animateTyping);
    };
    animationFrameId = requestAnimationFrame(animateTyping);
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [currentIndex, text, moveMode]);

  return skip ? textTemp : displayText;
};

export default useTalking;
