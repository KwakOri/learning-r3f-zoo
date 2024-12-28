import { Canvas } from "@react-three/fiber";
import "./App.css";
import Environments from "./components/Environments";
import Frame from "./components/Frame";
import { EditIcon } from "./components/icons/EditIcon";
import { useZoo } from "./contexts/context";

function App() {
  const { setIsEditMode } = useZoo();
  return (
    <Frame>
      <Canvas
        camera={{
          position: [0, 500, 0],
        }}
      >
        <Environments />
      </Canvas>
      <div className={"overlay"}>
        <EditIcon onClick={() => setIsEditMode((prev) => !prev)} />
      </div>
    </Frame>
  );
}

export default App;
