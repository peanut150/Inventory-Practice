import * as Icon from "react-bootstrap-icons";

import OffcanvasNav from "../../components/navbar/OffcanvasNav";
import InventoryTable from "../../components/tables/InventoryTable";

function Inventory() {
  return (
    <>
      <OffcanvasNav />
      <div
        style={{
          paddingLeft: "30px",
          paddingRight: "30px",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h1>Inventory</h1>
            <p style={{ color: "#424874" }}>Dashboard / Inventory</p>
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <button
              type="button"
              className="btn"
              style={{ borderColor: "#424874" }}
            >
              <Icon.BoxArrowUp style={{ marginRight: "8px" }} />
              Export
            </button>

            <button
              type="button"
              className="btn"
              style={{ backgroundColor: "#424874", color: "white" }}
            >
              Add Inventory
            </button>
          </div>
        </div>

        <InventoryTable />
      </div>
    </>
  );
}

export default Inventory;
