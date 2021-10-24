import React, { useEffect, useContext } from "react";
import { Streamlit, RenderData } from "streamlit-component-lib";
import { useRenderData } from "./useRenderData";
import ErrorBoundary from "./ErrorBoundary";

const renderDataContext = React.createContext<RenderData | undefined>(
  undefined
);

export const useStreamlit = (): RenderData => {
  const contextValue = useContext(renderDataContext);
  if (contextValue == null) {
    throw new Error("useStreamlit() must be used inside <StreamlitProvider />");
  }

  return contextValue;
};

interface StreamlitProviderProps {
  children: React.ReactNode;
}
const StreamlitProvider: React.VFC<StreamlitProviderProps> = (props) => {
  const renderData = useRenderData();

  useEffect(() => {
    Streamlit.setFrameHeight();
  });

  // Don't render until we've gotten our first data from Streamlit.
  if (renderData == null) {
    return null;
  }

  return (
    <ErrorBoundary>
      <renderDataContext.Provider value={renderData}>
        {props.children}
      </renderDataContext.Provider>
    </ErrorBoundary>
  );
};

export default StreamlitProvider;
