import React from "react";
import { Link, useNavigate } from "react-router-dom";

import ProfileImg from "../../assets/profile.jpg";
import ForgotPassModal from "../../components/modal/ForgotPassModal";

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
              src={ProfileImg}
              className="img-fluid rounded-circle"
              alt="LogoLogin"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div style={{ width: "300px", textAlign: "left" }}>
            <input
              className="form-control border-0 border-bottom mb-3"
              style={{ boxShadow: "none", backgroundColor: "#F4EEFF" }}
              type="email"
              placeholder="Email"
              aria-label="EmailInput"
            />

            <input
              className="form-control border-0 border-bottom mb-3"
              style={{ boxShadow: "none", backgroundColor: "#F4EEFF" }}
              type="password"
              placeholder="Password"
              aria-label="PasswordInput"
            />

            {/* Forgot Password Link */}
            <p style={{ fontSize: "14px", marginBottom: "0" }}>
              Forgot{" "}
              <Link
                className="link-offset-2 link-underline link-underline-opacity-0 fw-semibold"
                style={{ color: "#424874" }}
                data-bs-toggle="modal"
                data-bs-target="#forgotpass-modal"
              >
                Password
              </Link>{" "}
              ?
            </p>

            {/* Forgot Password Modal */}
            <ForgotPassModal />

            {/* Sign Up Link */}
            <p style={{ fontSize: "14px" }}>
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="link-offset-2 link-underline link-underline-opacity-0 fw-semibold"
                style={{ color: "#424874" }}
              >
                Sign up
              </Link>
            </p>

            <div className="d-grid gap-2 mt-4">
              <button
                type="button"
                className="btn rounded-pill fw-bold text-white"
                style={{ backgroundColor: "#424874" }}
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
