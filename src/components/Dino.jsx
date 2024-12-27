import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { SkeletonUtils } from "three-stdlib";

const Dino = ({ name, ...props }) => {
  const getUrl = (name) => `/models/dinos/${name}.glb`;
  const { scene } = useGLTF(getUrl(name));
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);

  return <primitive object={clone} {...props}></primitive>;
};

export default Dino;
