import { NavLink } from "react-router-dom";
const Navbar = (props) => {


    return (<>
        <nav> 
        <ul>
        <li><NavLink to={{
            pathname:"/Land_page",
            countM: props.countM,
            setCountM: props.setCountM,
            countS: props.countS,
            setCountS: props.setCountS,
            countT: props.countT,
            setCountT: props.setCountT
            }} exact>Home</NavLink></li>
          <li><NavLink to={{
            pathname:"/Music inventory",
            countM: props.countM,
            setCountM: props.setCountM,
            countS: props.countS,
            setCountS: props.setCountS,
            countT: props.countT,
            setCountT: props.setCountT
            }} exact>Music inventory</NavLink></li>
          <li><NavLink to={{
            pathname:"/Contact",
            countM: props.countM,
            setCountM: props.setCountM,
            countS: props.countS,
            setCountS: props.setCountS,
            countT: props.countT,
            setCountT: props.setCountT
            }} exact>Contact Us</NavLink></li>
          <li><NavLink to={{
            pathname:"/Tech",
            countM: props.countM,
            setCountM: props.setCountM,
            countS: props.countS,
            setCountS: props.setCountS,
            countT: props.countT,
            setCountT: props.setCountT
            }} exact>Tech inventory</NavLink></li>
          <li><NavLink to={{
            pathname:"/Sports",
            countM: props.countM,
            setCountM: props.setCountM,
            countS: props.countS,
            setCountS: props.setCountS,
            countT: props.countT,
            setCountT: props.setCountT
            }} exact>Sports inventory</NavLink></li>
          
          <li className="Newslatter"><NavLink to="/Newslatter">Newslatter</NavLink></li>
          <li className="Newslatter"><NavLink to={{
            pathname:"/Cart",
            countM: props.countM,
            setCountM: props.setCountM,
            countS: props.countS,
            setCountS: props.setCountS,
            countT: props.countT,
            setCountT: props.setCountT
            }} exact>Cart</NavLink></li>
        </ul>
      </nav>
      
    </>)
}

export default Navbar;