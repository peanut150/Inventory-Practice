import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/login";
import Signup from "../pages/signup/signup";
import Dashboard from "../pages/dashboard/dashboard";

function WebRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default WebRoutes;
