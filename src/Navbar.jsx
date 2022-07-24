import { NavLink } from "react-router-dom";
const Navbar = () => {


    return (<>
        <nav> 
        <ul>
          <li><NavLink to="/Music inventory">Music inventory</NavLink></li>
          <li><NavLink to="/Contact">Contact Us</NavLink></li>
          <li><NavLink to="/Tech">Tech inventory</NavLink></li>
          <li><NavLink to="/Sports">Sports inventory</NavLink></li>
          <li className="Newslatter"><NavLink to="/Newslatter">Newslatter</NavLink></li>
        </ul>
      </nav>

    </>)
}

export default Navbar;