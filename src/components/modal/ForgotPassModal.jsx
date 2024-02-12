import { useState } from "react";

function ForgotPassModal() {
  const [email, setEmail] = useState("");

  const handleResetPass = () => {
    // Check if email field is empty
    if (!email) {
      alert("Please fill in email field");
      return;
    }

    // Check if email is in a valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Your signup logic here, you can send a request to your server or perform any other necessary actions

    // Example: navigate to a different page after successful input
    navigate("/dashboard");
  };

  return (
    <div
      className="modal fade"
      id="forgotpass-modal"
      tabIndex="-1"
      aria-labelledby="modal-title"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content" style={{ backgroundColor: "#F4EEFF" }}>
          <div className="modal-header">
            <h5 className="modal-title fw-bold" id="modal-title">
              Forgot your password?
            </h5>
          </div>
          <div className="modal-body">
            <p>We'll email you a link to reset your password.</p>
            <label for="modal-email" className="form-label fw-semibold">
              Your email address:
            </label>
            <input
              type="email"
              className="form-control"
              id="modal-email"
              placeholder="e.g. mario@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="modal-footer">
            <button
              className="btn text-white"
              style={{ backgroundColor: "#424874" }}
              onClick={handleResetPass}
            >
              Send me a password reset link
            </button>

            <button
              className="btn text-white"
              style={{ backgroundColor: "#424874" }}
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ForgotPassModal;
