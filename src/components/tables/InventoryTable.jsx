import * as Icon from "react-bootstrap-icons";

import Logo from "../../assets/logo.png";
import DeleteModal from "../modal/DeleteModal";

function InventoryTable() {
  return (
    <div
      style={{
        backgroundColor: "#DCD6F7",
        padding: "20px",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column", // Change to column direction
        justifyContent: "space-between", // Align items vertically with space between
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={Logo}
          alt="LogoInventory"
          style={{ height: "30px", width: "30px" }}
        />
        <p style={{ margin: "0", fontSize: "18px" }}>Inventory</p>

        <form
          className="d-flex"
          role="search"
          style={{ width: "100%", justifyContent: "flex-end" }}
        >
          <div className="input-group" style={{ width: "18em" }}>
            <span className="input-group-text">
              <Icon.Search />
            </span>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search anything here"
              aria-label="SearchInventory"
            />
          </div>

          <button
            className="btn fw-semibold"
            style={{ width: "6em", borderColor: "#424874" }}
            type="submit"
          >
            <Icon.Funnel style={{ marginRight: "5px", color: "#424874" }} />
            Filter
          </button>
        </form>
      </div>

      <div style={{ marginTop: "35px" }}>
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col" style={{ backgroundColor: "#DCD6F7" }}>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </th>
              <th scope="col" style={{ backgroundColor: "#DCD6F7" }}>
                No
              </th>
              <th scope="col" style={{ backgroundColor: "#DCD6F7" }}>
                Product
              </th>
              <th scope="col" style={{ backgroundColor: "#DCD6F7" }}>
                Product ID
              </th>
              <th scope="col" style={{ backgroundColor: "#DCD6F7" }}>
                Category
              </th>
              <th scope="col" style={{ backgroundColor: "#DCD6F7" }}>
                Location
              </th>
              <th scope="col" style={{ backgroundColor: "#DCD6F7" }}>
                Available
              </th>
              <th scope="col" style={{ backgroundColor: "#DCD6F7" }}>
                Reserved
              </th>
              <th scope="col" style={{ backgroundColor: "#DCD6F7" }}>
                On Hand
              </th>
              <th scope="col" style={{ backgroundColor: "#DCD6F7" }}>
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="col" style={{ backgroundColor: "#DCD6F7" }}>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </th>
              <th scope="row" style={{ backgroundColor: "#DCD6F7" }}>
                01
              </th>
              <td style={{ backgroundColor: "#DCD6F7" }}>
                Macbook Pro M1 2020
              </td>
              <td style={{ backgroundColor: "#DCD6F7" }}>#LWIL02012</td>
              <td style={{ backgroundColor: "#DCD6F7" }}>Laptop</td>
              <td style={{ backgroundColor: "#DCD6F7" }}>Warehouse 1</td>
              <td style={{ backgroundColor: "#DCD6F7" }}>120</td>
              <td style={{ backgroundColor: "#DCD6F7" }}>120</td>
              <td style={{ backgroundColor: "#DCD6F7" }}>100</td>
              <td style={{ backgroundColor: "#DCD6F7" }}>
                <button
                  style={{
                    marginRight: "5px",
                    backgroundColor: "#234F1E",
                    border: "none",
                    borderRadius: "5px",
                  }}
                >
                  <Icon.Eye color="#fff" style={{ marginBottom: "2px" }} />
                </button>

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
                  <Icon.Trash
                    color="#fff"
                    style={{ marginBottom: "2px" }}
                    data-bs-toggle="modal"
                    data-bs-target="#delete-modal"
                  />
                </button>
                <DeleteModal />
              </td>
            </tr>

            <tr>
              <th scope="col" style={{ backgroundColor: "#DCD6F7" }}>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </th>
              <th scope="row" style={{ backgroundColor: "#DCD6F7" }}>
                02
              </th>
              <td style={{ backgroundColor: "#DCD6F7" }}>
                Mechanical Keyboard
              </td>
              <td style={{ backgroundColor: "#DCD6F7" }}>#LWIL02013</td>
              <td style={{ backgroundColor: "#DCD6F7" }}>Accessories</td>
              <td style={{ backgroundColor: "#DCD6F7" }}>Warehouse 2</td>
              <td style={{ backgroundColor: "#DCD6F7" }}>230</td>
              <td style={{ backgroundColor: "#DCD6F7" }}>230</td>
              <td style={{ backgroundColor: "#DCD6F7" }}>205</td>
              <td style={{ backgroundColor: "#DCD6F7" }}>
                <button
                  style={{
                    marginRight: "5px",
                    backgroundColor: "#234F1E",
                    border: "none",
                    borderRadius: "5px",
                  }}
                >
                  <Icon.Eye color="#fff" style={{ marginBottom: "2px" }} />
                </button>

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
                  <Icon.Trash
                    color="#fff"
                    style={{ marginBottom: "2px" }}
                    data-bs-toggle="modal"
                    data-bs-target="#delete-modal"
                  />
                </button>
                <DeleteModal />
              </td>
            </tr>

            <tr>
              <th scope="col" style={{ backgroundColor: "#DCD6F7" }}>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </th>
              <th scope="row" style={{ backgroundColor: "#DCD6F7" }}>
                03
              </th>
              <td style={{ backgroundColor: "#DCD6F7" }}>Wired Mouse</td>
              <td style={{ backgroundColor: "#DCD6F7" }}>#LWIL02014</td>
              <td style={{ backgroundColor: "#DCD6F7" }}>Accessories</td>
              <td style={{ backgroundColor: "#DCD6F7" }}>Warehouse 3</td>
              <td style={{ backgroundColor: "#DCD6F7" }}>1,230</td>
              <td style={{ backgroundColor: "#DCD6F7" }}>1,230</td>
              <td style={{ backgroundColor: "#DCD6F7" }}>1,130</td>
              <td style={{ backgroundColor: "#DCD6F7" }}>
                <button
                  style={{
                    marginRight: "5px",
                    backgroundColor: "#234F1E",
                    border: "none",
                    borderRadius: "5px",
                  }}
                >
                  <Icon.Eye color="#fff" style={{ marginBottom: "2px" }} />
                </button>

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
                  <Icon.Trash
                    color="#fff"
                    style={{ marginBottom: "2px" }}
                    data-bs-toggle="modal"
                    data-bs-target="#delete-modal"
                  />
                </button>
                <DeleteModal />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InventoryTable;
