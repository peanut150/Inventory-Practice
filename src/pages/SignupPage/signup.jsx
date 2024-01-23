import { useNavigate } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

function Signup() {
  const navigate = useNavigate();

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
            <input
              className="form-control border-0 border-bottom outline-0 mb-3"
              type="text"
              placeholder="First Name"
              aria-label="FirstNameInput"
              style={{ boxShadow: "none" }}
            />

            <input
              className="form-control border-0 border-bottom outline-0 mb-3"
              type="text"
              placeholder="Last Name"
              aria-label="LastNameInput"
              style={{ boxShadow: "none" }}
            />

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

            <input
              className="form-control border-0 border-bottom outline-0 mb-3"
              type="password"
              placeholder="Confirm Password"
              aria-label="ConfirmPasswordInput"
              style={{ boxShadow: "none" }}
            />

            <div className="d-grid gap-2 mt-5">
              <button
                type="button"
                className="btn rounded-pill fw-semibold"
                style={{ backgroundColor: "#71C562", color: "#fff" }}
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
