import { Link } from "react-router-dom";
import "./popnav.scss";

/**
 * Summary - This Popnav component groups all the navigation links + handle responsive
 * This component is called in Burger.jsx component
 * @param {boolean} open - controls the opening and closing of the responsive navigation menu
 * @param {useState} setOpen - set the state of "open"
 * @returns
 */

const Popnav = ({ open, setOpen }) => {
  const handleClick = () => {
    setOpen(false);
  };

  return (
    <ul open={open} className={`popnavUl ${open ? "open" : "close"}`}>
      <li className="mobileOnly">
        <Link to="/" className="navlinkStyle " onClick={() => handleClick()}>
          DASHBOARD
        </Link>
      </li>
      <li>
        <Link
          to="/characters"
          className="navlinkStyle"
          onClick={() => handleClick()}
        >
          CHARACTERS
        </Link>
      </li>
      <li>
        <Link
          to="/books"
          className="navlinkStyle"
          onClick={() => handleClick()}
        >
          BOOKS
        </Link>
      </li>
      <li>
        <Link
          to="/houses"
          className="navlinkStyle"
          onClick={() => handleClick()}
        >
          HOUSES
        </Link>
      </li>
    </ul>
  );
};

export default Popnav;
