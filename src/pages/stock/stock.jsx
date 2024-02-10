import * as Icon from "react-bootstrap-icons";

import Stock1 from "../../assets/stocks/stock1.jpg";
import Stock2 from "../../assets/stocks/stock2.jpg";
import Stock3 from "../../assets/stocks/stock3.jpg";
import Stock4 from "../../assets/stocks/stock4.jpg";

import OffcanvasNav from "../../components/navbar/OffcanvasNav";

function Stock() {
  document.body.style.backgroundColor = "#F5F5F5";

  return (
    <div className="container-fluid p-5 mt-4">
      <OffcanvasNav />

      <div className="d-flex justify-content-between align-items-center mb-2">
        <div>
          <h1>Product Stock</h1>
          <p class="text-muted">Dashboard / Stock</p>
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
            <th scope="col">Image</th>
            <th scope="col">Product Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Piece</th>
            <th scope="col">Available Color</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row">
              <img
                src={Stock1}
                style={{ width: "3.5rem", height: "4rem" }}
                alt="Stock1"
              />
            </th>
            <td className="align-middle">Apple Watch Series 4</td>
            <td className="align-middle">Digital Product</td>
            <td className="align-middle">$690.00</td>
            <td className="align-middle">63</td>
            <td className="align-middle">
              <Icon.CircleFill />
              <Icon.CircleFill className="ms-3" style={{ color: "gray" }} />
              <Icon.CircleFill className="ms-3" style={{ color: "pink" }} />
            </td>
            <td className="align-middle">
              <div className="d-flex">
                <button
                  type="button"
                  className="btn btn-outline-secondary d-flex align-items-center"
                  style={{ width: "3rem", height: "1.8rem" }}
                >
                  <Icon.PencilSquare
                    style={{ fontSize: "14px", margin: "auto" }}
                  />
                </button>

                <button
                  type="button"
                  className="btn btn-outline-secondary d-flex align-items-center"
                  style={{ width: "3rem", height: "1.8rem" }}
                >
                  <Icon.Trash
                    style={{ color: "red", fontSize: "14px", margin: "auto" }}
                  />
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <th scope="row">
              <img
                src={Stock2}
                style={{ width: "3.5rem", height: "4rem" }}
                alt="Stock2"
              />
            </th>
            <td className="align-middle">Women's Dress</td>
            <td className="align-middle">Fashion</td>
            <td className="align-middle">$640.00</td>
            <td className="align-middle">635</td>
            <td className="align-middle">
              <Icon.CircleFill style={{ color: "#63C5DA" }} />
              <Icon.CircleFill className="ms-3" style={{ color: "#D30000" }} />
              <Icon.CircleFill className="ms-3" style={{ color: "pink" }} />
              <Icon.CircleFill className="ms-3" style={{ color: "#FFF200" }} />
            </td>
            <td className="align-middle">
              <div className="d-flex">
                <button
                  type="button"
                  className="btn btn-outline-secondary d-flex align-items-center"
                  style={{ width: "3rem", height: "1.8rem" }}
                >
                  <Icon.PencilSquare
                    style={{ fontSize: "14px", margin: "auto" }}
                  />
                </button>

                <button
                  type="button"
                  className="btn btn-outline-secondary d-flex align-items-center"
                  style={{ width: "3rem", height: "1.8rem" }}
                >
                  <Icon.Trash
                    style={{ color: "red", fontSize: "14px", margin: "auto" }}
                  />
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <th scope="row">
              <img
                src={Stock3}
                style={{ width: "3.5rem", height: "4rem" }}
                alt="Stock3"
              />
            </th>
            <td className="align-middle">Samsung A50</td>
            <td className="align-middle">Mobile</td>
            <td className="align-middle">$400.00</td>
            <td className="align-middle">67</td>
            <td className="align-middle">
              <Icon.CircleFill style={{ color: "#1338BE" }} />
              <Icon.CircleFill className="ms-3" style={{ color: "#228B22" }} />
              <Icon.CircleFill className="ms-3" style={{ color: "#6F2DA8" }} />
            </td>
            <td className="align-middle">
              <div className="d-flex">
                <button
                  type="button"
                  className="btn btn-outline-secondary d-flex align-items-center"
                  style={{ width: "3rem", height: "1.8rem" }}
                >
                  <Icon.PencilSquare
                    style={{ fontSize: "14px", margin: "auto" }}
                  />
                </button>

                <button
                  type="button"
                  className="btn btn-outline-secondary d-flex align-items-center"
                  style={{ width: "3rem", height: "1.8rem" }}
                >
                  <Icon.Trash
                    style={{ color: "red", fontSize: "14px", margin: "auto" }}
                  />
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <th scope="row">
              <img
                src={Stock4}
                style={{ width: "3.5rem", height: "4rem" }}
                alt="Stock4"
              />
            </th>
            <td className="align-middle">Camera</td>
            <td className="align-middle">Electronic</td>
            <td className="align-middle">$420.00</td>
            <td className="align-middle">52</td>
            <td className="align-middle">
              <Icon.CircleFill />
              <Icon.CircleFill className="ms-3" style={{ color: "gray" }} />
              <Icon.CircleFill className="ms-3" style={{ color: "#C154C1" }} />
            </td>
            <td className="align-middle">
              <div className="d-flex">
                <button
                  type="button"
                  className="btn btn-outline-secondary d-flex align-items-center"
                  style={{ width: "3rem", height: "1.8rem" }}
                >
                  <Icon.PencilSquare
                    style={{ fontSize: "14px", margin: "auto" }}
                  />
                </button>

                <button
                  type="button"
                  className="btn btn-outline-secondary d-flex align-items-center"
                  style={{ width: "3rem", height: "1.8rem" }}
                >
                  <Icon.Trash
                    style={{ color: "red", fontSize: "14px", margin: "auto" }}
                  />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Stock;
