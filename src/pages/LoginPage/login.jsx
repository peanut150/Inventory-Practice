import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../../assets/logo.jpg";

function Login() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
          <p className="fs-3 fw-bolder mb-5">Welcome</p>

          <div
            style={{
              width: "100px",
              height: "100px",
              margin: "0 auto",
              marginBottom: "50px",
            }}
          >
            <img
              src={Logo}
              className="img-fluid rounded-circle"
              alt="LogoLogin"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div style={{ width: "300px", textAlign: "left" }}>
            <input
              className="form-control border-0 border-bottom outline-0 mb-3"
              type="email"
              placeholder="Email"
              aria-label="EmailInput"
              style={{ boxShadow: "none" }}
            />

            <input
              className="form-control border-0 border-bottom outline-0 mb-3"
              type="password"
              placeholder="Password"
              aria-label="PasswordInput"
              style={{ boxShadow: "none" }}
            />

            <p style={{ fontSize: "14px", marginBottom: "0" }}>
              Forgot{" "}
              <a
                className="link-offset-2 link-underline link-underline-opacity-0"
                href="#"
              >
                Password
              </a>{" "}
              ?
            </p>
            <p style={{ fontSize: "14px" }}>
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="link-offset-2 link-underline link-underline-opacity-0"
              >
                Sign up
              </Link>
            </p>

            <div className="d-grid gap-2 mt-4">
              <button
                type="button"
                className="btn rounded-pill fw-semibold"
                style={{ backgroundColor: "#71C562", color: "#fff" }}
                onClick={() => navigate("dashboard")}
              >
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
