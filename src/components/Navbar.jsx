import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.scss";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  return (
    <div className="nav_div">
      <div className="nav">
         <Link to="/" className="logo">MOODY</Link>
        <div className="nav_bar">
          <ul>
            <Link to="/about">About</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/login">Log in</Link>
          </ul>
        </div>
        <div className="search">
          <SearchIcon  className="icon_search"/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
