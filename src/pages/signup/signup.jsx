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
              style={{ boxShadow: "none", backgroundColor: "#F4EEFF" }}
              type="text"
              placeholder="First Name"
              aria-label="FirstNameInput"
            />

            <input
              className="form-control border-0 border-bottom outline-0 mb-3"
              style={{ boxShadow: "none", backgroundColor: "#F4EEFF" }}
              type="text"
              placeholder="Last Name"
              aria-label="LastNameInput"
            />

            <input
              className="form-control border-0 border-bottom outline-0 mb-3"
              style={{ boxShadow: "none", backgroundColor: "#F4EEFF" }}
              type="email"
              placeholder="Email"
              aria-label="EmailInput"
            />

            <input
              className="form-control border-0 border-bottom outline-0 mb-3"
              style={{ boxShadow: "none", backgroundColor: "#F4EEFF" }}
              type="password"
              placeholder="Password"
              aria-label="PasswordInput"
            />

            <input
              className="form-control border-0 border-bottom outline-0 mb-3"
              style={{ boxShadow: "none", backgroundColor: "#F4EEFF" }}
              type="password"
              placeholder="Confirm Password"
              aria-label="ConfirmPasswordInput"
            />

            <div className="d-grid gap-2 mt-5">
              <button
                type="button"
                className="btn rounded-pill fw-bold text-white"
                style={{ backgroundColor: "#424874" }}
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
