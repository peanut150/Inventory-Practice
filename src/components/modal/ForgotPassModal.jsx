function ForgotPassModal() {
  return (
    <>
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
              />
            </div>
            <div className="modal-footer">
              <button
                className="btn text-white"
                style={{ backgroundColor: "#424874" }}
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
    </>
  );
}
export default ForgotPassModal;
