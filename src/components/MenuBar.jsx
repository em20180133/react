import React from "react";
import {MdOutlineFastfood} from "react-icons/md";

function NavBar() {

  return (
    <div className="MenuBar">
      <a>GURMAN - BRZA HRANA</a>
      <div className="naruceno">
        < MdOutlineFastfood/>
        <p className="brJela">0</p>
      </div>
    </div>
  );
}

export default NavBar;
