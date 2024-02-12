import * as Icon from "react-bootstrap-icons";

import OffcanvasNav from "../../components/navbar/OffcanvasNav";
import DeleteModal from "../../components/modal/DeleteModal";
import AddUserModal from "../../components/modal/AddUserModal";

function UserManagement() {
  return (
    <div class="container-fluid p-5 mt-4">
      <OffcanvasNav />

      <div className="d-flex justify-content-between align-items-center mb-1">
        <div>
          <h1>User's List</h1>
          <p style={{ color: "#424874" }}>Dashboard / User Management</p>
        </div>

        <div>
          <button
            type="button"
            class="btn ms-3 border-0"
            style={{ color: "white", backgroundColor: "#424874" }}
            data-bs-toggle="modal"
            data-bs-target="#adduser-modal"
          >
            <Icon.Plus className="me-2" style={{ color: "white" }} />
            Add New User
          </button>
          <AddUserModal />
        </div>
      </div>

      {/* Search Row */}
      <div className="row">
        <div className="col-12">
          <div className="card border-0" style={{ backgroundColor: "#DCD6F7" }}>
            <div className="card-body">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-3"
                  type="search"
                  placeholder="Search email, name..."
                  aria-label="Search"
                />

                <select
                  class="form-select me-3"
                  style={{ width: "25rem" }}
                  aria-label="Account Type Select"
                >
                  <option selected>Account Type</option>
                  <option value="1">Admin</option>
                  <option value="2">Group Lead</option>
                  <option value="3">User</option>
                </select>

                <button
                  className="btn"
                  style={{ color: "white", backgroundColor: "#424874" }}
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <table class="table table-borderless mt-4">
        <thead>
          <tr>
            <th scope="col" style={{ backgroundColor: "#DCD6F7" }}>
              Email
            </th>
            <th scope="col" style={{ backgroundColor: "#DCD6F7" }}>
              Name
            </th>
            <th scope="col" style={{ backgroundColor: "#DCD6F7" }}>
              Assigned Regions
            </th>
            <th scope="col" style={{ backgroundColor: "#DCD6F7" }}>
              Date Created
            </th>
            <th scope="col" style={{ backgroundColor: "#DCD6F7" }}>
              Account Type
            </th>
            <th scope="col" style={{ backgroundColor: "#DCD6F7" }}>
              Status
            </th>
            <th scope="col" style={{ backgroundColor: "#DCD6F7" }}>
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td scope="row" style={{ backgroundColor: "#DCD6F7" }}>
              deanna.curtis@example.com
            </td>
            <td style={{ backgroundColor: "#DCD6F7" }}>Jenny Wilson</td>
            <td style={{ backgroundColor: "#DCD6F7" }}>Region X</td>
            <td style={{ backgroundColor: "#DCD6F7" }}>25.12.2001</td>
            <td style={{ backgroundColor: "#DCD6F7" }}>Admin</td>
            <td style={{ backgroundColor: "#DCD6F7" }}>
              <Icon.CircleFill
                style={{
                  color: "#00AB41",
                  width: "10px",
                  height: "10px",
                  marginRight: "10px",
                }}
              />
              Activated
            </td>
            <td style={{ backgroundColor: "#DCD6F7" }}>
              <button
                style={{
                  marginRight: "5px",
                  backgroundColor: "#73C2FB",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                <Icon.Pen color="#fff" style={{ marginBottom: "2px" }} />
              </button>

              <button
                style={{
                  backgroundColor: "#D0312D",
                  border: "none",
                  borderRadius: "5px",
                }}
                data-bs-toggle="modal"
                data-bs-target="#delete-modal"
              >
                <Icon.Trash color="#fff" style={{ marginBottom: "2px" }} />
              </button>
              <DeleteModal />
            </td>
          </tr>

          <tr>
            <td scope="row" style={{ backgroundColor: "#DCD6F7" }}>
              tanya.hill@example.com
            </td>
            <td style={{ backgroundColor: "#DCD6F7" }}>Jerome Bell</td>
            <td style={{ backgroundColor: "#DCD6F7" }}>Region II</td>
            <td style={{ backgroundColor: "#DCD6F7" }}>12.01.2001</td>
            <td style={{ backgroundColor: "#DCD6F7" }}>User</td>
            <td style={{ backgroundColor: "#DCD6F7" }}>
              <Icon.CircleFill
                style={{
                  color: "gray",
                  width: "10px",
                  height: "10px",
                  marginRight: "10px",
                }}
              />
              Deactivated
            </td>
            <td style={{ backgroundColor: "#DCD6F7" }}>
              <button
                style={{
                  marginRight: "5px",
                  backgroundColor: "#73C2FB",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                <Icon.Pen color="#fff" style={{ marginBottom: "2px" }} />
              </button>

              <button
                style={{
                  backgroundColor: "#D0312D",
                  border: "none",
                  borderRadius: "5px",
                }}
                data-bs-toggle="modal"
                data-bs-target="#delete-modal"
              >
                <Icon.Trash color="#fff" style={{ marginBottom: "2px" }} />
              </button>
              <DeleteModal />
            </td>
          </tr>

          <tr>
            <td scope="row" style={{ backgroundColor: "#DCD6F7" }}>
              jessica.hanson@example.com
            </td>
            <td style={{ backgroundColor: "#DCD6F7" }}>Eleanor Pena</td>
            <td style={{ backgroundColor: "#DCD6F7" }}>Region V</td>
            <td style={{ backgroundColor: "#DCD6F7" }}>21.07.2001</td>
            <td style={{ backgroundColor: "#DCD6F7" }}>Group Lead</td>
            <td style={{ backgroundColor: "#DCD6F7" }}>
              <Icon.CircleFill
                style={{
                  color: "#00AB41",
                  width: "10px",
                  height: "10px",
                  marginRight: "10px",
                }}
              />
              Activated
            </td>
            <td style={{ backgroundColor: "#DCD6F7" }}>
              <button
                style={{
                  marginRight: "5px",
                  backgroundColor: "#73C2FB",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                <Icon.Pen color="#fff" style={{ marginBottom: "2px" }} />
              </button>

              <button
                style={{
                  backgroundColor: "#D0312D",
                  border: "none",
                  borderRadius: "5px",
                }}
                data-bs-toggle="modal"
                data-bs-target="#delete-modal"
              >
                <Icon.Trash color="#fff" style={{ marginBottom: "2px" }} />
              </button>
              <DeleteModal />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;
