import React, { useRef, useState } from 'react';

const App = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
  });

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleFocus = (ref) => {
    ref.current.focus();
  };

  const handleValidation = () => {
    return inputs.password.length >= 6;
  };

  return (
    <div>
      <h2>Dynamic Form Input Focus</h2>
      <input
        type="text"
        name="name"
        value={inputs.name}
        onChange={handleChange}
        ref={nameRef}
        onClick={() => handleFocus(nameRef)}
        placeholder="Name"
      />
      <br />
      <input
        type="email"
        name="email"
        value={inputs.email}
        onChange={handleChange}
        ref={emailRef}
        onClick={() => handleFocus(emailRef)}
        placeholder="Email"
      />
      <br />
      <input
        type="password"
        name="password"
        value={inputs.password}
        onChange={handleChange}
        ref={passwordRef}
        onClick={() => handleFocus(passwordRef)}
        placeholder="Password"
      />
      <br />
      <button onClick={() => handleValidation() ? alert('Form is valid!') : alert('Form is invalid!')}>
        Submit
      </button>
    </div>
  );
};

export default App;
