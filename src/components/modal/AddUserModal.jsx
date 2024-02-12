function AddUserModal() {
  return (
    <div
      class="modal fade"
      tabindex="-1"
      id="adduser-modal"
      aria-labelledby="modal-title"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content" style={{ backgroundColor: "#F4EEFF" }}>
          <div class="modal-header">
            <h5 class="modal-title fw-bold" id="modal-title">
              Add User
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body">
            <p>Input user details:</p>

            {/* Email Input Field */}
            <label for="modal-email" className="form-label fw-semibold">
              Email:
            </label>
            <input type="email" className="form-control" id="modal-email" />

            {/* First Name Input Field */}
            <label for="modal-firstname" className="form-label fw-semibold">
              First Name:
            </label>
            <input type="name" className="form-control" id="modal-firstname" />

            {/* Last Name Input Field */}
            <label for="modal-lastname" className="form-label fw-semibold">
              Last Name:
            </label>
            <input type="name" className="form-control" id="modal-lastname" />

            {/* Assigned Regions Input Field */}
            <label for="modal-assignregions" className="form-label fw-semibold">
              Assigned Regions:
            </label>
            <select class="form-select" aria-label="modal-assignregions">
              <option selected>Select Region</option>
              <option value="1">Region I</option>
              <option value="2">Region II</option>
              <option value="3">Region III</option>
              <option value="4">Region IV</option>
              <option value="5">Region V</option>
            </select>

            {/* Date Created Input Field */}
            <label for="modal-datecreated" className="form-label fw-semibold">
              Date Created:
            </label>
            <input
              type="date"
              className="form-control"
              id="modal-datecreated"
            />

            {/* Account Type Input Field */}
            <label for="modal-acctType" className="form-label fw-semibold">
              Account Type:
            </label>
            <select class="form-select" aria-label="modal-acctType">
              <option selected>Select Type</option>
              <option value="1">Admin</option>
              <option value="2">Group Lead</option>
              <option value="3">User</option>
            </select>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn text-white"
              style={{ backgroundColor: "#424874" }}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddUserModal;
