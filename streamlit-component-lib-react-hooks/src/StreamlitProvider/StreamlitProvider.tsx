import React, { useEffect } from "react";
import { Streamlit } from "streamlit-component-lib";
import { useNullableRenderData } from "../useNullableRenderData";
import ErrorBoundary from "../ErrorBoundary";
import { renderDataContext } from "./useRenderData";

/**
 * Wrapper for React-hooks-based Streamlit components.
 *
 * Bootstraps the communication interface between Streamlit and the component.
 */
export interface StreamlitProviderProps {
  children: React.ReactNode;
}
export function StreamlitProvider(props: StreamlitProviderProps) {
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
}
