import React from "react";
import {BsPlusCircleDotted,BsDashCircleDotted } from "react-icons/bs";

function Dish({dish,onAdd,onRemove,inNarudzbina}) {
    const stl = { margin: 20, borderStyle: "solid" };
  
  return (

    <div className={inNarudzbina === 1 ? "kartica" : "nkartica"} style={stl}>
      <img
        className={inNarudzbina === 1 ? "kartica-slika" : "nkartica-slika"}
        src={dish.img}
        alt="Slika jela"
      />
      <div className="kartica-telo">
       <h3 className="naziv">{dish.title}</h3>
        <p className="tekst">{dish.description}</p>
        </div>
        {inNarudzbina === 1 ? (
        <>
      <button className="dugme" onClick={() => onAdd(dish.title, dish.id)}>
      < BsPlusCircleDotted/>
      </button>
      <button className="dugme" onClick={() => onRemove(dish.title, dish.id)} >
      < BsDashCircleDotted/>
      </button>
      </>
      ) : (
      <>
      <h2> <br /><br /><br /> Kolicina: {dish.amount}</h2>
      </> 
         )}
      </div>   
        );
    }


export default Dish;