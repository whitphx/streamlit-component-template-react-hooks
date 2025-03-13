import React from "react";
import { createRoot } from "react-dom/client";
import { StreamlitProvider } from "streamlit-component-lib-react-hooks";
import MyComponent from "./MyComponent";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StreamlitProvider>
      <MyComponent />
    </StreamlitProvider>
  </React.StrictMode>,
);
