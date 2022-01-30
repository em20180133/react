import React from "react";
import {BsPlusCircleDotted,BsDashCircleDotted } from "react-icons/bs";

function Dish({dish,onAdd,onRemove}) {
    const stl = { margin: 20, borderStyle: "solid" };
  
  return (

    <div className="kartica" style={stl}>
      <img
        className="kartica-slika"
        src={dish.img}
        alt="Slika jela"
      />
      <div className="kartica-telo">
       <h3 className="naziv">{dish.title}</h3>
        <p className="tekst">{dish.description}</p>
      </div>
      <button className="dugme" onClick={() => onAdd(dish.title)}>
      < BsPlusCircleDotted/>
      </button>
      <button className="dugme" onClick={() => onRemove(dish.title)} >
      < BsDashCircleDotted/>
      </button>
    </div>
  );
}

export default Dish;