import OffcanvasNav from "../../components/navbar/OffcanvasNav";

import Glasses1 from "../../assets/products/glasses-1.jpg";
import Glasses2 from "../../assets/products/glasses-2.jpg";
import Glasses3 from "../../assets/products/glasses-3.jpg";
import Glasses4 from "../../assets/products/glasses-4.jpg";
import Glasses5 from "../../assets/products/glasses-5.jpg";
import Glasses6 from "../../assets/products/glasses-6.jpg";
import Glasses7 from "../../assets/products/glasses-7.jpg";
import Glasses8 from "../../assets/products/glasses-8.jpg";

function Product() {
  return (
    <div className="container-fluid p-5 mt-4">
      <OffcanvasNav />

      <div>
        <h1>Products List</h1>
        <p style={{ color: "#424874" }}>Dashboard / Product</p>
      </div>

      {/* 1st Row */}
      <div className="row">
        {/* Products Filter Search */}
        <div className="col-10">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search products..."
            aria-label="Search"
          />
        </div>

        {/* Products Filter Select */}
        <div className="col-2">
          <select class="form-select" aria-label="List of Products Filter">
            <option selected>All</option>
            <option value="1">Available</option>
            <option value="2">Disabled</option>
          </select>
        </div>
      </div>

      {/* 2nd Row */}
      <div className="row ms-5">
        {/* List of Products Cards */}
        <div className="col-3 mt-4 g-4">
          <div class="card" style={{ width: "18rem", height: "28rem" }}>
            <img src={Glasses1} class="card-img-top" alt="Glasses1" />
            <div className="card-img-overlay">
              <p
                className="card-text p-1 bg-success-subtle rounded-3 text-center text-success fw-semibold"
                style={{ width: "6rem", fontSize: "14px" }}
              >
                Available
              </p>
            </div>
            <div class="card-body">
              <h5 class="card-title">
                Round Glasses Retro Vintage Classic Round Metal Clear Lens
                Glasses W/ Case
              </h5>
              <p class="card-text" style={{ color: "#424874" }}>
                12.09.20
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fram
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P740.16
              </p>
            </div>
          </div>
        </div>

        <div className="col-3 mt-4">
          <div class="card" style={{ width: "18rem", height: "28rem" }}>
            <img src={Glasses2} class="card-img-top" alt="Glasses2" />
            <div className="card-img-overlay">
              <p
                className="card-text p-1 bg-success-subtle rounded-3 text-center text-success fw-semibold"
                style={{ width: "6rem", fontSize: "14px" }}
              >
                Available
              </p>
            </div>
            <div class="card-body">
              <h5 class="card-title">
                XL Large Chunky Square Glasses Clear Lens Thick Frame Nerd
                Eyewear Bold New
              </h5>
              <p class="card-text" style={{ color: "#424874" }}>
                12.09.20
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fram
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P726.14
              </p>
            </div>
          </div>
        </div>

        <div className="col-3 mt-4">
          <div class="card" style={{ width: "18rem", height: "28rem" }}>
            <img src={Glasses3} class="card-img-top mt-5" alt="Glasses3" />
            <div className="card-img-overlay">
              <p
                className="card-text p-1 bg-danger-subtle rounded-3 text-center text-danger fw-semibold"
                style={{ width: "6rem", fontSize: "14px" }}
              >
                Disabled
              </p>
            </div>
            <div class="card-body mt-4">
              <h5 class="card-title">
                The Thinker Computer Anti-blue Light Glasses
              </h5>
              <p
                class="card-text"
                style={{ marginTop: "3.4rem", color: "#424874" }}
              >
                12.09.20
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fram
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P850.00
              </p>
            </div>
          </div>
        </div>

        <div className="col-3 mt-4">
          <div class="card" style={{ width: "18rem", height: "28rem" }}>
            <img
              src={Glasses4}
              class="card-img-top"
              style={{ marginTop: "6rem" }}
              alt="Glasses4"
            />
            <div className="card-img-overlay">
              <p
                className="card-text p-1 bg-success-subtle rounded-3 text-center text-success fw-semibold"
                style={{ width: "6rem", fontSize: "14px" }}
              >
                Available
              </p>
            </div>
            <div class="card-body" style={{ marginTop: "3.8rem" }}>
              <h5 class="card-title">
                Vast Round Anti Glare Black Frame Unisex Computer Glasses
                (3447_ARC, Transparent, Medium)
              </h5>
              <p class="card-text" style={{ color: "#424874" }}>
                12.09.20
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fram
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P740.16
              </p>
            </div>
          </div>
        </div>

        <div className="col-3 mt-4">
          <div class="card" style={{ width: "18rem", height: "28rem" }}>
            <img src={Glasses5} class="card-img-top" alt="Glasses5" />
            <div className="card-img-overlay">
              <p
                className="card-text p-1 bg-success-subtle rounded-3 text-center text-success fw-semibold"
                style={{ width: "6rem", fontSize: "14px" }}
              >
                Available
              </p>
            </div>
            <div class="card-body">
              <h5 class="card-title">
                ZM Fashion glasses Trendy Korean Eyeglasses with Grade 0-400
                Anti-radiation Blue Light Glasses
              </h5>
              <p class="card-text" style={{ color: "#424874" }}>
                12.09.20
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fram
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P740.16
              </p>
            </div>
          </div>
        </div>

        <div className="col-3 mt-4">
          <div class="card" style={{ width: "18rem", height: "28rem" }}>
            <img src={Glasses6} class="card-img-top mt-5" alt="Glasses6" />
            <div className="card-img-overlay">
              <p
                className="card-text p-1 bg-danger-subtle rounded-3 text-center text-danger fw-semibold"
                style={{ width: "6rem", fontSize: "14px" }}
              >
                Disabled
              </p>
            </div>
            <div class="card-body mt-2">
              <h5 class="card-title">Balenciaga Glasses BB0276O 001</h5>
              <p
                class="card-text"
                style={{ marginTop: "3.6rem", color: "#424874" }}
              >
                12.09.20
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fram
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P740.16
              </p>
            </div>
          </div>
        </div>

        <div className="col-3 mt-4">
          <div class="card" style={{ width: "18rem", height: "28rem" }}>
            <img
              src={Glasses7}
              class="card-img-top"
              style={{ marginTop: "4rem" }}
              alt="Glasses7"
            />
            <div className="card-img-overlay">
              <p
                className="card-text p-1 bg-success-subtle rounded-3 text-center text-success fw-semibold"
                style={{ width: "6rem", fontSize: "14px" }}
              >
                Available
              </p>
            </div>
            <div class="card-body" style={{ marginTop: "2.5rem" }}>
              <h5 class="card-title">Glasses RALPH LAUREN RL6233U</h5>
              <p
                class="card-text"
                style={{ marginTop: "3.7rem", color: "#424874" }}
              >
                12.09.20
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fram
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P740.16
              </p>
            </div>
          </div>
        </div>

        <div className="col-3 mt-4">
          <div class="card" style={{ width: "18rem", height: "28rem" }}>
            <img src={Glasses8} class="card-img-top" alt="Glasses8" />
            <div className="card-img-overlay">
              <p
                className="card-text p-1 bg-success-subtle rounded-3 text-center text-success fw-semibold"
                style={{ width: "6rem", fontSize: "14px" }}
              >
                Available
              </p>
            </div>
            <div class="card-body">
              <h5 class="card-title">Ralph RA 7132U - 5885 Shiny Havana</h5>
              <p
                class="card-text"
                style={{ marginTop: "3.5rem", color: "#424874" }}
              >
                12.09.20
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fram
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P740.16
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
