import OffcanvasNav from "../../components/navbar/OffcanvasNav";

function Dashboard() {
  document.body.style.backgroundColor = "#F5F5F5";

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
            <h1>Dashboard</h1>
            <p style={{ marginBottom: "20px" }}>Dashboard /</p>

            <div
              className="card"
              style={{
                width: "13em",
                height: "7em",
                border: "none",
                alignItems: "center",
              }}
            >
              <div
                className="card-body"
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
              >
                <p
                  className="card-text fw-semibold"
                  style={{ color: "black", marginBottom: "7px" }}
                >
                  Total Products
                </p>

                <p
                  className="card-text fw-bold"
                  style={{ color: "black", fontSize: "2em" }}
                >
                  9
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
