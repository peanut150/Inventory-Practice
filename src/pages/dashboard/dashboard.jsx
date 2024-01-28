import * as Icon from "react-bootstrap-icons";

import OffcanvasNav from "../../components/navbar/OffcanvasNav";

function Dashboard() {
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
            <p>Dashboard / Inventory</p>
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <button type="button" className="btn btn-outline-warning">
              <Icon.BoxArrowUp style={{ marginRight: "8px" }} />
              Export
            </button>

            <button type="button" className="btn btn-warning">
              Add Inventory
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
