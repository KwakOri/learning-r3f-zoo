import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import ZooProvider from "./contexts/context";

createRoot(document.getElementById("root")).render(
  <ZooProvider>
    <App />
  </ZooProvider>
);
