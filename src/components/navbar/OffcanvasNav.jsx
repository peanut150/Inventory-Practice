import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

import Logo from "../../assets/logo.png";

function OffcanvasNav() {
  const handleNotifClick = () => {
    console.log();
  };

  return (
    <>
      <nav className="navbar fixed-top" style={{ backgroundColor: "#A6B1E1" }}>
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

          <div className="d-flex align-items-center me-auto ">
            <input
              className="form-control me-2 d-flex border-0"
              style={{
                marginLeft: "30px",
                width: "80rem",
                backgroundColor: "#A6B1E1",
                boxShadow: "none",
              }}
              type="search"
              placeholder="Search anything here"
              aria-label="Search"
            />
          </div>

          <Icon.Bell
            style={{ marginRight: "30px", cursor: "pointer" }}
            onClick={() => handleNotifClick()}
          />

          <Link to="/profile" className="navbar-brand">
            Profile
          </Link>
          <div
            className="offcanvas offcanvas-start"
            style={{ backgroundColor: "#A6B1E1" }}
            data-bs-backdrop="static"
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
                  <Link
                    to="/dashboard"
                    className="nav-link active"
                    aria-current="page"
                  >
                    <div className="d-flex align-items-center">
                      <Icon.Grid style={{ marginRight: "10px" }} />
                      Dashboard
                    </div>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/product"
                    className="nav-link active"
                    aria-current="page"
                  >
                    <div className="d-flex align-items-center">
                      <Icon.Box style={{ marginRight: "10px" }} />
                      Product
                    </div>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/inventory"
                    className="nav-link active"
                    aria-current="page"
                  >
                    <div className="d-flex align-items-center">
                      <Icon.GlobeAsiaAustralia
                        style={{ marginRight: "10px" }}
                      />
                      Inventory
                    </div>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/TransferProduct"
                    className="nav-link active"
                    aria-current="page"
                  >
                    <div className="d-flex align-items-center">
                      <Icon.Truck style={{ marginRight: "10px" }} />
                      Transfer Product
                    </div>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/stock"
                    className="nav-link active"
                    aria-current="page"
                  >
                    <div className="d-flex align-items-center">
                      <Icon.Bezier style={{ marginRight: "10px" }} />
                      Stock
                    </div>
                  </Link>
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
                  <Link
                    to="/supplier"
                    className="nav-link active"
                    aria-current="page"
                  >
                    <div className="d-flex align-items-center">
                      <Icon.PersonCircle style={{ marginRight: "10px" }} />
                      Supplier
                    </div>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/UserManagement"
                    className="nav-link active"
                    aria-current="page"
                  >
                    <div className="d-flex align-items-center">
                      <Icon.PinMap style={{ marginRight: "10px" }} />
                      User Management
                    </div>
                  </Link>
                </li>

                <p
                  style={{
                    fontSize: "12px",
                    marginBottom: "1px",
                    marginTop: "30px",
                  }}
                >
                  Settings
                </p>

                <li className="nav-item">
                  <Link
                    to="/settings"
                    className="nav-link active"
                    aria-current="page"
                  >
                    <div className="d-flex align-items-center">
                      <Icon.Gear style={{ marginRight: "10px" }} />
                      Settings
                    </div>
                  </Link>
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
