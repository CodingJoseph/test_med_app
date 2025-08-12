import "./Navbar.css";
import logo from "./doctor_avatar.png";

const Navbar = () => {
    return (
        <nav> {/* Navigation logo section */}
            <div className="nav-logo">
            {/* Link to the home page */}
            <a href="/">StayHealthy <img className="nav-logo-img" alt="Logo" src={logo}/></a>
            </div>
            {/* Navigation icon section with an onClick event listener */}
            <div className="nav-icon"> {/*onClick={handleClick}*/}
            {/* Hamburger Menu (called from Bootstrap Font Awesome) */}
            <i className="fa fa-times fa fa-bars"></i>
            </div>

            {/* Unordered list for navigation links with 'active' class */}
            <ul className="nav-links active">
                <li className="link">
                    <a href="../Landing_Page/LandingPage.html">Home</a>
                </li>
                <li className="link">
                    <a href="#">Appointments</a>
                </li>
                <li className="link">
                    <a href="../Sign_Up/Sign_Up.html">
                    <button className="btn1">Sign Up</button>
                    </a>
                </li>
                <li class="link">
                    <a href="../Login/Login.html">
                    <button className="btn1">Login</button>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;