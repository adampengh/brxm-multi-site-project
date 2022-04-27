import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

function App() {
  const [color, setColor] = useState();
  const handleChange = color => {
    console.log('color', color);
    setColor(color);
  }

  return (
    <SketchPicker
      color={color}
      onChangeComplete={handleChange}
    />
  );
}

export default App;
