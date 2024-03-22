import { Float, Line, PerspectiveCamera, useScroll } from "@react-three/drei";
import React, { useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import Dog from "../common/Dog";
import CUPlanet from "../p_cu_components/CU_Planet";
import CalculatorPlanet from "../p_calculator_components/Calculator_Planet";
import StreetStorePlanet from "../p_streetStore_components/StreetStore_Planet";
import MeonghaePlanet from "../p_meonghae_components/Meonghae_Planet";
import DOSPlanet from "../p_dos_components/DOS_Planet";
import GitPlanet from "../p_git_components/Git_Planet";
import {
  CAL_EO,
  CAL_SO,
  CU_EO,
  CU_SO,
  ST_SO,
  ST_EO,
  DOS_SO,
  DOS_EO,
  MEONG_SO,
  MEONG_EO,
  GIT_SO,
  GIT_EO,
  DOG_SO,
} from "../../../data/scroll_offset";
import { useMoveCurve } from "../../../hook/useMoveCurve";

const DOG_MAX_ANGLE = 10;
const CURVE_AHEAD_CAMERA = 0.008;
const CURVE_AHEAD_DOG = 0.02;

const MoveController: React.FunctionComponent = () => {
  const scroll = useScroll();
  const { curve } = useMoveCurve();
  const cameraGroup = useRef<THREE.Group>(null!);
  const dog = useRef<THREE.Group>(null!);

  const isStop = () => {
    return (
      (CU_SO < scroll.offset && scroll.offset < CU_EO) ||
      (CAL_SO < scroll.offset && scroll.offset < CAL_EO) ||
      (ST_SO < scroll.offset && scroll.offset < ST_EO) ||
      (DOS_SO < scroll.offset && scroll.offset < DOS_EO) ||
      (MEONG_SO < scroll.offset && scroll.offset < MEONG_EO)
    );
  };
  const backOffset = (s: number, e: number, scroll: number, i: number) => {
    if (0 < i) return scroll - ((e - scroll) * 0.03) / (e - s);
    else return scroll;
  };
  const scrollOffsets: Array<{ s: number; e: number; s_: number; e_: number }> =
    [
      { s: DOG_SO, e: CU_SO, s_: CU_SO, e_: CU_EO },
      { s: CU_EO, e: CAL_SO, s_: CAL_SO, e_: CAL_EO },
      { s: CAL_EO, e: ST_SO, s_: ST_SO, e_: ST_EO },
      { s: ST_EO, e: DOS_SO, s_: DOS_SO, e_: DOS_EO },
      { s: DOS_EO, e: MEONG_SO, s_: MEONG_SO, e_: MEONG_EO },
      { s: MEONG_EO, e: GIT_EO, s_: GIT_SO, e_: GIT_EO },
    ];

  useFrame((_state, delta) => {
    const scrollOffset = Math.max(0, scroll.offset);
    scrollOffsets.some((offsets, index) => {
      if (offsets.s <= scrollOffset && scrollOffset < offsets.e_) {
        let curPoint, tangent, lookAtPoint;
        if (offsets.s <= scrollOffset && scrollOffset < offsets.e) {
          lookAtPoint = curve.getPoint(
            Math.min(
              backOffset(offsets.s, offsets.e, scrollOffset, index) +
                CURVE_AHEAD_CAMERA,
              1
            )
          );
          curPoint = curve.getPoint(
            backOffset(offsets.s, offsets.e, scrollOffset, index)
          );
          tangent = curve.getTangent(
            backOffset(offsets.s, offsets.e, scrollOffset, index) +
              CURVE_AHEAD_DOG
          );
        } else {
          lookAtPoint = curve.getPoint(
            Math.min(offsets.s_ + CURVE_AHEAD_CAMERA, 1)
          );
          curPoint = curve.getPoint(offsets.s_);
          tangent = curve.getTangent(offsets.s_ + CURVE_AHEAD_DOG);
        }
        cameraGroup.current.position.lerp(curPoint, delta * 4);
        if (scroll.offset < 1) {
          const currentLookAt = cameraGroup.current.getWorldDirection(
            new THREE.Vector3()
          );
          const targetLookAt = new THREE.Vector3()
            .subVectors(curPoint, lookAtPoint)
            .normalize();
          const lookAt = currentLookAt.lerp(targetLookAt, delta * 4);
          cameraGroup.current.lookAt(
            cameraGroup.current.position.clone().add(lookAt)
          );
        }
        tangent.applyAxisAngle(
          new THREE.Vector3(0, 1, 0),
          -cameraGroup.current.rotation.y
        );
        let angle = Math.atan2(-tangent.z, tangent.x);
        angle = -Math.PI / 2 + angle;
        let angleDegrees = (angle * 180) / Math.PI;
        angleDegrees *= 2.4;
        if (angleDegrees < 0) {
          angleDegrees = Math.max(angleDegrees, -DOG_MAX_ANGLE);
        }
        if (angleDegrees > 0) {
          angleDegrees = Math.min(angleDegrees, DOG_MAX_ANGLE);
        }
        angle = (angleDegrees * Math.PI) / 180;
        const targetDogQuaternion = new THREE.Quaternion().setFromEuler(
          new THREE.Euler(dog.current.rotation.x, dog.current.rotation.y, angle)
        );
        dog.current.quaternion.slerp(targetDogQuaternion, delta * 2);
        return true;
      } else {
        return false;
      }
    });
  });

  // const curveStartPoints = curve.getPoints(50);
  return (
    <>
      <group ref={cameraGroup}>
        {/* <PerspectiveCamera
          position={[0, 100, 0]}
          fov={60}
          makeDefault
          rotation={[-Math.PI / 2, 0, 0]}
        /> */}
        <PerspectiveCamera position={[0, 0, 0]} fov={60} makeDefault />
        <group ref={dog}>
          <Float floatIntensity={0.1} speed={4} rotationIntensity={0.1}>
            <Dog />
          </Float>
        </group>
      </group>
      <CUPlanet />
      <CalculatorPlanet />
      <StreetStorePlanet />
      <DOSPlanet />
      <MeonghaePlanet />
      <GitPlanet />
      {/* <Line points={curveStartPoints} color="pink" lineWidth={2} /> */}
    </>
  );
};
export default MoveController;
