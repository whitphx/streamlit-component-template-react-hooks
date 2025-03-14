import { useState, useEffect } from "react";
import { Streamlit, RenderData } from "streamlit-component-lib";

/**
 * Returns `RenderData` received from Streamlit after the first render event received.
 */
export const useNullableRenderData = (): RenderData | undefined => {
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
        onRenderEvent,
      );
    };
    return cleanup;
  }, []);

  return renderData;
};
