// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignUpForm from './pages/register';
import Login from "./pages/login";
import Books from "./pages/Books";
import ForgetPassword from './pages/ForgetPassword';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpForm/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/books" element={<Books />} />
        <Route path="/forget-password" element={<ForgetPassword />} />

      </Routes>
    </Router>
  );
}

export default App;


