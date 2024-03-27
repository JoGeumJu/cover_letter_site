import { atom } from "recoil";

export const isLoadingState = atom<boolean>({
  key: "isLoadingState",
  default: false,
});
export const moveModeState = atom<boolean>({
  key: "moveModeState",
  default: false,
});
