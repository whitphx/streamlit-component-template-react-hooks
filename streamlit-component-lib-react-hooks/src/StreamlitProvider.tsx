import React, { useEffect, useContext } from "react";
import { Streamlit, RenderData } from "streamlit-component-lib";
import { useNullableRenderData } from "./useNullableRenderData";
import ErrorBoundary from "./ErrorBoundary";

const renderDataContext = React.createContext<RenderData | undefined>(
  undefined
);

/**
 * Returns `RenderData` received from Streamlit.
 */
export const useRenderData = (): RenderData => {
  const contextValue = useContext(renderDataContext);
  if (contextValue == null) {
    throw new Error(
      "useRenderData() must be used inside <StreamlitProvider />"
    );
  }

  return contextValue;
};

/**
 * Wrapper for React-hooks-based Streamlit components.
 *
 * Bootstraps the communication interface between Streamlit and the component.
 */
interface StreamlitProviderProps {
  children: React.ReactNode;
}
const StreamlitProvider: React.VFC<StreamlitProviderProps> = (props) => {
  const renderData = useNullableRenderData();

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
