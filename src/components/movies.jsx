import { useEffect, useState } from "react";
import "../styles/movies.css"
import MoviesData from "./moviesData";
import Celebrity from "./celebrity"



const Movies = () => {
    let [movies,setMovies]=useState([])
    let [celebs,setCelebs]=useState([]);
    useEffect(()=>{
    let fetchData=async()=>{
let response = await fetch("http://localhost:4000/movies")
let response2 = await fetch("http://localhost:4000/celebs")
let data = await response.json()
let data1 = await response2.json()
setMovies(data)
setCelebs(data1)
    } 
    fetchData()
},[])

  
    // let [movie, setmovies] = useState([])
    let remove = (id, title) => {
        let result = movies.filter(x => x.id !== id)
        setMovies(result)
        alert(`${title} has been removed from the favourites`)
    }
    

    return (
        <div className="movies">
            <div className="title">
                <h1>Favourites Movies and TV Shows</h1>
            </div>
            <div className="underline"></div>
            {/* <div className="MoviesData"> */}
            {/* {(movies.length == 0) ? (<h1 style={{ textAlign: "center" }}> 😔No movies present in your favourites list..!</h1>) : (movies.map((data) => ( */}
                {/* <div className="moviesdata" > */}
                    {/* <h1>{data.title}</h1> */}
                    {/* <h3>{data.genre} / {data.language}</h3> */}
                    {/* <h1>{data.rating}⭐️</h1> */}
                    {/* <h1>{data.id}</h1> */}
                    {/* <button onClick={() => remove(data.id, data.title)}> Remove 👎</button> */}
                {/* </div> */}
            {/* )))} */}
        {/* </div> */}

            <MoviesData data={movies} fn={remove} title="All Movies" />
            <MoviesData data={movies.filter(x => x.rating > 4.5)} fn={remove} title="Top rated" />
            <MoviesData data={movies.filter(x => x.language == "English")} fn={remove} title="English Movies" />

            <div className="Celebrities">
                <div className="titles">
                    <h1>Top Celebrities</h1>
                </div>
                <div className="underline"></div>
                <div className="pictures">
                    {/* {images.map((x) =>
                        <div>
                            <img src={x.image} alt="" />
                            <div>
                                <h1>{x.name}</h1>
                            </div>
                        </div>)} */}
                        <Celebrity datas={celebs}/>

                </div>
            </div>
        </div>
    );
}

export default Movies;

