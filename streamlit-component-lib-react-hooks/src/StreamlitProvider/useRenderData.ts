import React, { useContext } from "react";
import { RenderData } from "streamlit-component-lib";

export const renderDataContext = React.createContext<RenderData | undefined>(
  undefined,
);

/**
 * Returns `RenderData` received from Streamlit.
 */
export const useRenderData = (): RenderData => {
  const contextValue = useContext(renderDataContext);
  if (contextValue == null) {
    throw new Error(
      "useRenderData() must be used inside <StreamlitProvider />",
    );
  }

  return contextValue;
};
