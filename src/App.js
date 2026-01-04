import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Books from "./pages/Books";
import AboutUs from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import ForgetPassword from "./pages/ForgetPassword";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Books />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;