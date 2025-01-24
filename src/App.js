import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignUpForm from "./pages/register";
import Login from "./pages/login";
import Books from "./pages/Books";
import ForgetPassword from "./pages/ForgetPassword";
import ContactUs from "./pages/contactus";
import AboutUs from "./pages/about";
import NotFound from "./pages/NotFound";
import Checkout from "./pages/Checkout";
import PrivateRoute from "./component/PrivateRoute"; // استيراد PrivateRoute
import "./style/global.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/books" element={<Books />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/checkout" element={<PrivateRoute element={Checkout} />} />
      </Routes>
    </Router>
  );
}

export default App;
