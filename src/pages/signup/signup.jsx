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
              className="form-control border-0 border-bottom outline-0 mb-3"
              style={{ backgroundColor: "#F4EEFF" }}
              type="email"
              placeholder="Email"
              aria-label="EmailInput"
              onChange={(event) => {
                let d = data;
                setData({ ...d, email: event.target.value });
              }}
            />

            {/* Password Input Field */}
            <input
              className="form-control border-0 border-bottom outline-0 mb-3"
              style={{ backgroundColor: "#F4EEFF" }}
              type="password"
              placeholder="Password"
              aria-label="PasswordInput"
              onChange={(event) => {
                let d = data;
                setData({ ...d, password: event.target.value });
              }}
            />

            {/* Confirm Password Input Field */}
            <input
              className="form-control border-0 border-bottom outline-0 mb-3"
              style={{ backgroundColor: "#F4EEFF" }}
              type="password"
              placeholder="Confirm Password"
              aria-label="ConfirmPasswordInput"
              onChange={(event) => {
                let d = data;
                setData({ ...d, confirmPassword: event.target.value });
              }}
            />

            {/* Sign Up Button */}
            <div className="d-grid gap-2 mt-5">
              <button
                type="button"
                className="btn rounded-pill fw-bold text-white"
                style={{ backgroundColor: "#424874" }}
                onClick={() => {
                  console.log(data);
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
