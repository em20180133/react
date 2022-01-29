
import './App.css';
import MenuBar from "./components/MenuBar";
import Food from "./components/Food";

function App() {
  const dishes = [
    {
      id: 0,
      title: "Capricciosa",
      img:"https://i.ytimg.com/vi/RSNllyiyAuQ/maxresdefault.jpg",
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
        img:"https://www.mojenterijer.rs/storage/posts/thumbnail/2019/May/12584/pripremite-se-za-leto-ikea-lansira-veganski-sladoled-od-jagode.jpg",
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
        img:"https://grckikutak.com/wp-content/uploads/2018/01/giros-1.jpg",
        description:"Tortilja",
        amount: 0,
    },
  
  ];
  //const prom =<h3>  Brza hrana „Gurman“, 10 godina sa vama. Sigurno jedan od najboljih, najpovoljnijih i najprepoznatljivijih lokala. Dođite i probajte naše specijalitete,sigurno se necete pokajati.</h3>;
  return (<div className="App">
    <MenuBar></MenuBar>
    <Food dishes={dishes} />
    
   
    </div>
    );

}

export default App;
