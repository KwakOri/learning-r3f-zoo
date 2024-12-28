/* eslint-disable react/prop-types */
import { useAnimations, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useMemo, useRef } from "react";
import { SkeletonUtils } from "three-stdlib";
import { useZoo } from "../../contexts/context";
import { getUrl } from "../../utils";

const Figure = ({ name, type, id, ...props }) => {
  const { isEditMode, setSelectedId } = useZoo();
  const group = useRef();
  const { scene, animations } = useGLTF(getUrl(name, type));
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { actions } = useAnimations(animations, group);

  const handleObjectClick = () => {
    setSelectedId((prev) => (!prev ? id : null));
  };

  useEffect(() => {
    const animation = type === `animal` ? "Idle" : `Armature|${name}_Idle`;
    actions[animation].reset().play();
  }, []);

  return (
    <>
      {isEditMode ? (
        <group
          onClick={handleObjectClick}
          // onPointerDown={handlePointerDown}
          // onPointerUp={handlePointerUp}
          ref={group}
          {...props}
        >
          <primitive object={clone}></primitive>
        </group>
      ) : (
        <RigidBody enabledRotations={[false, false, false]} colliders={"hull"}>
          <group ref={group} {...props}>
            <primitive object={clone}></primitive>
          </group>
        </RigidBody>
      )}
    </>
  );
};

export default Figure;
