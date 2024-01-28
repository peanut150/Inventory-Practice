import * as Icon from "react-bootstrap-icons";

import Logo from "../../assets/logo.png";

function OffcanvasNav() {
  return (
    <>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            {" "}
            Profile
          </a>
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <img
                  src={Logo}
                  alt="LogoLogin"
                  style={{ width: "80px", height: "80px", marginRight: "10px" }}
                />
                <div>
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                    Anna Inventory
                  </h5>
                  <p style={{ fontSize: "12px" }}>Management Systems</p>
                </div>
              </div>
              <button
                type="button"
                className="btn-close position-absolute top-0 end-0 m-3"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <p
                  style={{
                    fontSize: "12px",
                    marginBottom: "1px",
                    marginTop: "-20px",
                  }}
                >
                  Main Menu
                </p>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <div className="d-flex align-items-center">
                      <Icon.Grid style={{ marginRight: "10px" }} />
                      Dashboard
                    </div>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <div className="d-flex align-items-center">
                      <Icon.Box style={{ marginRight: "10px" }} />
                      Product
                    </div>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <div className="d-flex align-items-center">
                      <Icon.GlobeAsiaAustralia
                        style={{ marginRight: "10px" }}
                      />
                      Inventory
                    </div>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <div className="d-flex align-items-center">
                      <Icon.GeoAlt style={{ marginRight: "10px" }} />
                      Warehouse
                    </div>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <div className="d-flex align-items-center">
                      <Icon.Truck style={{ marginRight: "10px" }} />
                      Transfer Product
                    </div>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <div className="d-flex align-items-center">
                      <Icon.Bezier style={{ marginRight: "10px" }} />
                      Stock
                    </div>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <div className="d-flex align-items-center">
                      <Icon.Bezier2 style={{ marginRight: "10px" }} />
                      Disburse Plan
                    </div>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <div className="d-flex align-items-center">
                      <Icon.BoundingBoxCircles
                        style={{ marginRight: "10px" }}
                      />
                      Reconciliation
                    </div>
                  </a>
                </li>

                <p
                  style={{
                    fontSize: "12px",
                    marginBottom: "1px",
                    marginTop: "30px",
                  }}
                >
                  Other Menu
                </p>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <div className="d-flex align-items-center">
                      <Icon.PersonCircle style={{ marginRight: "10px" }} />
                      Supplier
                    </div>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <div className="d-flex align-items-center">
                      <Icon.Cup style={{ marginRight: "10px" }} />
                      Invoice
                    </div>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <div className="d-flex align-items-center">
                      <Icon.PinMap style={{ marginRight: "10px" }} />
                      User Management
                    </div>
                  </a>
                </li>

                <p
                  style={{
                    fontSize: "12px",
                    marginBottom: "1px",
                    marginTop: "30px",
                  }}
                >
                  Help & Settings
                </p>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <div className="d-flex align-items-center">
                      <Icon.InfoCircle style={{ marginRight: "10px" }} />
                      Help & Center
                    </div>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <div className="d-flex align-items-center">
                      <Icon.Gear style={{ marginRight: "10px" }} />
                      Settings
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default OffcanvasNav;
