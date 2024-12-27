import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { BoxGeometry } from "three";
import "./App.css";

function App() {
  return (
    <>
      <Canvas>
        <OrbitControls />
        <mesh>
          <BoxGeometry></BoxGeometry>
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
