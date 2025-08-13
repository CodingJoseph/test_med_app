import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Components/Landing_Page/Landing_Page";
import SignUp from "./Components/Sign_Up/Sign_Up";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<LandingPage />} /> { /* Click Logo */ }
                <Route path="/" element={<LandingPage />} /> { /* Home */ }
                <Route path="signup" element={<SignUp />} /> {/* Sign-Up */}
                <Route path="login" element={<Login />} /> {/* Login */}
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
