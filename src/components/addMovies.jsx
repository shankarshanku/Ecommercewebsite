import { useState } from "react";
import "../styles/addMovies.css"
import { useNavigate } from "react-router-dom"; 

const AddMovies = () => {
    let[title,setTitle]=useState("")
let[genre,setGenre]=useState("")
let[rating,setRating]=useState("")
let[language,setLanguage]=useState("")
let navigate =useNavigate() //to navigate between pages

let handleSubmit =(e)=>{
    e.preventDefault()// to stop reloading of the site
    let data = {title, genre, rating, language}
   fetch("http://localhost:4000/movies",{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(data)
   })
   alert("movie added successfully")
   navigate('/movies')
}
    return (
        <div className="addmovies">
             <h1 className="title">Add Movies</h1>
            <div className="container">
                <div className="formss">
                    <form action="" onSubmit={handleSubmit}>
                    <h1>Title</h1>
                    <input  type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="enter title for the movie" />
                    <h1> Genre</h1>
                    <input type="text" value={genre} onChange={(e)=>setGenre(e.target.value)} placeholder="genre" />
                    <h1> Rating</h1>
                    <input type="text" value={rating} onChange={(e)=>setRating(e.target.value)} placeholder="rating" />
                    <h1> Language</h1>
                    <input type="text" value={language} onChange={(e)=>setLanguage(e.target.value)} placeholder="language" />
                    <br />
                    <button className="tap">Submit</button>
                    </form>
                </div>
            
            <div className="image">
                <img height="500px" width="400px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Yura_-_2016_Gaon_Chart_K-pop_Awards_red_carpet_03.jpg/800px-Yura_-_2016_Gaon_Chart_K-pop_Awards_red_carpet_03.jpg" alt="" />
            </div>
            </div>
        </div>
    );
}

export default AddMovies;