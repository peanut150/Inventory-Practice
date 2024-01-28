import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Dashboard from "./pages/dashboard/dashboard";
import Product from "./pages/product/product";
import Inventory from "./pages/inventory/inventory";
import Warehouse from "./pages/warehouse/warehouse";
import TransferProduct from "./pages/TransferProduct/TransferProduct";
import Stock from "./pages/stock/stock";
import DisbursePlan from "./pages/DisbursePlan/DisbursePlan";
import Reconciliation from "./pages/reconciliation/reconciliation";
import Supplier from "./pages/supplier/supplier";
import Invoice from "./pages/invoice/invoice";
import UserManagement from "./pages/UserManagement/UserManagement";
import HelpCenter from "./pages/HelpCenter/HelpCenter";
import Settings from "./pages/settings/settings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product" element={<Product />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/warehouse" element={<Warehouse />} />
        <Route path="/TransferProduct" element={<TransferProduct />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/DisbursePlan" element={<DisbursePlan />} />
        <Route path="/reconciliation" element={<Reconciliation />} />
        <Route path="/supplier" element={<Supplier />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/UserManagement" element={<UserManagement />} />
        <Route path="/HelpCenter" element={<HelpCenter />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
