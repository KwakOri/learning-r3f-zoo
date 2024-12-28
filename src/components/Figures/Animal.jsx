/* eslint-disable react/prop-types */
import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import { SkeletonUtils } from "three-stdlib";

const Animal = ({ name, ...props }) => {
  const getUrl = (name) => `/models/animals/${name}.glb`;

  const group = useRef();
  const { scene, animations } = useGLTF(getUrl(name));
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Walk"].reset().play();
  });

  return (
    <group ref={group}>
      <primitive object={clone} {...props}></primitive>
    </group>
  );
};

export default Animal;
