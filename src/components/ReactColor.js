import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

function ReactColor() {
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
  };

  const handleClose = () => {
    setDisplay(false);
  };

  return (
    <div>
      <button onClick={handleClick}>Pick color</button>
      {display ? (
        <div style={{}}>
          <div style={{}} onClick={handleClose} />
          <ChromePicker />
        </div>
      ) : null}
    </div>
  );
}

export default ReactColor;
