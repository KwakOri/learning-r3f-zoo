import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import "./App.css";
import Environments from "./components/Environments";
import Frame from "./components/Frame";
import { EditIcon } from "./components/icons/EditIcon";

function App() {
  const [isEditMode, setIsEditMode] = useState(false);
  return (
    <Frame>
      <Canvas
        camera={{
          position: [0, 500, 0],
        }}
      >
        <Environments isEditMode={isEditMode} />
      </Canvas>
      <div className={"overlay"}>
        <EditIcon onClick={() => setIsEditMode((prev) => !prev)} />
      </div>
    </Frame>
  );
}

export default App;
