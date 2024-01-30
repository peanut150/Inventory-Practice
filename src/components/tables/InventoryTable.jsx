import * as Icon from "react-bootstrap-icons";

import Logo from "../../assets/logo.png";

function InventoryTable() {
  document.body.style.backgroundColor = "#F5F5F5";

  return (
    <div
      style={{
        backgroundColor: "#fff",
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
            className="btn btn-outline-secondary fw-semibold"
            style={{ width: "6em" }}
            type="submit"
          >
            <Icon.Funnel style={{ marginRight: "5px" }} />
            Filter
          </button>
        </form>
      </div>

      <div style={{ marginTop: "35px" }}>
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </th>
              <th scope="col">No</th>
              <th scope="col">Product</th>
              <th scope="col">Product ID</th>
              <th scope="col">Category</th>
              <th scope="col">Location</th>
              <th scope="col">Available</th>
              <th scope="col">Reserved</th>
              <th scope="col">On Hand</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="col">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </th>
              <th scope="row">01</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
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
                  <Icon.Trash color="#fff" style={{ marginBottom: "2px" }} />
                </button>
              </td>
            </tr>

            <tr>
              <th scope="col">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </th>
              <th scope="row">02</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
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
                  <Icon.Trash color="#fff" style={{ marginBottom: "2px" }} />
                </button>
              </td>
            </tr>

            <tr>
              <th scope="col">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </th>
              <th scope="row">03</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
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
                  <Icon.Trash color="#fff" style={{ marginBottom: "2px" }} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InventoryTable;
