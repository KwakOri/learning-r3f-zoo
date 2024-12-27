import { useFBX } from "@react-three/drei";

const ZooMap = () => {
  const fbx = useFBX(`/models/map/zoo.FBX`);
  return <primitive object={fbx}></primitive>;
};

export default ZooMap;
