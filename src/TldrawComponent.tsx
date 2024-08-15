import React, { useEffect, useRef } from "react";
import { Tldraw, TldrawApp } from "@tldraw/tldraw";
import "tldraw/tldraw.css";

interface TldrawComponentProps {
  elementCount: number;
}

const TldrawComponent: React.FC<TldrawComponentProps> = ({ elementCount }) => {
  const editorRef = useRef<TldrawApp | null>(null);

  const handleMount = React.useCallback((editorInstance: TldrawApp) => {
    editorRef.current = editorInstance;
    editorInstance.on('ready', () => {
      const state = editorInstance.getState();
      const currentPage = state.pages[state.appState.currentPageId];

      if (currentPage && currentPage.shapes) {
        const shapeIds = Object.keys(currentPage.shapes);
        if (shapeIds.length > 0) {
          editorInstance.deleteShapes(shapeIds);
        }
      }

      const spacing = 200;
      const yPosition = 300;

      for (let i = 0; i < elementCount; i++) {
        const xPosition = spacing * i;

        editorInstance.createShapes([
          {
            id: editorInstance.getShapeUtil().createId(),
            type: "geo",
            props: {
              w: 100,
              h: 50,
              x: xPosition,
              y: yPosition,
              fill: "#007BFF",
              stroke: "#0056b3",
              strokeWidth: 2,
              geo: "rectangle",
            },
          },
          {
            id: editorInstance.getShapeUtil().createId(),
            type: "text",
            props: {
              x: xPosition,
              y: yPosition - 60,
              text: `Item ${i + 1}\nDetails`,
              fontSize: 14,
              fontWeight: i % 2 === 0 ? "bold" : "normal",
              color: "#333",
            },
          },
          {
            id: editorInstance.getShapeUtil().createId(),
            type: "geo",
            props: {
              x: xPosition - spacing,
              y: yPosition + 25,
              w: spacing,
              h: 2,
              stroke: "#007BFF",
              strokeWidth: 2,
              geo: "line",
            },
          },
        ]);
      }
    });
  }, [elementCount]);

  useEffect(() => {
    if (editorRef.current) {
      handleMount(editorRef.current);
    }
    return () => {
      if (editorRef.current) {
        editorRef.current.dispose();
      }
    };
  }, [handleMount]);

  return (
    <div style={{ position: "relative", width: "100%", height: "80vh" }}>
      <Tldraw onMount={handleMount} />
    </div>
  );
};

export default TldrawComponent;
