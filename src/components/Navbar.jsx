import "../styles/navbar.css"
import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <div className="container">
            <div className="navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/content">content</Link></li>
         <li><Link to="/addData">Adddata</Link></li>
        
         </div>

        </div>
     );
}
 
export default Navbar;