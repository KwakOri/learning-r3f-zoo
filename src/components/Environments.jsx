import { OrbitControls } from "@react-three/drei";
import Dino from "./Dino";
import ZooMap from "./ZooMap";

const Environments = () => {
  return (
    <>
      <ambientLight intensity={4} />
      <directionalLight intensity={4} />
      <OrbitControls />
      <Dino name={"TRex"} />
      <ZooMap />
    </>
  );
};

export default Environments;
