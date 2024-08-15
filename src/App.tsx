import React, { useState } from 'react';
import TldrawComponent from './TldrawComponent';
import TimelineComponent from './TimelineComponent';

const App: React.FC = () => {
  const [elementCount, setElementCount] = useState<number>(1);

  const handleGenerate = () => {
    const inputElement = document.getElementById("elementCount") as HTMLInputElement;
    const count = parseInt(inputElement.value, 10);
    if (!isNaN(count) && count > 0) {
      setElementCount(count);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>TLDraw Timeline Generator</h1>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="elementCount">Number of Timeline Elements:</label>
        <input
          type="number"
          id="elementCount"
          min="1"
          defaultValue="1"
          style={{ marginLeft: '10px' }}
        />
        <button onClick={handleGenerate} style={{ marginLeft: '10px' }}>
          Generate
        </button>
      </div>
      <TldrawComponent elementCount={elementCount} />
      <TimelineComponent elementCount={elementCount} />
    </div>
  );
};

export default App;
