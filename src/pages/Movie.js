import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
function Movie() {
  const params =useParams()
  const [movieInfo, setMovieInfo]=useState({})
  const Id =params.id
  useEffect(()=>{
    fetch(`http://localhost:4000/movies/${Id}`)
    .then(r=>r.json())
    .then(data=>setMovieInfo(data))
    .catch(err=>console.error(err))
  },[Id])
 
  //const genres=movieInfo.genres
  //console.log(genres)
 //const GenreLister = genres.map((g)=>(<span>{g}</span>))
  if(!movieInfo.title){
    return(
      <h1>Loading...Just A Moment</h1>
    )
  }
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Movie info here! */}
        <h1>{movieInfo.title}</h1>
        <p>Movie Time is {movieInfo.time} minutes</p>
        <div>
          <h3>Genres:</h3>
        {movieInfo.title ? movieInfo.genres.map((g,index)=>(<span key={index}>{g}</span>)):null}
        </div>
      </main>
    </>
  );
};

export default Movie;
