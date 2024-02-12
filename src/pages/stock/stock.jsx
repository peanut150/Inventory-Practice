import * as Icon from "react-bootstrap-icons";

import DeleteModal from "../../components/modal/DeleteModal";

import Stock1 from "../../assets/stocks/stock1.jpg";
import Stock2 from "../../assets/stocks/stock2.jpg";
import Stock3 from "../../assets/stocks/stock3.jpg";
import Stock4 from "../../assets/stocks/stock4.jpg";

import OffcanvasNav from "../../components/navbar/OffcanvasNav";

function Stock() {
  return (
    <div className="container-fluid p-5 mt-4">
      <OffcanvasNav />

      <div className="d-flex justify-content-between align-items-center mb-2">
        <div>
          <h1>Product Stock</h1>
          <p style={{ color: "#424874" }}>Dashboard / Stock</p>
        </div>

        <div>
          <input
            className="form-control me-2 rounded-5"
            style={{ width: "15rem" }}
            type="search"
            placeholder="Search product name"
            aria-label="Search"
          />
        </div>
      </div>

      {/* Table */}
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style={{ backgroundColor: "#DCD6F7" }}>
              Image
            </th>
            <th scope="col" style={{ backgroundColor: "#DCD6F7" }}>
              Product Name
            </th>
            <th scope="col" style={{ backgroundColor: "#DCD6F7" }}>
              Category
            </th>
            <th scope="col" style={{ backgroundColor: "#DCD6F7" }}>
              Price
            </th>
            <th scope="col" style={{ backgroundColor: "#DCD6F7" }}>
              Piece
            </th>
            <th scope="col" style={{ backgroundColor: "#DCD6F7" }}>
              Available Color
            </th>
            <th scope="col" style={{ backgroundColor: "#DCD6F7" }}>
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row" style={{ backgroundColor: "#DCD6F7" }}>
              <img
                src={Stock1}
                style={{ width: "3.5rem", height: "4rem" }}
                alt="Stock1"
              />
            </th>
            <td className="align-middle" style={{ backgroundColor: "#DCD6F7" }}>
              Apple Watch Series 4
            </td>
            <td className="align-middle" style={{ backgroundColor: "#DCD6F7" }}>
              Digital Product
            </td>
            <td className="align-middle" style={{ backgroundColor: "#DCD6F7" }}>
              $690.00
            </td>
            <td className="align-middle" style={{ backgroundColor: "#DCD6F7" }}>
              63
            </td>
            <td className="align-middle" style={{ backgroundColor: "#DCD6F7" }}>
              <Icon.CircleFill />
              <Icon.CircleFill className="ms-3" style={{ color: "gray" }} />
              <Icon.CircleFill className="ms-3" style={{ color: "pink" }} />
            </td>
            <td className="align-middle" style={{ backgroundColor: "#DCD6F7" }}>
              <div className="d-flex">
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
              </div>
            </td>
          </tr>

          <tr>
            <th scope="row" style={{ backgroundColor: "#DCD6F7" }}>
              <img
                src={Stock2}
                style={{ width: "3.5rem", height: "4rem" }}
                alt="Stock2"
              />
            </th>
            <td className="align-middle" style={{ backgroundColor: "#DCD6F7" }}>
              Women's Dress
            </td>
            <td className="align-middle" style={{ backgroundColor: "#DCD6F7" }}>
              Fashion
            </td>
            <td className="align-middle" style={{ backgroundColor: "#DCD6F7" }}>
              $640.00
            </td>
            <td className="align-middle" style={{ backgroundColor: "#DCD6F7" }}>
              635
            </td>
            <td className="align-middle" style={{ backgroundColor: "#DCD6F7" }}>
              <Icon.CircleFill style={{ color: "#63C5DA" }} />
              <Icon.CircleFill className="ms-3" style={{ color: "#D30000" }} />
              <Icon.CircleFill className="ms-3" style={{ color: "pink" }} />
              <Icon.CircleFill className="ms-3" style={{ color: "#FFF200" }} />
            </td>
            <td className="align-middle" style={{ backgroundColor: "#DCD6F7" }}>
              <div className="d-flex">
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
              </div>
            </td>
          </tr>

          <tr>
            <th scope="row" style={{ backgroundColor: "#DCD6F7" }}>
              <img
                src={Stock3}
                style={{ width: "3.5rem", height: "4rem" }}
                alt="Stock3"
              />
            </th>
            <td className="align-middle" style={{ backgroundColor: "#DCD6F7" }}>
              Samsung A50
            </td>
            <td className="align-middle" style={{ backgroundColor: "#DCD6F7" }}>
              Mobile
            </td>
            <td className="align-middle" style={{ backgroundColor: "#DCD6F7" }}>
              $400.00
            </td>
            <td className="align-middle" style={{ backgroundColor: "#DCD6F7" }}>
              67
            </td>
            <td className="align-middle" style={{ backgroundColor: "#DCD6F7" }}>
              <Icon.CircleFill style={{ color: "#1338BE" }} />
              <Icon.CircleFill className="ms-3" style={{ color: "#228B22" }} />
              <Icon.CircleFill className="ms-3" style={{ color: "#6F2DA8" }} />
            </td>
            <td className="align-middle" style={{ backgroundColor: "#DCD6F7" }}>
              <div className="d-flex">
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
              </div>
            </td>
          </tr>

          <tr>
            <th scope="row" style={{ backgroundColor: "#DCD6F7" }}>
              <img
                src={Stock4}
                style={{ width: "3.5rem", height: "4rem" }}
                alt="Stock4"
              />
            </th>
            <td className="align-middle" style={{ backgroundColor: "#DCD6F7" }}>
              Camera
            </td>
            <td className="align-middle" style={{ backgroundColor: "#DCD6F7" }}>
              Electronic
            </td>
            <td className="align-middle" style={{ backgroundColor: "#DCD6F7" }}>
              $420.00
            </td>
            <td className="align-middle" style={{ backgroundColor: "#DCD6F7" }}>
              52
            </td>
            <td className="align-middle" style={{ backgroundColor: "#DCD6F7" }}>
              <Icon.CircleFill />
              <Icon.CircleFill className="ms-3" style={{ color: "gray" }} />
              <Icon.CircleFill className="ms-3" style={{ color: "#C154C1" }} />
            </td>
            <td className="align-middle" style={{ backgroundColor: "#DCD6F7" }}>
              <div className="d-flex">
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
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Stock;
