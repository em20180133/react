
import './App.css';
import MenuBar from "./components/MenuBar";
import Food from "./components/Food";

function App() {
  const prom =<h3>  Brza hrana „Gurman“, 10 godina sa vama. Sigurno jedan od najboljih, najpovoljnijih i najprepoznatljivijih lokala. Dođite i probajte naše specijalitete,sigurno se necete pokajati.</h3>;
  return (<div className="App">
    <MenuBar></MenuBar>
    {prom}
    <Food/>
    </div>);

}

export default App;
