import React from "react";
import {BsPlusCircleDotted,BsDashCircleDotted } from "react-icons/bs";

function Dish() {
    const stl = { margin: 20, borderStyle: "solid" };
  return (

    <div className="kartica" style={stl}>
      <img
        className="kartica-slika"
        src="https:/picsum.photos/200"
        alt="Slika jela"
      />
      <div className="kartica-telo">
        <h3 className="naziv">Naziv jela</h3>
        <p className="card-text">Opis jela</p>
      </div>
      <button className="dugme">
      < BsPlusCircleDotted/>
      </button>
      <button className="dugme">
      < BsDashCircleDotted/>
      </button>
    </div>
  );
}

export default Dish;