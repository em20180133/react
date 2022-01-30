import Dish from "./Dish";

const Narudzbina = ({ dishes }) => {
  return (
    <div className="nar-container">
      <h2>Vasa narudzbina:</h2>
      {dishes.map((dish) => (
        <Dish dish={dish} key={dish.id} inNarudzbina={0}/>
      ))}
    </div>
  );
};

export default Narudzbina;
