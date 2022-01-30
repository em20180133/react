import React from "react";
import {MdOutlineFastfood} from "react-icons/md";

function NavBar({brJela}) {

  return (
    <div className="MenuBar">
      <a>GURMAN - BRZA HRANA</a>
      <div className="naruceno">
        < MdOutlineFastfood/>
        <p className="brJela">{brJela}</p>
      </div>
    </div>
  );
}

export default NavBar;
