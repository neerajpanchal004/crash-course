import React, { useRef, useEffect } from 'react';

const App = () => {
  const focusableInputRef = useRef(null);
  const uncontrolledInputRef = useRef(null);
  const colorChangeDivRef = useRef(null);

  useEffect(() => {
    focusableInputRef.current.focus();
  }, []);

  const handleUncontrolledInputChange = () => {
    console.log(uncontrolledInputRef.current.value);
  };

  const handleColorChangeClick = () => {
    colorChangeDivRef.current.style.backgroundColor = 'lightblue';
  };

  return (
    <div>
      <h2>Focusable Input Field</h2>
      <input ref={focusableInputRef} />

      <h2>Uncontrolled Input Field</h2>
      <input ref={uncontrolledInputRef} type="text" onChange={handleUncontrolledInputChange} />

      <h2>Change Color on Click</h2>
      <div
        ref={colorChangeDivRef}
        style={{ width: '200px', height: '200px', backgroundColor: 'lightgray', cursor: 'pointer' }}
        onClick={handleColorChangeClick}
      >
        Click me to change color
      </div>
    </div>
  );
};

export default App;
