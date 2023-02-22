const MoviesData = (props) => {
    let movies= props.data
    let remove=props.fn
    let title=props.title
    return ( 
        <div className="MoviesData">
            <h1>{title}</h1>
            {(movies.length == 0) ? (<h1 style={{ textAlign: "center" }}> 😔No movies present in your favourites list..!</h1>) : (movies.map((data) => (
                <div className="moviesdata" >
                    <h1>{data.title}</h1>
                    <h3>{data.genre} / {data.language}</h3>
                    <h1>{data.rating}⭐️</h1>
                    {/* <h1>{data.id}</h1> */}
                    <button onClick={() => remove(data.id, data.title)}> Remove 👎</button>
                </div>
            )))}
        </div>
     );
}
 
export default MoviesData;
