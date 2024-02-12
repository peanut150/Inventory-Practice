import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as Icon from "react-bootstrap-icons";

function Signup() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    // Check if any of the fields are empty
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }

    // Check if email is in a valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Check if the password is strong
    const isStrongPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!isStrongPassword.test(password)) {
      alert(
        "Please use a stronger password with at least 8 characters, including uppercase, lowercase, numbers, and special characters."
      );
      return;
    }

    // Your signup logic here, you can send a request to your server or perform any other necessary actions

    // Example: navigate to a different page after successful signup
    navigate("/dashboard");
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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            {/* Last Name Input Field */}
            <input
              className="form-control border-0 border-bottom outline-0 mb-3"
              style={{ backgroundColor: "#F4EEFF" }}
              type="text"
              placeholder="Last Name"
              aria-label="LastNameInput"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            {/* Email Input Field */}
            <input
              className="form-control border-0 border-bottom outline-0 mb-3"
              style={{ backgroundColor: "#F4EEFF" }}
              type="email"
              placeholder="Email"
              aria-label="EmailInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password Input Field */}
            <input
              className="form-control border-0 border-bottom outline-0 mb-3"
              style={{ backgroundColor: "#F4EEFF" }}
              type="password"
              placeholder="Password"
              aria-label="PasswordInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Confirm Password Input Field */}
            <input
              className="form-control border-0 border-bottom outline-0 mb-3"
              style={{ backgroundColor: "#F4EEFF" }}
              type="password"
              placeholder="Confirm Password"
              aria-label="ConfirmPasswordInput"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {/* Sign Up Button */}
            <div className="d-grid gap-2 mt-5">
              <button
                type="button"
                className="btn rounded-pill fw-bold text-white"
                style={{ backgroundColor: "#424874" }}
                onClick={handleSignUp}
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
