import { useEffect, useRef, useState } from "react";

const useTalking = (text: String, speed: number = 50) => {
  const [displayText, setDisplayText] = useState<String>("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastUpdateRef = useRef<number>(0);

  useEffect(() => {
    let animationFrameId: number;
    const animateTyping = (timestamp: number) => {
      if (lastUpdateRef.current === null) lastUpdateRef.current = timestamp;
      const elapsed = timestamp - lastUpdateRef.current;
      if (elapsed > speed) {
        lastUpdateRef.current = timestamp;
        if (text.length > currentIndex) {
          setDisplayText((state) => {
            const newState = (state += text[currentIndex]);
            setCurrentIndex((prevIndex) => prevIndex + 1);
            return newState;
          });
        }
      }
      animationFrameId = requestAnimationFrame(animateTyping);
    };
    animationFrameId = requestAnimationFrame(animateTyping);
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [currentIndex, speed, text]);

  useEffect(() => {
    setCurrentIndex(0);
    setDisplayText("");
  }, [text]);

  return displayText;
};

export default useTalking;
