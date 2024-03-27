import { useEffect, useRef, useState } from "react";

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
          let moveModeText = "좋아! 원하는 행성을 클릭해봐 멍!";
          lastUpdateRef.current = timestamp;
          if (moveModeText.length > currentIndex) {
            setDisplayText((state) => {
              const newState = (state += moveModeText[currentIndex]);
              setCurrentIndex((prevIndex) => prevIndex + 1);
              return newState;
            });
          }
        } else {
          lastUpdateRef.current = timestamp;
          if (text.length > currentIndex) {
            setDisplayText((state) => {
              const newState = (state += text[currentIndex]);
              setCurrentIndex((prevIndex) => prevIndex + 1);
              return newState;
            });
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
