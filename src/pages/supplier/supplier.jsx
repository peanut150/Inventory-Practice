import * as Icon from "react-bootstrap-icons";

import OffcanvasNav from "../../components/navbar/OffcanvasNav";
import logo1 from "../../assets/logos/logo1.jpg";
import logo2 from "../../assets/logos/logo2.jpg";
import logo3 from "../../assets/logos/logo3.png";
import logo4 from "../../assets/logos/logo4.jpeg";
import logo5 from "../../assets/logos/logo5.png";
import logo6 from "../../assets/logos/logo6.png";
import logo7 from "../../assets/logos/logo7.png";
import logo8 from "../../assets/logos/logo8.jpg";
import logo9 from "../../assets/logos/logo9.jpg";
import logo10 from "../../assets/logos/logo10.png";
import logo11 from "../../assets/logos/logo11.png";
import logo12 from "../../assets/logos/logo12.png";

function Supplier() {
  document.body.style.backgroundColor = "#F5F5F5";

  return (
    <div class="container-fluid p-5 mt-4">
      <OffcanvasNav />

      <div>
        <h1>Suppliers List</h1>
        <p class="text-muted">Dashboard / Supplier</p>
      </div>

      <div>
        <form className="d-flex">
          <select
            class="form-select me-2"
            style={{ width: "15rem" }}
            aria-label="Suppliers"
          >
            <option selected>All Suppliers (30)</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <input
            className="form-control me-2"
            style={{ width: "83rem" }}
            type="search"
            placeholder="Search for a Supplier"
            aria-label="Search"
          />
          <button
            className="btn btn-success"
            style={{ width: "7.5rem" }}
            type="submit"
          >
            <Icon.PlusCircleFill
              className="me-2"
              style={{ color: "#CEFAD0" }}
            />
            Supplier
          </button>
        </form>
      </div>

      {/* Suppliers Card */}
      <div className="row">
        <div className="col-3 mt-4">
          <div className="card border-0">
            <div className="card-body p-3 d-flex align-items-center">
              {/* Logo */}
              <div>
                <img
                  src={logo1}
                  style={{ width: "3rem", height: "2.7rem" }}
                  alt="logo1"
                />
              </div>

              {/* Text */}
              <div className="ms-3">
                <p class="card-title fw-semibold mb-0">
                  Grey Fabric & Materials
                </p>
                <p className="text-primary mb-0" style={{ fontSize: "12px" }}>
                  Parent Supplier
                </p>
                <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                  Fabcore Pvt. Ltd
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="d-flex">
              <p
                className="text-muted mb-0 mb-3 ms-3"
                style={{ fontSize: "14px" }}
              >
                <Icon.Telephone className="me-2" style={{ color: "blue" }} />
                +11 12456 63636
              </p>
              <p
                className="text-muted mb-0 mb-3 ms-3"
                style={{ fontSize: "14px" }}
              >
                <Icon.Envelope className="me-2" style={{ color: "blue" }} />
                example@mail.com
              </p>
            </div>
          </div>
        </div>

        <div className="col-3 mt-4">
          <div className="card border-0">
            <div className="card-body p-3 d-flex align-items-center">
              {/* Logo */}
              <div>
                <img
                  src={logo2}
                  style={{ width: "3rem", height: "2.7rem" }}
                  alt="logo2"
                />
              </div>

              {/* Text */}
              <div className="ms-3">
                <p class="card-title fw-semibold mb-0">Fine Weave Textiles</p>
                <p className="text-primary mb-0" style={{ fontSize: "12px" }}>
                  Parent Supplier
                </p>
                <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                  Fabcore Pvt. Ltd
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="d-flex">
              <p
                className="text-muted mb-0 mb-3 ms-3"
                style={{ fontSize: "14px" }}
              >
                <Icon.Telephone className="me-2" style={{ color: "blue" }} />
                +11 12456 63636
              </p>
              <p
                className="text-muted mb-0 mb-3 ms-3"
                style={{ fontSize: "14px" }}
              >
                <Icon.Envelope className="me-2" style={{ color: "blue" }} />
                example@mail.com
              </p>
            </div>
          </div>
        </div>

        <div className="col-3 mt-4">
          <div className="card border-0">
            <div className="card-body p-3 d-flex align-items-center">
              {/* Logo */}
              <div>
                <img
                  src={logo3}
                  style={{ width: "3rem", height: "3rem" }}
                  alt="logo3"
                />
              </div>

              {/* Text */}
              <div className="ms-3">
                <p class="card-title fw-semibold mb-0">Tribal Fabric</p>
                <p className="text-primary mb-0" style={{ fontSize: "12px" }}>
                  Parent Supplier
                </p>
                <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                  Grey Fabric & Materials
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="d-flex">
              <p
                className="text-muted mb-0 mb-3 ms-3"
                style={{ fontSize: "14px" }}
              >
                <Icon.Telephone className="me-2" style={{ color: "blue" }} />
                +11 12456 63636
              </p>
              <p
                className="text-muted mb-0 mb-3 ms-3"
                style={{ fontSize: "14px" }}
              >
                <Icon.Envelope className="me-2" style={{ color: "blue" }} />
                example@mail.com
              </p>
            </div>
          </div>
        </div>

        <div className="col-3 mt-4">
          <div className="card border-0">
            <div className="card-body p-3 d-flex align-items-center">
              {/* Logo */}
              <div>
                <img
                  src={logo4}
                  style={{ width: "3rem", height: "3rem" }}
                  alt="logo4"
                />
              </div>

              {/* Text */}
              <div className="ms-3">
                <p class="card-title fw-semibold mb-0">Fine Weave Textiles</p>
                <p className="text-primary mb-0" style={{ fontSize: "12px" }}>
                  Parent Supplier
                </p>
                <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                  Fabcore Pvt. Ltd
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="d-flex">
              <p
                className="text-muted mb-0 mb-3 ms-3"
                style={{ fontSize: "14px" }}
              >
                <Icon.Telephone className="me-2" style={{ color: "blue" }} />
                +11 12456 63636
              </p>
              <p
                className="text-muted mb-0 mb-3 ms-3"
                style={{ fontSize: "14px" }}
              >
                <Icon.Envelope className="me-2" style={{ color: "blue" }} />
                example@mail.com
              </p>
            </div>
          </div>
        </div>

        <div className="col-3 mt-4">
          <div className="card border-0">
            <div className="card-body p-3 d-flex align-items-center">
              {/* Logo */}
              <div>
                <img
                  src={logo5}
                  style={{ width: "3rem", height: "2.7rem" }}
                  alt="logo5"
                />
              </div>

              {/* Text */}
              <div className="ms-3">
                <p class="card-title fw-semibold mb-0">Ethno Fabric</p>
                <p className="text-primary mb-0" style={{ fontSize: "12px" }}>
                  Parent Supplier
                </p>
                <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                  Fabcore Pvt. Ltd
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="d-flex">
              <p
                className="text-muted mb-0 mb-3 ms-3"
                style={{ fontSize: "14px" }}
              >
                <Icon.Telephone className="me-2" style={{ color: "blue" }} />
                +11 12456 63636
              </p>
              <p
                className="text-muted mb-0 mb-3 ms-3"
                style={{ fontSize: "14px" }}
              >
                <Icon.Envelope className="me-2" style={{ color: "blue" }} />
                example@mail.com
              </p>
            </div>
          </div>
        </div>

        <div className="col-3 mt-4">
          <div className="card border-0">
            <div className="card-body p-3 d-flex align-items-center">
              {/* Logo */}
              <div>
                <img
                  src={logo6}
                  style={{ width: "3rem", height: "2.5rem" }}
                  alt="logo6"
                />
              </div>

              {/* Text */}
              <div className="ms-3">
                <p class="card-title fw-semibold mb-0">
                  Art Fabric & Materials
                </p>
                <p className="text-primary mb-0" style={{ fontSize: "12px" }}>
                  Parent Supplier
                </p>
                <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                  Fabcore Pvt. Ltd
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="d-flex">
              <p
                className="text-muted mb-0 mb-3 ms-3"
                style={{ fontSize: "14px" }}
              >
                <Icon.Telephone className="me-2" style={{ color: "blue" }} />
                +11 12456 63636
              </p>
              <p
                className="text-muted mb-0 mb-3 ms-3"
                style={{ fontSize: "14px" }}
              >
                <Icon.Envelope className="me-2" style={{ color: "blue" }} />
                example@mail.com
              </p>
            </div>
          </div>
        </div>

        <div className="col-3 mt-4">
          <div className="card border-0">
            <div className="card-body p-3 d-flex align-items-center">
              {/* Logo */}
              <div>
                <img
                  src={logo7}
                  style={{ width: "3rem", height: "2.7rem" }}
                  alt="logo7"
                />
              </div>

              {/* Text */}
              <div className="ms-3">
                <p class="card-title fw-semibold mb-0">Leno Fabric</p>
                <p className="text-primary mb-0" style={{ fontSize: "12px" }}>
                  Parent Supplier
                </p>
                <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                  Fabcore Pvt. Ltd
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="d-flex">
              <p
                className="text-muted mb-0 mb-3 ms-3"
                style={{ fontSize: "14px" }}
              >
                <Icon.Telephone className="me-2" style={{ color: "blue" }} />
                +11 12456 63636
              </p>
              <p
                className="text-muted mb-0 mb-3 ms-3"
                style={{ fontSize: "14px" }}
              >
                <Icon.Envelope className="me-2" style={{ color: "blue" }} />
                example@mail.com
              </p>
            </div>
          </div>
        </div>

        <div className="col-3 mt-4">
          <div className="card border-0">
            <div className="card-body p-3 d-flex align-items-center">
              {/* Logo */}
              <div>
                <img
                  src={logo8}
                  style={{ width: "4rem", height: "2.5rem" }}
                  alt="logo8"
                />
              </div>

              {/* Text */}
              <div className="ms-3">
                <p class="card-title fw-semibold mb-0">Leno Fabric</p>
                <p className="text-primary mb-0" style={{ fontSize: "12px" }}>
                  Parent Supplier
                </p>
                <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                  Fabcore Pvt. Ltd
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="d-flex">
              <p
                className="text-muted mb-0 mb-3 ms-3"
                style={{ fontSize: "14px" }}
              >
                <Icon.Telephone className="me-2" style={{ color: "blue" }} />
                +11 12456 63636
              </p>
              <p
                className="text-muted mb-0 mb-3 ms-3"
                style={{ fontSize: "14px" }}
              >
                <Icon.Envelope className="me-2" style={{ color: "blue" }} />
                example@mail.com
              </p>
            </div>
          </div>
        </div>

        <div className="col-3 mt-4">
          <div className="card border-0">
            <div className="card-body p-3 d-flex align-items-center">
              {/* Logo */}
              <div>
                <img
                  src={logo9}
                  style={{ width: "3rem", height: "3rem" }}
                  alt="logo9"
                />
              </div>

              {/* Text */}
              <div className="ms-3">
                <p class="card-title fw-semibold mb-0">
                  Grey Fabric & Materials
                </p>
                <p className="text-primary mb-0" style={{ fontSize: "12px" }}>
                  Parent Supplier
                </p>
                <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                  Fabcore Pvt. Ltd
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="d-flex">
              <p
                className="text-muted mb-0 mb-3 ms-3"
                style={{ fontSize: "14px" }}
              >
                <Icon.Telephone className="me-2" style={{ color: "blue" }} />
                +11 12456 63636
              </p>
              <p
                className="text-muted mb-0 mb-3 ms-3"
                style={{ fontSize: "14px" }}
              >
                <Icon.Envelope className="me-2" style={{ color: "blue" }} />
                example@mail.com
              </p>
            </div>
          </div>
        </div>

        <div className="col-3 mt-4">
          <div className="card border-0">
            <div className="card-body p-3 d-flex align-items-center">
              {/* Logo */}
              <div>
                <img
                  src={logo10}
                  style={{ width: "3rem", height: "2.7rem" }}
                  alt="logo10"
                />
              </div>

              {/* Text */}
              <div className="ms-3">
                <p class="card-title fw-semibold mb-0">
                  Grey Fabric & Materials
                </p>
                <p className="text-primary mb-0" style={{ fontSize: "12px" }}>
                  Parent Supplier
                </p>
                <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                  Fabcore Pvt. Ltd
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="d-flex">
              <p
                className="text-muted mb-0 mb-3 ms-3"
                style={{ fontSize: "14px" }}
              >
                <Icon.Telephone className="me-2" style={{ color: "blue" }} />
                +11 12456 63636
              </p>
              <p
                className="text-muted mb-0 mb-3 ms-3"
                style={{ fontSize: "14px" }}
              >
                <Icon.Envelope className="me-2" style={{ color: "blue" }} />
                example@mail.com
              </p>
            </div>
          </div>
        </div>

        <div className="col-3 mt-4">
          <div className="card border-0">
            <div className="card-body p-3 d-flex align-items-center">
              {/* Logo */}
              <div>
                <img
                  src={logo11}
                  style={{ width: "3rem", height: "2.5rem" }}
                  alt="logo11"
                />
              </div>

              {/* Text */}
              <div className="ms-3">
                <p class="card-title fw-semibold mb-0">Leno Fabric</p>
                <p className="text-primary mb-0" style={{ fontSize: "12px" }}>
                  Parent Supplier
                </p>
                <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                  Fabcore Pvt. Ltd
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="d-flex">
              <p
                className="text-muted mb-0 mb-3 ms-3"
                style={{ fontSize: "14px" }}
              >
                <Icon.Telephone className="me-2" style={{ color: "blue" }} />
                +11 12456 63636
              </p>
              <p
                className="text-muted mb-0 mb-3 ms-3"
                style={{ fontSize: "14px" }}
              >
                <Icon.Envelope className="me-2" style={{ color: "blue" }} />
                example@mail.com
              </p>
            </div>
          </div>
        </div>

        <div className="col-3 mt-4">
          <div className="card border-0">
            <div className="card-body p-3 d-flex align-items-center">
              {/* Logo */}
              <div>
                <img
                  src={logo12}
                  style={{ width: "4rem", height: "2.5rem" }}
                  alt="logo12"
                />
              </div>

              {/* Text */}
              <div className="ms-3">
                <p class="card-title fw-semibold mb-0">Fine Weave Textiles</p>
                <p className="text-primary mb-0" style={{ fontSize: "12px" }}>
                  Parent Supplier
                </p>
                <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                  Fabcore Pvt. Ltd
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="d-flex">
              <p
                className="text-muted mb-0 mb-3 ms-3"
                style={{ fontSize: "14px" }}
              >
                <Icon.Telephone className="me-2" style={{ color: "blue" }} />
                +11 12456 63636
              </p>
              <p
                className="text-muted mb-0 mb-3 ms-3"
                style={{ fontSize: "14px" }}
              >
                <Icon.Envelope className="me-2" style={{ color: "blue" }} />
                example@mail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Supplier;
