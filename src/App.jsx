import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Movies from "./components/movies"

function App(){
  return(
    <div className="App">
      <Navbar/>
      <Home/>
      <Movies/>
      <Footer/>
    </div>
  )
}
export default App;
