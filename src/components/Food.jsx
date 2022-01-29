import React from "react";
import Dish from "./Dish.jsx";


const Food = ({dishes}) => {
  
    return (
        <div className="sva-jela">
       {dishes.map((dish) => (
         <Dish dish={dish} key={dish.id}/>
       ))}
          
        </div>
      );
    };
  export default Food;
