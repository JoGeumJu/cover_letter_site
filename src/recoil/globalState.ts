import { atom } from "recoil";

export const isLoadingState = atom<boolean>({
  key: "isLoadingState",
  default: false,
});
export const moveModeState = atom<boolean>({
  key: "moveModeState",
  default: false,
});
export const moveOffsetState = atom<number[]>({
  key: "moveOffsetState",
  default: [0, 0],
});

// bubble
export const bubbleOpacityState = atom<number>({
  key: "bubbleOpacityState",
  default: 1,
});
export const bubbleIsFoldingState = atom<boolean>({
  key: "bubbleIsFoldingState",
  default: false,
});
export const bubbleTalkingOptionState = atom<{ text: string; speed: number }>({
  key: "bubbleTalkingOptionState",
  default: { text: "", speed: 50 },
});
export const bubbleSkipState = atom<boolean>({
  key: "bubbleSkipState",
  default: false,
});
export const bubbleTextIndex = atom<number>({
  key: "bubbleTextIndex",
  default: 0,
});
