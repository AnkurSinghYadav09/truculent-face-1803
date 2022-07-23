import { Routes, Route } from "react-router-dom";
import Demo from "./Components/Demo/Demo";
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
        <Route path="/customers" element={<Tour />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
