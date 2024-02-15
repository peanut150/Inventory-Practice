import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as Icon from "react-bootstrap-icons";

function Signup() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstname: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState("");
  const [passwordStrengthError, setPasswordStrengthError] = useState("");

  const [touchedFields, setTouchedFields] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  // Email Validation Logic
  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Password Strength Validation Logic
  const isStrongPassword = (password) => {
    // Add Password Strength Criteria
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

    return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumber &&
      hasSpecialChar
    );
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

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    let d = data;
    setData({ ...d, password });
    setPasswordStrengthError(
      isStrongPassword(password)
        ? ""
        : "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
    );
    if (touchedFields.confirmPassword) {
      setPasswordMatchError(
        password === data.confirmPassword ? "" : "Passwords do not match"
      );
    }
  };

  const handleConfirmPasswordChange = (event) => {
    const confirmPassword = event.target.value;
    let d = data;
    setData({ ...d, confirmPassword });
    setTouchedFields({ ...touchedFields, confirmPassword: true });

    setPasswordMatchError(
      data.password === confirmPassword ? "" : "Passwords do not match"
    );
  };

  return (
    <>
      <div className="container d-flex align-items-center justify-content-center vh-100">
        <Icon.ArrowLeftCircle
          onClick={() => navigate(-1)}
          style={{
            cursor: "pointer",
            marginRight: "30",
            marginBottom: "460px",
            fontSize: "2rem",
          }}
        />

        <div className="text-center">
          <p className="fs-3 fw-bolder mb-5">Create Account</p>

          <div style={{ width: "300px", textAlign: "left" }}>
            {/* First Name Input Field */}
            <input
              className="form-control border-0 border-bottom outline-0 mb-3"
              style={{ backgroundColor: "#F4EEFF" }}
              type="text"
              placeholder="First Name"
              aria-label="FirstNameInput"
              onChange={(event) => {
                let d = data;
                setData({ ...d, firstname: event.target.value });
              }}
            />

            {/* Last Name Input Field */}
            <input
              className="form-control border-0 border-bottom outline-0 mb-3"
              style={{ backgroundColor: "#F4EEFF" }}
              type="text"
              placeholder="Last Name"
              aria-label="LastNameInput"
              onChange={(event) => {
                let d = data;
                setData({ ...d, lastName: event.target.value });
              }}
            />

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
              className={`form-control border-0 border-bottom outline-0 mb-3 ${
                passwordStrengthError ? "is-invalid" : ""
              }`}
              style={{ backgroundColor: "#F4EEFF" }}
              type="password"
              placeholder="Password"
              aria-label="PasswordInput"
              onChange={handlePasswordChange}
            />
            {passwordStrengthError && (
              <div className="invalid-feedback">{passwordStrengthError}</div>
            )}

            {/* Confirm Password Input Field */}
            <input
              className={`form-control border-0 border-bottom outline-0 mb-3 ${
                passwordMatchError ? "is-invalid" : ""
              }`}
              style={{ backgroundColor: "#F4EEFF" }}
              type="password"
              placeholder="Confirm Password"
              aria-label="ConfirmPasswordInput"
              onChange={handleConfirmPasswordChange}
            />
            {passwordMatchError && (
              <div className="invalid-feedback">{passwordMatchError}</div>
            )}

            {/* Sign Up Button */}
            <div className="d-grid gap-2 mt-5">
              <button
                type="button"
                className="btn rounded-pill fw-bold text-white"
                style={{ backgroundColor: "#424874" }}
                onClick={() => {
                  if (
                    !emailError &&
                    !passwordMatchError &&
                    !passwordStrengthError
                  ) {
                    // Proceed with signup logic
                    console.log(data);
                  }
                }}
              >
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
