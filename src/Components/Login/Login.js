import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginForm";
import LoginPasswordLost from "./LoginForm";
import LoginPasswordReset from "./LoginForm";

const Login = () => {
  return <div>
    <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="pedeu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
    </Routes>
  </div>;
};

export default Login;
