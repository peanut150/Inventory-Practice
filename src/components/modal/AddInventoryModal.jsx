function AddInventoryModal() {
  return (
    <div
      class="modal fade"
      tabindex="-1"
      id="addinventory-modal"
      aria-labelledby="modal-title"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content" style={{ backgroundColor: "#F4EEFF" }}>
          <div class="modal-header">
            <h5 class="modal-title fw-bold" id="modal-title">
              Add Inventory
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>Input product details:</p>

            {/* Product Name Input Field */}
            <label htmlFor="modal-product" className="form-label fw-semibold">
              Product Name:
            </label>
            <input type="text" className="form-control" id="modal-product" />

            {/* Product ID Input Field */}
            <label htmlFor="modal-productid" className="form-label fw-semibold">
              Product ID:
            </label>
            <input
              type="number"
              className="form-control"
              id="modal-productid"
            />

            {/* Category Input Field */}
            <label htmlFor="modal-category" className="form-label fw-semibold">
              Category:
            </label>
            <select class="form-select" aria-label="model-category">
              <option selected>Select Category</option>
              <option value="1">Accessories</option>
              <option value="2">Camera</option>
              <option value="3">Headphone</option>
              <option value="4">Laptop</option>
              <option value="5">Watch</option>
            </select>

            {/* Location Input Field */}
            <label htmlFor="modal-location" className="form-label fw-semibold">
              Location:
            </label>
            <input type="text" className="form-control" id="modal-location" />

            {/* Available Input Field */}
            <label htmlFor="modal-available" className="form-label fw-semibold">
              Available:
            </label>
            <input
              type="number"
              className="form-control"
              id="modal-available"
            />

            {/* Reserved Input Field */}
            <label htmlFor="modal-reserved" className="form-label fw-semibold">
              Reserved:
            </label>
            <input type="number" className="form-control" id="modal-reserved" />

            {/* On Hand Input Field */}
            <label htmlFor="modal-onhand" className="form-label fw-semibold">
              On Hand:
            </label>
            <input type="number" className="form-control" id="modal-onhand" />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn text-white"
              style={{ backgroundColor: "#424874" }}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddInventoryModal;
