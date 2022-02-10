import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";


function App() {
  const inicial=1
  const maximo=10
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos a Comic Store"/>
      <ItemCount inicial={inicial} maximo={maximo}/>
    </div>
  )
    
  
}

export default App;
