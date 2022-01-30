
import './App.css';
import MenuBar from "./components/MenuBar";
import Food from "./components/Food";
import { useState } from "react";
import Narudzbina from "./components/Narudzbina";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

 const [brJela, setbrJela] = useState(0);
 const [narudzbinaJela, setnarudzbinaJela] = useState([]);
  const [dishes,setDishes] = useState([
    {
      id: 0,
      title: "Capricciosa",
      img:"https://cdn.tasteatlas.com/images/dishes/5789ac96790b4e27b6e8ca102f917b2c.jpg?w=600&h=450",
      description:
        "Testo",
      amount: 0,
    },
    {
        id: 1,
        title: "Pancerota",
        img:"https://infobijeljina.com/uploads/530fd51a-64d1-4c26-b23d-d8d83c97bfd1.jpg",
        description:"Testo",
        amount: 0,
    },
    {
        id: 2,
        title: "Sladoled",
        img:"https://icecom.rs/wp-content/uploads/2021/04/sladoled-na-tocenje-1.jpg",
        description:"Dezert",
        amount: 0,
    },
    {
        id: 3,
        title: "Pomfrit",
        img:"https://www.alo.rs/data/images/2015-07-19/1680_pomfrit-3-v-1000x0_orig.jpg",
        description:"Prilog",
        amount: 0,
    },
   
    {
        id: 4,
        title: "Palacinka",
        img:"https://staticstvarukusa.mondo.rs/Picture/8238/jpeg/najukusnije_palacinke.jpg",
        description:"Dezert",
        amount: 0,
    },
    {
        id: 5,
        title: "Grcki Giros",
        img:"https://slika.nezavisne.rs/2019/02/750x450/20190205181048_521546.jpg",
        description:"Tortilja",
        amount: 0,
    },
  
  ]);

  function refreshNarudzbina() {
    let newDishes = dishes.filter((dish) => dish.amount > 0);
    setnarudzbinaJela(newDishes);
  }

  function dodajJelo(title,id) {
    console.log("Dodato je jelo u narudzbinu: " + title);
    setbrJela(brJela + 1);
    dishes.forEach((dish) => {
      if (dish.id === id) {
        dish.amount++;
      }
      console.log(dish.amount);
    });
    refreshNarudzbina();
  }
  function ukloniJelo(title,id) {
    console.log("Jelo je izbaceno iz narudzbine: " + title);
    setbrJela(brJela - 1);
    dishes.forEach((dish) => {
      if (dish.id === id) {
        dish.amount--;
      }
      console.log(dish.amount);
    });
    refreshNarudzbina();
  }

  

 return (
 <BrowserRouter className="App">
    <MenuBar brJela={brJela}></MenuBar>
    
    <Routes>
        <Route path="/" element={<Food dishes={dishes} onAdd={dodajJelo} onRemove={ukloniJelo}/>} />
        <Route path="/narudzbina" element={<Narudzbina dishes={narudzbinaJela} />} />
      </Routes>
   
    </BrowserRouter>
    );

}

export default App;
