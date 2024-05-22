// src/components/LoginMessage.jsx

import React from "react";

function LoginMessage({ isLoggedIn }) {
  return <div>{isLoggedIn?"Hello User":"Please Login"}</div>;
}

export default LoginMessage;
