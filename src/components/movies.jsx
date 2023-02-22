import { useState } from "react";
import "../styles/movies.css"
import MoviesData from "./moviesData";
import Celebrity from "./celebrity"



const Movies = () => {
    let db = [{
        title: "Stranger Things",
        genre: "sci-fi",
        rating: "4",
        language: "English",
        id: 1
    },
    {
        title: "breaking bad",
        genre: "action",
        rating: "4.5",
        language: "English",
        id: 2
    },
    {
        title: "dark",
        genre: "sci-fi",
        rating: "4.5",
        language: "german",
        id: 3
    },
    {
        title: "peaky blinders",
        genre: "drama",
        rating: "5",
        language: "English",
        id: 4
    },
    {
        title: "family man",
        genre: "thriller",
        rating: "4",
        language: "hindi",
        id: 5
    }]
    let images = [{

        image: "https://img.indiaforums.com/person/320x240/0/2738-anushka-sharma.jpg?c=8yBDFA",
        name: "1. ansushka sharma"
    },
    {
        image: "https://img.indiaforums.com/person/320x240/1/0000-shraddha-kapoor.jpg?c=2mXCA1",
        name: "2. shradha kapoor"
    },
    {
        image: "https://img.indiaforums.com/person/320x240/0/0002-shah-rukh-khan.jpg?c=4sR1C4",
        name: "3. shah rukh khan"
    },
    {
        image: "https://img.indiaforums.com/person/320x240/0/2576-deepika-padukone.jpg?c=7rPD3F",
        name: "4. Deepika padukone"
    },
    {
        image: "https://img.indiaforums.com/person/320x240/0/0003-salman-khan.jpg?c=7cP0B0",
        name: " 5. salman khan"
    }]
    // let [celebs,setCelebs]=useState(db)

    let [movies, setmovies] = useState(db)
    let remove = (id, title) => {
        let result = movies.filter(x => x.id !== id)
        setmovies(result)
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
                        <Celebrity datas={images}/>

                </div>
            </div>
        </div>
    );
}

export default Movies;

