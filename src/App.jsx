import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Movies from "./components/movies"
import {BrowserRouter,Routes,Route } from "react-router-dom";
import AddMovies from "./components/addMovies";
import PageNotFound from "./components/404"
function App(){
  return(
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes> 
        <Route element={<Home/>} path="/"/>
        <Route element={<Movies/>} path="/movies"/>
        <Route element={<AddMovies/>} path="/addMovies"/>
        <Route element={<PageNotFound/>} path="*"/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}
export default App;
