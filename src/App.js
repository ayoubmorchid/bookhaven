import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Books from "./pages/Books";
import AboutUs from "./pages/about";
import ContactUs from "./pages/contactus";
import Login from "./pages/login";
import Register from "./pages/register";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import ForgetPassword from "./pages/ForgetPassword";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./component/PrivateRoute";
import ScrollToTopButton from "./component/ScrollToTopButton";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />

        <Route path="/checkout" element={<PrivateRoute element={Checkout} />} />
        <Route path="/payment" element={<Payment />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTopButton />
    </>
  );
}

export default App;