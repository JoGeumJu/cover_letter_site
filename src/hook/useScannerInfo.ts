import { moveModeState, bubbleIsFoldingState } from "./../recoil/globalState";
import { getScannerLabel, moveModeScannerData } from "./../data/scanner_data";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { DataType, scannerData } from "../data/scanner_data";
import { scannerOffsetState } from "../recoil/globalState";

export const useScannerData = (): DataType[] => {
  const offset = useRecoilValue(scannerOffsetState);
  const moveMode = useRecoilValue(moveModeState);
  const isFolding = useRecoilValue(bubbleIsFoldingState);
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    if (moveMode) {
      setData(moveModeScannerData);
    } else if (isFolding) {
      const label = getScannerLabel(offset);
      setData(scannerData[label].filter((i) => i.type !== "bubble"));
    } else {
      const label = getScannerLabel(offset);
      setData(scannerData[label]);
    }
  }, [offset]);

  return data;
};
