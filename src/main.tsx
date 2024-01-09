import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { DrawerProvider } from "@/hooks/use-drawer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DrawerProvider>
      <App />
    </DrawerProvider>
  </React.StrictMode>
);
