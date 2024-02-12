function DeleteInventoryModal() {
  return (
    <div
      class="modal fade"
      tabindex="-1"
      id="deleteinventory-modal"
      aria-labelledby="modal-title"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content" style={{ backgroundColor: "#F4EEFF" }}>
          <div class="modal-body">
            <p>Are you sure you want to delete this inventory?</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn text-white"
              style={{ backgroundColor: "#424874" }}
            >
              Yes
            </button>

            <button
              type="button"
              class="btn text-white"
              style={{ backgroundColor: "#424874" }}
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DeleteInventoryModal;
