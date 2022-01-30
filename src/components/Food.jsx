import React from "react";
import Dish from "./Dish.jsx";


const Food = ({dishes,onAdd,onRemove}) => {
  
    return (
        <div className="sva-jela">
       {dishes.map((dish) => (
         <Dish dish={dish} key={dish.id} onAdd={onAdd} onRemove={onRemove} inNarudzbina={1}/>
       ))}
          
        </div>
      );
    };
  export default Food;
