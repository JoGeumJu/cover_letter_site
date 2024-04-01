import { useEffect, useRef, useState } from "react";

const moveModeText = "좋아! 원하는 행성을 클릭해봐 멍!";

const useTalking = (
  text: String,
  speed: number = 50,
  moveMode: boolean,
  skip: boolean
) => {
  const [displayText, setDisplayText] = useState<String>("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastUpdateRef = useRef<number>(0);

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
        if (moveMode) {
          lastUpdateRef.current = timestamp;
          if (moveModeText.length > currentIndex) {
            setDisplayText((prev) => prev + moveModeText[currentIndex]);
            setCurrentIndex((prev) => prev + 1);
          }
        } else {
          lastUpdateRef.current = timestamp;
          if (text.length > currentIndex) {
            setDisplayText((prev) => prev + text[currentIndex]);
            setCurrentIndex((prev) => prev + 1);
          }
        }
      }
      animationFrameId = requestAnimationFrame(animateTyping);
    };
    animationFrameId = requestAnimationFrame(animateTyping);
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [currentIndex, text, moveMode]);

  return skip ? text : displayText;
};

export default useTalking;
