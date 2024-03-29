import { useMemo } from "react";
import * as THREE from "three";

export const useMoveCurve = () => {
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, -20),
        new THREE.Vector3(0, 0, -40),
        new THREE.Vector3(-4, 2, -60),
        new THREE.Vector3(-10, 4, -80),
        new THREE.Vector3(-18, 6, -100),
        new THREE.Vector3(-30, 8, -120),
        new THREE.Vector3(-42, 10, -140),
        new THREE.Vector3(-54, 14, -160),
        new THREE.Vector3(-55, 20, -180),
        new THREE.Vector3(-25, 16, -200),
        new THREE.Vector3(-10, 13, -220),
        new THREE.Vector3(5, 10, -240),
        new THREE.Vector3(18, 6, -260),
        new THREE.Vector3(33, 2, -280),
        new THREE.Vector3(43, -2, -300),
        new THREE.Vector3(53, -6, -320),
        new THREE.Vector3(60, -10, -340),
        new THREE.Vector3(35, -12, -360),
        new THREE.Vector3(18, -15, -380),
        new THREE.Vector3(5, -20, -400),
        new THREE.Vector3(0, -24, -420),
        new THREE.Vector3(-5, -28, -440),
        new THREE.Vector3(-18, -32, -460),
        new THREE.Vector3(-33, -34, -480),
        new THREE.Vector3(-40, -35, -500),
        new THREE.Vector3(-15, -30, -520),
        new THREE.Vector3(2, -25, -540),
        new THREE.Vector3(6, -23, -560),
        new THREE.Vector3(9, -22, -580),
        new THREE.Vector3(11, -20, -600),
        new THREE.Vector3(13, -18, -620),
        new THREE.Vector3(14, -17, -640),
        new THREE.Vector3(15, -15, -660),
        new THREE.Vector3(-30, 12, -680),
        new THREE.Vector3(-38, 18, -700),
        new THREE.Vector3(-40, 20, -720),
        new THREE.Vector3(-48, 21, -740),
        new THREE.Vector3(-54, 23, -760),
        new THREE.Vector3(-57, 27, -780),
        new THREE.Vector3(-59, 29, -800),
        new THREE.Vector3(-60, 30, -820),
        new THREE.Vector3(-38, 17, -840),
        new THREE.Vector3(-26, 13, -860),
        new THREE.Vector3(-16, 8, -880),
        new THREE.Vector3(-8, 3, -900),
        new THREE.Vector3(-4, -1, -920),
        new THREE.Vector3(-2, -4, -940),
        new THREE.Vector3(0, -6, -960),
        new THREE.Vector3(0, -3, -980),
        new THREE.Vector3(0, 0, -1000),
      ],
      false,
      "catmullrom",
      0.5
    );
  }, []);

  return {
    curve,
  };
};
