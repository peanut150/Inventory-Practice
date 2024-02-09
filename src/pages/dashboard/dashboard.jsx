import * as Icon from "react-bootstrap-icons";

import OffcanvasNav from "../../components/navbar/OffcanvasNav";

function Dashboard() {
  document.body.style.backgroundColor = "#F5F5F5";

  return (
    <div class="container-fluid" style={{ paddingTop: "5rem" }}>
      <OffcanvasNav />
      <div>
        <h1>Dashboard</h1>
        <p class="text-muted">Dashboard /</p>
      </div>

      {/* 1st Row */}
      <div class="row">
        {/* Total Products Card */}
        <div class="col-2">
          <div class="card border-0">
            <div class="card-body p-3 d-flex align-items-center">
              {/* Icon */}
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#CEFAD0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "15px",
                }}
              >
                <Icon.BoxSeam size={18} />
              </div>

              {/* Text */}
              <div>
                <p class="card-title fw-semibold mt-2">
                  Total Products
                  <Icon.ArrowUpRight
                    class="ms-4"
                    style={{ cursor: "pointer" }}
                  />
                </p>
                <p class="display-6 fw-bold mt-2">9</p>
              </div>
            </div>
          </div>
        </div>

        {/* Low Stock Card */}
        <div class="col-2">
          <div class="card border-0">
            <div class="card-body p-3 d-flex align-items-center">
              {/* Icon */}
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#CEFAD0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "15px",
                }}
              >
                <Icon.BoxSeam size={18} />
              </div>

              {/* Text */}
              <div>
                <p class="card-title fw-semibold mt-2">
                  Low Stock
                  <Icon.ArrowUpRight
                    class="ms-5"
                    style={{ cursor: "pointer" }}
                  />
                </p>
                <p class="display-6 fw-bold mt-2 text-warning">4</p>
              </div>
            </div>
          </div>
        </div>

        {/* Out of Stock Card */}
        <div class="col-2">
          <div class="card border-0">
            <div class="card-body p-3 d-flex align-items-center">
              {/* Icon */}
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#CEFAD0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "15px",
                }}
              >
                <Icon.BoxSeam size={18} />
              </div>

              {/* Text */}
              <div>
                <p class="card-title fw-semibold mt-2">
                  Out of Stock
                  <Icon.ArrowUpRight
                    class="ms-5"
                    style={{ cursor: "pointer" }}
                  />
                </p>
                <p class="display-6 fw-bold mt-2 text-danger">1</p>
              </div>
            </div>
          </div>
        </div>

        {/* Suppliers Card */}
        <div class="col-2">
          <div class="card border-0">
            <div class="card-body p-3 d-flex align-items-center">
              {/* Icon */}
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#CEFAD0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "15px",
                }}
              >
                <Icon.BoxSeam size={18} />
              </div>

              {/* Text */}
              <div>
                <p class="card-title fw-semibold mt-2">
                  Suppliers
                  <Icon.ArrowUpRight
                    class="ms-5"
                    style={{ cursor: "pointer" }}
                  />
                </p>
                <p class="display-6 fw-bold mt-2">5</p>
              </div>
            </div>
          </div>
        </div>

        {/* Zero Stock Card */}
        <div class="col-2">
          <div class="card border-0">
            <div class="card-body p-3 d-flex align-items-center">
              {/* Icon */}
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#CEFAD0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "15px",
                }}
              >
                <Icon.BoxSeam size={18} />
              </div>

              {/* Text */}
              <div>
                <p class="card-title fw-semibold mt-2">
                  Zero Stock
                  <Icon.ArrowUpRight
                    class="ms-5"
                    style={{ cursor: "pointer" }}
                  />
                </p>
                <p class="display-6 fw-bold mt-2 text-danger">4</p>
              </div>
            </div>
          </div>
        </div>

        {/* Most Stock Card */}
        <div class="col-2">
          <div class="card border-0">
            <div class="card-body p-3 d-flex align-items-center">
              {/* Icon */}
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#CEFAD0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "15px",
                }}
              >
                <Icon.BoxSeam size={18} />
              </div>

              {/* Text */}
              <div>
                <p class="card-title fw-semibold mt-2">
                  Most Stock
                  <Icon.ArrowUpRight
                    class="ms-5"
                    style={{ cursor: "pointer" }}
                  />
                </p>
                <p class="display-6 fw-bold mt-2 text-success">4</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd Row */}
      <div class="row mt-4">
        <div class="col-2">
          <div class="card border-0">
            <div class="card-body p-3">
              <p class="card-title fw-semibold mt-3">Value of Stock</p>
              <p class="display-6 fw-bold mt-3">$ 3186</p>
              <hr class="mt-5" style={{ borderTop: "1px solid #000000" }} />
              <p className="mt-5">Stock Purchases</p>
              <p class="fw-bold mt-4">
                Unfulfilled &nbsp;&nbsp;4{" "}
                <Icon.ArrowUpRight class="ms-5" style={{ cursor: "pointer" }} />
              </p>
              <p class="fw-bold">
                Received &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1{" "}
                <Icon.ArrowUpRight class="ms-5" style={{ cursor: "pointer" }} />
              </p>
            </div>
          </div>
        </div>

        <div className="col-2">
          <div className="d-flex align-items-center">
            <Icon.FunnelFill className="me-2" />
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose Product</option>
              <option value="1">Sandal Shoes</option>
              <option value="2">Women Sport Shoes</option>
              <option value="3">Unisex Loafers</option>
              <option value="4">Green Sports Shoes</option>
              <option value="5">Adidas Sports</option>
              <option value="6">Nike Air Force 1</option>
              <option value="7">Brush Heads</option>
              <option value="8">Measuring Spoons</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
