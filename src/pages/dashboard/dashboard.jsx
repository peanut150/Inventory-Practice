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
            <h1>Dashboard Page</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
