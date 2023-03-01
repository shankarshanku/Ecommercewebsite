import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/navbar"
import AddData from "./components/addData";
import Home from "./components/home"
import Content from"./components/content"

function App(){
  return(
    <div className="App">
      <BrowserRouter> 
      <Navbar/>
      <Routes> 
        <Route element={<Home/>} path="/"/>
        <Route element ={<Content/>} path="/content"/>
        <Route element={<AddData/>} path="/addData"/>
      </Routes>
      </BrowserRouter>
     
      
    </div>
  )
}
export default App;
