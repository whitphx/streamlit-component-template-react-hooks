import React, { useState, useEffect } from "react";
import { Streamlit, RenderData } from "streamlit-component-lib";

/**
 * Returns `RenderData` received from Streamlit.
 */
export const useStreamlit = (): RenderData | undefined => {
  const [renderData, setRenderData] = useState<RenderData>();

  useEffect(() => {
    const onRenderEvent = (event: Event): void => {
      const renderEvent = event as CustomEvent<RenderData>;
      setRenderData(renderEvent.detail);
    };

    // Set up event listeners, and signal to Streamlit that we're ready.
    // We won't render the component until we receive the first RENDER_EVENT.
    Streamlit.events.addEventListener(Streamlit.RENDER_EVENT, onRenderEvent);
    Streamlit.setComponentReady();

    const cleanup = () => {
      Streamlit.events.removeEventListener(
        Streamlit.RENDER_EVENT,
        onRenderEvent
      );
    };
    return cleanup;
  }, []);

  useEffect(() => {
    Streamlit.setFrameHeight();
  });

  return renderData;
};

interface ErrorBoundaryProps {
  children: React.ReactNode;
}
interface ErrorBoundaryState {
  error: Error | undefined;
}

/**
 * Shows errors thrown from child components.
 */
export class ErrorBoundary extends React.PureComponent<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: undefined };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { error };
  }

  render() {
    if (this.state.error != null) {
      <div>
        <h1>Component Error</h1>
        <span>{this.state.error.message}</span>
      </div>;
    }

    return this.props.children;
  }
}
