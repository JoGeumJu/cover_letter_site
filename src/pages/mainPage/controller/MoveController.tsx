import { Float, PerspectiveCamera, useScroll } from "@react-three/drei";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";
import Dog from "../common/Dog";
import Planet from "../Planet";
import CUPlanet from "../cu_components/CU_Planet";
import CalculatorPlanet from "../calculator_components/Calculator_Planet";
import StreetStorePlanet from "../streetStore_components/StreetStore_Planet";
import MeonghaePlanet from "../meonghae_components/Meonghae_Planet";
import DOSPlanet from "../dos_components/DOS_Planet";

const CURVE_AHEAD_CAMERA = 0.008;
const CURVE_AHEAD_Dog = 0.02;
const Dog_MAX_ANGLE = 10;

const MoveController: React.FunctionComponent = () => {
  const scroll = useScroll();
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, -4),
        new THREE.Vector3(0, 0, -30),
        new THREE.Vector3(-30, 25, -80), //cu
        new THREE.Vector3(5, 2, -90),
        new THREE.Vector3(40, -20, -230), //calculator
        new THREE.Vector3(2, -37, -240),
        new THREE.Vector3(-45, -55, -400), //streetStore
        new THREE.Vector3(-5, -25, -410),
        new THREE.Vector3(35, 5, -600), //dos
        new THREE.Vector3(2, -7, -610),
        new THREE.Vector3(-30, -20, -850), //meonghae
        new THREE.Vector3(5, 0, -860),
        new THREE.Vector3(40, 20, -1100), //git
      ],
      false,
      "catmullrom",
      0.5
    );
  }, []);
  const cameraGroup = useRef<THREE.Group>(null!);
  const dog = useRef<THREE.Group>(null!);

  useFrame((_state, delta) => {
    // console.log(cameraGroup.current.rotation);
    const scrollOffset = Math.max(0, scroll.offset);
    const curPoint = curve.getPoint(scrollOffset);

    cameraGroup.current.position.lerp(curPoint, delta * 24);
    const lookAtPoint = curve.getPoint(
      Math.min(scrollOffset + CURVE_AHEAD_CAMERA, 1)
    );
    const currentLookAt = cameraGroup.current.getWorldDirection(
      new THREE.Vector3()
    );
    const targetLookAt = new THREE.Vector3()
      .subVectors(curPoint, lookAtPoint)
      .normalize();
    const lookAt = currentLookAt.lerp(targetLookAt, delta * 24);
    cameraGroup.current.lookAt(
      cameraGroup.current.position.clone().add(lookAt)
    );

    const tangent = curve.getTangent(scrollOffset + CURVE_AHEAD_Dog);
    const nonLeprLookAt = new Group();
    nonLeprLookAt.position.copy(curPoint);
    nonLeprLookAt.lookAt(nonLeprLookAt.position.clone().add(targetLookAt));
    tangent.applyAxisAngle(
      new THREE.Vector3(0, 1, 0),
      -nonLeprLookAt.rotation.y
    );

    let angle = Math.atan2(-tangent.z, tangent.x);
    angle = -Math.PI / 2 + angle;
    let angleDegrees = (angle * 180) / Math.PI;
    angleDegrees *= 2.4;
    if (angleDegrees < 0) {
      angleDegrees = Math.max(angleDegrees, -Dog_MAX_ANGLE);
    }
    if (angleDegrees > 0) {
      angleDegrees = Math.min(angleDegrees, Dog_MAX_ANGLE);
    }
    angle = (angleDegrees * Math.PI) / 180;
    const targetDogQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(dog.current.rotation.x, dog.current.rotation.y, angle)
    );
    dog.current.quaternion.slerp(targetDogQuaternion, delta * 2);
  });

  return (
    <>
      <group ref={cameraGroup}>
        <PerspectiveCamera position={[0, 0, 0]} fov={60} makeDefault />
        <group ref={dog}>
          <Float floatIntensity={0.08} speed={4} rotationIntensity={0.08}>
            <Dog />
          </Float>
        </group>
      </group>
      <CUPlanet />
      <CalculatorPlanet />
      <StreetStorePlanet />
      <DOSPlanet />
      <MeonghaePlanet />
      <Planet
        // git
        args={[1, 1, 1]}
        position={[42, 20, -1125]}
        scale={[1, 1, 1]}
        rotation={[0, 0, 0]}
      />
    </>
  );
};
export default MoveController;
