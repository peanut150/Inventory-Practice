import * as Icon from "react-bootstrap-icons";

function InventoryTable() {
  return (
    <>
      <table class="table table-borderless">
        <thead>
          <p>Inventory</p>
        </thead>

        <thead>
          <tr>
            <th scope="col">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </th>
            <th scope="col">No</th>
            <th scope="col">Product</th>
            <th scope="col">Product ID</th>
            <th scope="col">Category</th>
            <th scope="col">Location</th>
            <th scope="col">Available</th>
            <th scope="col">Reserved</th>
            <th scope="col">On Hand</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="col">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </th>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>

          <tr>
            <th scope="col">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </th>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>

          <tr>
            <th scope="col">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </th>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default InventoryTable;
