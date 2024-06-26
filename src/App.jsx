import { Routes, Route } from "react-router-dom";

import Login from "./pages/authentication/login/login";
import Signup from "./pages/authentication/signup/signup";
import Dashboard from "./pages/dashboard/dashboard";
import Product from "./pages/product/product";
import Inventory from "./pages/inventory/inventory";
import TransferProduct from "./pages/TransferProduct/TransferProduct";
import Stock from "./pages/stock/stock";
import Supplier from "./pages/supplier/supplier";
import UserManagement from "./pages/UserManagement/UserManagement";
import Settings from "./pages/settings/settings";
import Profile from "./pages/profile/profile";

function App() {
  document.body.style.backgroundColor = "#F4EEFF";

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product" element={<Product />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/TransferProduct" element={<TransferProduct />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/supplier" element={<Supplier />} />
        <Route path="/UserManagement" element={<UserManagement />} />
        <Route path="/settings" element={<Settings />} />

        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
