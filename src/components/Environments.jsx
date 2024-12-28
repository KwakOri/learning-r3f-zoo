/* eslint-disable react/prop-types */
import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { Fragment, Suspense } from "react";
import { useZoo } from "../contexts/context";
import Figure from "./Figures/Figure";
import ZooMap from "./ZooMap";

const Environments = () => {
  const {
    isEditMode,
    objects,
    setDraggedPosition,
    draggedPosition,
    selectedId,
    setObjects,
  } = useZoo();

  const { camera } = useThree();
  useFrame(() => {
    if (!isEditMode) return;
    camera.position.x = 0;
    camera.position.y = 500;
    camera.position.z = 0;
  });
  console.log(objects.find((obj) => obj.id === selectedId)?.position);

  const onPointerMove = (e) => {
    // setDraggedPosition(e.point);
    // console.log(e.point.x);
    // console.log(selectedId);
    if (selectedId) {
      setObjects((prev) => {
        return prev.map((obj) => {
          if (obj.id !== selectedId) return obj;
          const newObj = structuredClone(obj);
          newObj.position[0] = e.point.x;
          newObj.position[2] = e.point.z;
          return newObj;
        });
      });
    }
  };

  return (
    <>
      {isEditMode && (
        <>
          <gridHelper onPointerMove={onPointerMove} args={[1000, 100]} />
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
          {objects.map(({ id, ...object }) => {
            return (
              <Fragment key={id}>
                <Figure id={id} {...object} />
              </Fragment>
            );
          })}
        </Physics>
      </Suspense>
    </>
  );
};

export default Environments;
