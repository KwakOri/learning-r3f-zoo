/* eslint-disable react/prop-types */
import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { Suspense } from "react";
import Animal from "./Animal";
import Dino from "./Dino";
import ZooMap from "./ZooMap";

const START_Y = 20;

const Environments = ({ isEditMode }) => {
  const { camera } = useThree();
  useFrame(() => {
    if (!isEditMode) return;
    camera.position.x = 0;
    camera.position.y = 500;
    camera.position.z = 0;
  });

  return (
    <>
      {isEditMode && (
        <>
          <gridHelper args={[1000, 100]} />
          <gridHelper rotation={[Math.PI / 2, 0, 0]} args={[1000, 100]} />
        </>
      )}
      <ambientLight intensity={4} />
      <directionalLight intensity={4} />
      <OrbitControls />
      <Suspense>
        <Physics>
          <RigidBody type={"fixed"} colliders={"trimesh"}>
            <ZooMap />
          </RigidBody>
          <RigidBody
            enabledRotations={[false, false, false]}
            colliders={"hull"}
          >
            <Animal position={[10, START_Y, 0]} name={"Alpaca"} />
          </RigidBody>
          <RigidBody
            enabledRotations={[false, false, false]}
            colliders={"hull"}
          >
            <Dino position={[-10, START_Y, 0]} name={"TRex"} />
          </RigidBody>
        </Physics>
      </Suspense>
    </>
  );
};

export default Environments;
