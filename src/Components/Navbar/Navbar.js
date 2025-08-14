import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./doctor_avatar.png";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const handleClick = () => setClick(!click);

    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("phone");
        localStorage.removeItem("doctorData");
        setIsLoggedIn(false);
        setUsername('');

        for (let i=0; i<localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith("reviewFormData_")) {
                localStorage.removeItem(key);
            }
        }
        setEmail('');
        window.location.reload();
    };

    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    useEffect(() => {
        const storedemail = sessionStorage.getItem("email");
        if (storedemail) {
            setIsLoggedIn(true);
            setUsername(storedemail);
        }
    }, []);

    return (
        <nav> {/* Navigation logo section */}
            <div className="nav-logo">
            {/* Link to the home page */}
            <Link to="/">StayHealthy <img className="nav-logo-img" alt="Logo" src={logo}/></Link>
            </div>
            {/* Navigation icon section with an onClick event listener */}
            <div className="nav-icon" onClick={handleClick}> {/*onClick={handleClick}*/}
            {/* Hamburger Menu (called from Bootstrap Font Awesome) */}
                <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>

            {/* Unordered list for navigation links with 'active' class */}
            <ul className={click ? "nav-links active" : "nav-links"}>
                <li className="link">
                    <Link to="/">Home</Link>
                </li>
                <li className="link">
                    <Link to="/search/doctors">Appointments</Link>
                </li>
                {isLoggedIn?(
                    <>
                        {/* using email or username causes error, must use sessionStorage.getItem(). */}
                        <p>Welcome, {sessionStorage.getItem("email").split("@")[0]}</p>
                        <li className="link">
   
                            <button className="btn2" onClick={handleLogout}>Logout</button>
                        </li>
                    </>
                ) : (
                    <>
                    <li className="link">
                        <Link to="/signup">
                            <button className="btn1">Sign Up</button>
                        </Link>
                    </li>
                    <li className="link">
                        <Link to="/login">
                            <button className="btn1">Login</button>
                        </Link>
                    </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;