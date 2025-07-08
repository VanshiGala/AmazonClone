import { Routes, Route, useLocation } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import SideNav from "./components/SideNav";
import SignIn from "./components/SignIn";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AcPage from "./components/AcPage";
import CartPage from "./components/CartPage";
import Fresh from "./components/Fresh";
import Sell from "./components/Sell";
import Mobiles from "./components/Mobiles";
import TodaysDeal from "./components/TodaysDeal";
import CustomerService from "./components/CustomerService";
import HomeKitchen from "./components/HomeKitchen";
import Computer from "./components/Computer";

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/sign-in";
  return (
    <div className="w-full min-h-screen flex flex-col">
      {!hideNavbar && <AppNavbar />}
      <br />
      <div className="fixed top-0 left-0 h-full  ">
        <SideNav />
      </div>

      <div className="flex-grow w-full min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/ac" element={<AcPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/fresh" element={<Fresh />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/mobiles" element={<Mobiles />} />
          <Route path="/TodaysDeal" element={<TodaysDeal />} />
          <Route path="/customer-service" element={<CustomerService />} />
          <Route path="/home-kitchen" element={<HomeKitchen />} />
          <Route path="/computer" element={<Computer />} />
        </Routes>
      </div>
      {!hideNavbar && <Footer />}
    </div>
  );
}

export default App;
