import "../styles/Navbar.css"
import { Link } from "react-router-dom";
// import logo from "/images/logo.svg"
const Navbar = () => {            //sfc--shortcut
    return ( 
        <div className="navbar">
            <div className="logo">
                <img src="/images/logo.svg" alt="" />
            </div>
            <div className="links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/movies">Movies</Link></li>
                    <li><Link to="/addMovies">Add Movies</Link></li>
                    
                    <li><button>Sign In</button></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;
