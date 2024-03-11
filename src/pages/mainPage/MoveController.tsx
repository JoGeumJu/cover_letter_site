import { Float, useScroll, PerspectiveCamera, Text } from "@react-three/drei";
import React, { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";
import Dog from "./Dog";
import Planet from "./Planet";

const CURVE_DISTANCE = 10;
const CURVE_AHEAD_CAMERA = 0.008;
const CURVE_AHEAD_Dog = 0.02;
const Dog_MAX_ANGLE = 10;

const MoveController: React.FunctionComponent = () => {
  const scroll = useScroll();
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, -1 * CURVE_DISTANCE),
        new THREE.Vector3(0, 0, -5 * CURVE_DISTANCE),
        new THREE.Vector3(0, 0, -15 * CURVE_DISTANCE),
        new THREE.Vector3(0, 0, -27 * CURVE_DISTANCE),
        new THREE.Vector3(0, 0, -40 * CURVE_DISTANCE),
        new THREE.Vector3(0, 0, -55 * CURVE_DISTANCE),
        new THREE.Vector3(0, 0, -73 * CURVE_DISTANCE),
      ],
      false,
      "catmullrom",
      1
    );
  }, []);

  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.08);
    shape.lineTo(0, 0.08);

    return shape;
  }, [curve]);

  const cameraGroup = useRef<THREE.Group>(null!);

  useFrame((_state, delta) => {
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

  const dog = useRef<THREE.Group>(null!);

  return (
    <>
      <group ref={cameraGroup}>
        <PerspectiveCamera position={[0, 0, 20]} fov={60} makeDefault />
        <group ref={dog}>
          <Float floatIntensity={0.05} speed={4} rotationIntensity={0.05}>
            <Dog />
          </Float>
        </group>
      </group>
      <Planet args={[1, 1, 1]} position={[-15, 0, -65]} scale={[10, 10, 10]} />
      <Planet args={[1, 1, 1]} position={[15, 0, -165]} scale={[11, 11, 11]} />
      <Planet args={[1, 1, 1]} position={[-15, 0, -285]} scale={[15, 15, 15]} />
      <Planet args={[1, 1, 1]} position={[15, 0, -415]} scale={[17, 17, 17]} />
      <Planet args={[1, 1, 1]} position={[-15, 0, -565]} scale={[20, 20, 20]} />
      <Planet args={[1, 1, 1]} position={[0, 0, -745]} scale={[15, 15, 15]} />
    </>
  );
};
export default MoveController;
