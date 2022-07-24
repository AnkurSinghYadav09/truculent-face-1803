import { Routes, Route } from "react-router-dom";
import Customerpage from "./Components/CustomerPage/Customerpage";
import Demo from "./Components/Demo/Demo";
import Footer from "./Components/Footer/Footer";
import { Landing } from "./Components/LandingPage/Landing";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Pricing from "./Components/Pricing/Pricing";
import Signup from "./Components/Signup/Signup";
import Tour from "./Components/Tour/Tour";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/customers" element={<Customerpage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
