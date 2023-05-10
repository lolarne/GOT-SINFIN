import { Link } from "react-router-dom";
import Burger from "./Burger.jsx";
import "./navbar.scss";

/**
 * Summary - This is the navigation bar component
 * @argument Burger - This Burger component represents the burger menu (with the 3 lines)
 * and it calls the component Popnav which has the navigation links
 * @returns
 */

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link className="logo big" to="/">GOT APP</Link>
        <div className="burger">
          <Burger />
        </div>
      </div>
    </>
  );
};

export default Navbar;
