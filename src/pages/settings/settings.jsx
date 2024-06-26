import Offcanvas from "../../components/navbar/OffcanvasNav";

function Settings() {
  return (
    <div className="container-fluid p-5 mt-4">
      <Offcanvas />

      <div>
        <h1>Profile</h1>
        <p style={{ color: "#424874" }}>Dashboard / Settings</p>
      </div>

      {/* Form Input */}
      <div className="mt-4">
        <div class="mb-3" style={{ width: "30rem" }}>
          <label htmlFor="NameInput" class="form-label fw-bold">
            NAME
          </label>
          <input type="text" class="form-control" id="NameInput" />
        </div>

        <div class="mb-3" style={{ width: "30rem" }}>
          <label htmlFor="EmailInput" class="form-label fw-bold">
            EMAIL
          </label>
          <input type="text" class="form-control" id="EmailInput" />
        </div>

        <div class="mb-3" style={{ width: "30rem" }}>
          <label htmlFor="PasswordInput" class="form-label fw-bold">
            PASSWORD
          </label>
          <input type="password" class="form-control" id="PasswordInput" />
        </div>

        <div className="mt-4">
          <button
            type="button"
            class="btn fw-semibold text-white"
            style={{ backgroundColor: "#424874" }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
