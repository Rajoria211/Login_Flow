import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/button.css";
import "./styles/inputs.css";
import "./styles/progress.css";
import "./styles/steps.css";
import "./styles/modal.css";
import "./styles/toast.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
