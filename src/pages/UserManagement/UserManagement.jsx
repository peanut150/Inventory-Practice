import * as Icon from "react-bootstrap-icons";

import OffcanvasNav from "../../components/navbar/OffcanvasNav";

function UserManagement() {
  document.body.style.backgroundColor = "#F5F5F5";

  return (
    <div class="container-fluid p-5 mt-4">
      <OffcanvasNav />

      <div className="d-flex justify-content-between align-items-center mb-1">
        <div>
          <h1>User's List</h1>
          <p class="text-muted">Dashboard / User Management</p>
        </div>

        <div>
          <button
            type="button"
            class="btn ms-3 border-0"
            style={{ color: "white", backgroundColor: "#6A5ACD" }}
          >
            <Icon.Plus className="me-2" style={{ color: "white" }} />
            Add New User
          </button>
        </div>
      </div>

      {/* Search Row */}
      <div className="row">
        <div className="col-12">
          <div className="card border-0">
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
                  style={{ color: "white", backgroundColor: "#6A5ACD" }}
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
            <th scope="col">Email</th>
            <th scope="col">Name</th>
            <th scope="col">Assigned Regions</th>
            <th scope="col">Date Created</th>
            <th scope="col">Account Type</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td scope="row">deanna.curtis@example.com</td>
            <td>Jenny Wilson</td>
            <td>Region X</td>
            <td>25.12.2001</td>
            <td>Admin</td>
            <td>
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
            <td>
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
              >
                <Icon.Trash color="#fff" style={{ marginBottom: "2px" }} />
              </button>
            </td>
          </tr>

          <tr>
            <td scope="row">tanya.hill@example.com</td>
            <td>Jerome Bell</td>
            <td>Region II</td>
            <td>12.01.2001</td>
            <td>User</td>
            <td>
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
            <td>
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
              >
                <Icon.Trash color="#fff" style={{ marginBottom: "2px" }} />
              </button>
            </td>
          </tr>

          <tr>
            <td scope="row">jessica.hanson@example.com</td>
            <td>Eleanor Pena</td>
            <td>Region V</td>
            <td>21.07.2001</td>
            <td>Group Lead</td>
            <td>
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
            <td>
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
              >
                <Icon.Trash color="#fff" style={{ marginBottom: "2px" }} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;
