import * as Icon from "react-bootstrap-icons";

import OffcanvasNav from "../../components/navbar/OffcanvasNav";
import DropdownDashboard from "../../components/dropdowns/DropdownDashboard";

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
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "20px" }}>
              <h1>Dashboard</h1>
              <p style={{ marginBottom: "20px" }}>Dashboard /</p>

              <div style={{ display: "flex" }}>
                {/* First Card */}
                <div
                  className="card"
                  style={{
                    width: "14em",
                    height: "7em",
                    border: "none",
                  }}
                >
                  <div
                    className="card-body"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "10px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#CEFAD0",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "15px",
                      }}
                    >
                      <Icon.BoxSeam color="black" size={18} />
                    </div>
                    <div>
                      <p
                        className="card-text fw-semibold"
                        style={{ color: "black", marginBottom: "2px" }}
                      >
                        Total Products
                        <Icon.ArrowUpRight
                          style={{ marginLeft: "24px", cursor: "pointer" }}
                        />
                      </p>
                      <p
                        className="card-text fw-bold"
                        style={{
                          color: "black",
                          fontSize: "2em",
                        }}
                      >
                        9
                      </p>
                    </div>
                  </div>
                </div>

                {/* Second Card */}
                <div
                  className="card"
                  style={{
                    width: "14em",
                    height: "7em",
                    border: "none",
                    marginLeft: "20px",
                  }}
                >
                  <div
                    className="card-body"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "10px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#CEFAD0",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "15px",
                      }}
                    >
                      <Icon.BoxSeam color="black" size={18} />
                    </div>
                    <div>
                      <p
                        className="card-text fw-semibold"
                        style={{ color: "black", marginBottom: "2px" }}
                      >
                        Low Stock
                        <Icon.ArrowUpRight
                          style={{ marginLeft: "53px", cursor: "pointer" }}
                        />
                      </p>
                      <p
                        className="card-text fw-bold"
                        style={{
                          color: "#FFBF00",
                          fontSize: "2em",
                        }}
                      >
                        4
                      </p>
                    </div>
                  </div>
                </div>

                {/* Third Card */}
                <div
                  className="card"
                  style={{
                    width: "14em",
                    height: "7em",
                    border: "none",
                    marginLeft: "20px",
                  }}
                >
                  <div
                    className="card-body"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "10px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#CEFAD0",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "15px",
                      }}
                    >
                      <Icon.BoxSeam color="black" size={18} />
                    </div>
                    <div>
                      <p
                        className="card-text fw-semibold"
                        style={{ color: "black", marginBottom: "2px" }}
                      >
                        Out of Stock
                        <Icon.ArrowUpRight
                          style={{ marginLeft: "37px", cursor: "pointer" }}
                        />
                      </p>
                      <p
                        className="card-text fw-bold"
                        style={{
                          color: "#EE6B6E",
                          fontSize: "2em",
                        }}
                      >
                        1
                      </p>
                    </div>
                  </div>
                </div>

                {/* Fourth Card */}
                <div
                  className="card"
                  style={{
                    width: "14em",
                    height: "7em",
                    border: "none",
                    marginLeft: "20px",
                  }}
                >
                  <div
                    className="card-body"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "10px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#CEFAD0",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "15px",
                      }}
                    >
                      <Icon.BoxSeam color="black" size={18} />
                    </div>
                    <div>
                      <p
                        className="card-text fw-semibold"
                        style={{ color: "black", marginBottom: "2px" }}
                      >
                        Suppliers
                        <Icon.ArrowUpRight
                          style={{ marginLeft: "60px", cursor: "pointer" }}
                        />
                      </p>
                      <p
                        className="card-text fw-bold"
                        style={{
                          color: "black",
                          fontSize: "2em",
                        }}
                      >
                        5
                      </p>
                    </div>
                  </div>
                </div>

                {/* Fifth Card */}
                <div
                  className="card"
                  style={{
                    width: "14em",
                    height: "7em",
                    border: "none",
                    marginLeft: "20px",
                  }}
                >
                  <div
                    className="card-body"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "10px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#CEFAD0",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "15px",
                      }}
                    >
                      <Icon.BoxSeam color="black" size={18} />
                    </div>
                    <div>
                      <p
                        className="card-text fw-semibold"
                        style={{ color: "black", marginBottom: "2px" }}
                      >
                        Zero Stock
                        <Icon.ArrowUpRight
                          style={{ marginLeft: "50px", cursor: "pointer" }}
                        />
                      </p>
                      <p
                        className="card-text fw-bold"
                        style={{
                          color: "black",
                          fontSize: "2em",
                        }}
                      >
                        5
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sixth Card */}
                <div
                  className="card"
                  style={{
                    width: "14em",
                    height: "7em",
                    border: "none",
                    marginLeft: "20px",
                  }}
                >
                  <div
                    className="card-body"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "10px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#CEFAD0",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "15px",
                      }}
                    >
                      <Icon.BoxSeam color="black" size={18} />
                    </div>
                    <div>
                      <p
                        className="card-text fw-semibold"
                        style={{ color: "black", marginBottom: "2px" }}
                      >
                        Most Stock
                        <Icon.ArrowUpRight
                          style={{ marginLeft: "48px", cursor: "pointer" }}
                        />
                      </p>
                      <p
                        className="card-text fw-bold"
                        style={{
                          color: "black",
                          fontSize: "2em",
                        }}
                      >
                        5
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seventh Card */}
              <div
                className="card"
                style={{
                  width: "14em",
                  height: "23em",
                  border: "none",
                  marginTop: "20px",
                }}
              >
                <div
                  className="card-body"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "row",
                    padding: "13px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <p
                      className="fw-semibold"
                      style={{
                        color: "black",
                        marginTop: "20px",
                        marginBottom: "10px", // Adjusted margin
                      }}
                    >
                      Value of Stock
                    </p>
                    <p
                      className="fw-bold"
                      style={{
                        color: "black",
                        fontSize: "2em",
                        marginBottom: "23px",
                      }}
                    >
                      $ 3186
                    </p>
                    <hr style={{ borderTop: "1px solid #000000" }} />
                    <p style={{ marginTop: "30px" }}>Stock Purchases</p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "2px",
                      }}
                    >
                      <p
                        className="fw-bold mt-2"
                        style={{ marginBottom: "2px" }}
                      >
                        Unfulfilled &nbsp;&nbsp;4
                        <Icon.ArrowUpRight
                          style={{ marginLeft: "65px", cursor: "pointer" }}
                        />
                      </p>
                      <p
                        className="fw-bold mt-3"
                        style={{ marginBottom: "5px" }}
                      >
                        Received &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1
                        <Icon.ArrowUpRight
                          style={{ marginLeft: "65px", cursor: "pointer" }}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <DropdownDashboard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
