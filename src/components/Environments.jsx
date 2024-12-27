import { OrbitControls } from "@react-three/drei";
import Animal from "./Animal";
import ZooMap from "./ZooMap";

const Environments = () => {
  return (
    <>
      <gridHelper rotation={[Math.PI / 2, 0, 0]} args={[1000, 100]} />
      <gridHelper args={[1000, 100]} />
      <ambientLight intensity={4} />
      <directionalLight intensity={4} />
      <OrbitControls />
      <Animal name={"Alpaca"} />
      <ZooMap />
    </>
  );
};

export default Environments;
