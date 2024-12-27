import { Canvas } from "@react-three/fiber";
import "./App.css";
import Environments from "./components/Environments";
import Frame from "./components/Frame";

function App() {
  return (
    <Frame>
      <Canvas
        camera={{
          position: [10, 10, 10],
        }}
      >
        <Environments />
      </Canvas>
    </Frame>
  );
}

export default App;
