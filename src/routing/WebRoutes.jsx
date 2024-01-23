import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/LoginPage/login";
import Signup from "../pages/SignupPage/signup";
import Dashboard from "../pages/DashboardPage/dashboard";

function WebRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default WebRoutes;
