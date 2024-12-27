import { OrbitControls } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import { Suspense } from "react";
import Animal from "./Animal";
import Dino from "./Dino";
import ZooMap from "./ZooMap";

const START_Y = 20;

const Environments = () => {
  return (
    <>
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
