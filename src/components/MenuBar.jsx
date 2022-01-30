import React from "react";
import {MdOutlineFastfood} from "react-icons/md";
import { Link } from "react-router-dom";

function NavBar({brJela}) {

  return (
    <div className="MenuBar">
      <Link to="/">GURMAN - BRZA HRANA</Link>
      <Link to="/narudzbina" className="naruceno">
        < MdOutlineFastfood/>
        <p className="brJela">{brJela}</p>
      </Link>
    </div>
  );
}

export default NavBar;
