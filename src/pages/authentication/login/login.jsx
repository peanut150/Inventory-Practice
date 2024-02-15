import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ProfileImg from "../../../assets/profile.jpg";
import ForgotPassModal from "../../../components/modal/ForgotPassModal";

function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState("");

  // Email Validation Logic
  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Event Handlers
  const handleEmailChange = (event) => {
    const email = event.target.value;
    let d = data;
    setData({ ...d, email });
    setEmailError(
      isEmailValid(email) ? "" : "Please enter a valid email address"
    );
  };

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
            {/* Logo */}
            <img
              src={ProfileImg}
              className="img-fluid rounded-circle"
              alt="LogoLogin"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div style={{ width: "300px", textAlign: "left" }}>
            {/* Email Input Field */}
            <input
              className={`form-control border-0 border-bottom outline-0 mb-3 ${
                emailError ? "is-invalid" : ""
              }`}
              style={{ backgroundColor: "#F4EEFF" }}
              type="email"
              placeholder="Email"
              aria-label="EmailInput"
              onChange={handleEmailChange}
            />
            {emailError && <div className="invalid-feedback">{emailError}</div>}

            {/* Password Input Field */}
            <input
              className="form-control border-0 border-bottom mb-3"
              style={{ backgroundColor: "#F4EEFF" }}
              type="password"
              placeholder="Password"
              aria-label="PasswordInput"
              onChange={(event) => {
                let d = data;
                setData({ ...d, password: event.target.value });
              }}
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

            {/* Login Button */}
            <div className="d-grid gap-2 mt-4">
              <button
                type="button"
                className="btn rounded-pill fw-bold text-white"
                style={{ backgroundColor: "#424874" }}
                onClick={() => {
                  if (!emailError) {
                    // Proceed with signup logic
                    navigate("dashboard");
                  }
                }}
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
