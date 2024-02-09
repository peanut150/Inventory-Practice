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
  document.body.style.backgroundColor = "#F5F5F5";
  return (
    <div className="container-fluid p-5 mt-4">
      <OffcanvasNav />

      <div>
        <h1>Product</h1>
        <p class="text-muted">Dashboard / Product</p>
      </div>

      {/* 1st Row */}
      <div className="row">
        {/* Products Filter Search */}
        <div className="col-11">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search products..."
            aria-label="Search"
          />
        </div>

        {/* Products Filter Select */}
        <div className="col-1">
          <select class="form-select" aria-label="List of Products Filter">
            <option selected>Filter</option>
            <option value="1">All</option>
            <option value="2">Available</option>
            <option value="3">Disabled</option>
          </select>
        </div>
      </div>

      {/* 2nd Row */}
      <div className="row">
        {/* List of Products Cards */}
        <div className="col-3 mt-4">
          <div class="card" style={{ width: "18rem", height: "28rem" }}>
            <img src={Glasses1} class="card-img-top" alt="Glasses1" />
            <div class="card-body">
              <h5 class="card-title">
                Round Glasses Retro Vintage Classic Round Metal Clear Lens
                Glasses W/ Case
              </h5>
              <p class="card-text text-muted">
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
            <div class="card-body">
              <h5 class="card-title">
                XL Large Chunky Square Glasses Clear Lens Thick Frame Nerd
                Eyewear Bold New
              </h5>
              <p class="card-text">
                12.09.20
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fram
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P726.14
              </p>
            </div>
          </div>
        </div>

        <div className="col-3 mt-4">
          <div class="card" style={{ width: "18rem", height: "28rem" }}>
            <img src={Glasses3} class="card-img-top" alt="Glasses3" />
            <div class="card-body">
              <h5 class="card-title">
                The Thinker Computer Anti-blue Light Glasses
              </h5>
              <p class="card-text">
                12.09.20
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fram
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P850.00
              </p>
            </div>
          </div>
        </div>

        <div className="col-3 mt-4">
          <div class="card" style={{ width: "18rem", height: "28rem" }}>
            <img src={Glasses4} class="card-img-top" alt="Glasses4" />
            <div class="card-body">
              <h5 class="card-title">
                Vast Round Anti Glare Black Frame Unisex Computer Glasses
                (3447_ARC, Transparent, Medium)
              </h5>
              <p class="card-text">
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
            <div class="card-body">
              <h5 class="card-title">
                ZM Fashion glasses Trendy Korean Eyeglasses with Grade 0-400
                Anti-radiation Blue Light Glasses
              </h5>
              <p class="card-text">
                12.09.20
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fram
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P740.16
              </p>
            </div>
          </div>
        </div>

        <div className="col-3 mt-4">
          <div class="card" style={{ width: "18rem", height: "28rem" }}>
            <img src={Glasses6} class="card-img-top" alt="Glasses6" />
            <div class="card-body">
              <h5 class="card-title">Balenciaga Glasses BB0276O 001</h5>
              <p class="card-text">
                12.09.20
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fram
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P740.16
              </p>
            </div>
          </div>
        </div>

        <div className="col-3 mt-4">
          <div class="card" style={{ width: "18rem", height: "28rem" }}>
            <img src={Glasses7} class="card-img-top" alt="Glasses7" />
            <div class="card-body">
              <h5 class="card-title">Glasses RALPH LAUREN RL6233U</h5>
              <p class="card-text">
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
            <div class="card-body">
              <h5 class="card-title">Ralph RA 7132U - 5885 Shiny Havana</h5>
              <p class="card-text">
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
