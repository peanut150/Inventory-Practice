import * as Icon from "react-bootstrap-icons";

import OffcanvasNav from "../../components/navbar/OffcanvasNav";
import DeleteModal from "../../components/modal/DeleteModal";

function TransferProduct() {
  return (
    <div className="container-fluid p-5 mt-4">
      <OffcanvasNav />

      <div className="d-flex justify-content-between align-items-center mb-1">
        <div>
          <h1>Transfer Product</h1>
          <p style={{ color: "#424874" }}>Dashboard / Transfer Product</p>
        </div>

        <div>
          <button type="button" class="btn" style={{ borderColor: "#424874" }}>
            Receive
          </button>

          <button
            type="button"
            class="btn btn-info ms-3 border-0"
            style={{ color: "white", backgroundColor: "#424874" }}
          >
            <Icon.CheckLg className="me-2" style={{ color: "white" }} />
            Save
          </button>
        </div>
      </div>

      {/* 1st Row */}
      <div className="row">
        <div class="col-12">
          <div class="card border-0" style={{ backgroundColor: "#DCD6F7" }}>
            <div class="card-body p-3 d-flex align-items-start">
              {/* Transfer from Location */}
              <div>
                <p class="card-title mt-2">Transfer from location</p>
                <select
                  class="form-select"
                  style={{ width: "35rem" }}
                  aria-label="Transfer from location"
                >
                  <option selected>Choose location</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              {/* Receiving Location */}
              <div className="ms-3">
                <p class="card-title mt-2">Receiving location</p>
                <select
                  class="form-select"
                  style={{ width: "35rem" }}
                  aria-label="Receiving location"
                >
                  <option selected>Choose location</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              {/* Details */}
              <div className="ms-3 d-flex flex-column mt-2 ms-auto">
                <div className="d-flex">
                  <p className="card-title">Transfer number:&nbsp;</p>
                  <p className="card-title fw-bold">-3</p>
                </div>

                <div className="d-flex">
                  <p className="card-title">Transfer creation:&nbsp;</p>
                  <p className="card-title fw-bold">Sun, Sep 15 2019</p>
                </div>

                <div className="d-flex">
                  <p className="card-title">
                    Transfer last updated date:&nbsp;
                  </p>
                  <p className="card-title fw-bold">Mon, Jan 1 1900</p>
                </div>

                <div className="d-flex">
                  <p className="card-title">Transfer status:&nbsp;</p>
                  <p
                    className="p-1 rounded-1 text-center"
                    style={{
                      width: "10rem",
                      fontSize: "14px",
                      backgroundColor: "#A6B1E1",
                    }}
                  >
                    Draft
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd Row */}
      <div className="row mt-4">
        <div class="col-12">
          <div class="card border-0" style={{ backgroundColor: "#DCD6F7" }}>
            <div class="card-body p-3 d-flex align-items-start">
              {/* Product Name Input */}
              <div>
                <p class="card-title mt-2 fw-bold">Product name</p>
                <input
                  type="text"
                  className="form-control"
                  id="ProductNameInput"
                />
              </div>

              {/* Source Input */}
              <div className="ms-3">
                <p class="card-title mt-2 fw-bold">Source</p>
                <input
                  type="number"
                  className="form-control"
                  id="SourceInput"
                />
              </div>

              {/* Destination Input */}
              <div className="ms-3">
                <p class="card-title mt-2 fw-bold">Destination</p>
                <input
                  type="number"
                  className="form-control"
                  id="DestinationInput"
                />
              </div>

              {/* Quantity Input */}
              <div className="ms-3">
                <p class="card-title mt-2 fw-bold">Quantity</p>
                <input
                  type="number"
                  className="form-control"
                  id="QuantityInput"
                />
              </div>

              {/* Source-After Input */}
              <div className="ms-3">
                <p class="card-title mt-2 fw-bold">Source - After</p>
                <input
                  type="number"
                  className="form-control"
                  id="SourceAfterInput"
                />
              </div>

              {/* Destination-After Input */}
              <div className="ms-3">
                <p class="card-title mt-2 fw-bold">Destination - After</p>
                <input
                  type="number"
                  className="form-control"
                  id="DestinationAfterInput"
                />
              </div>

              {/* Delete Button */}
              <button
                style={{
                  backgroundColor: "#D0312D",
                  marginTop: "3rem",
                  marginLeft: "4rem",
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransferProduct;
