import "../styles/Navbar.css"
import logo from "../images/logo.svg"
const Navbar = () => {            //cfs--shortcut
    return ( 
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="links">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Movies</a></li>
                    <li><a href="">Add Movies</a></li>
                    <li><button>Sign In</button></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;
