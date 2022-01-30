import React from "react";
import Dish from "./Dish.jsx";


const Food = ({dishes,onAdd,onRemove}) => {
  
    return (
        <div className="sva-jela">
       {dishes.map((dish) => (
         <Dish dish={dish} key={dish.id} onAdd={onAdd} onRemove={onRemove}/>
       ))}
          
        </div>
      );
    };
  export default Food;
