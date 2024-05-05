import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard"
function Home() {
  const [movieData,setMovieData]=useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/movies")
    .then(r=>r.json())
    .then(data=>setMovieData(data))
    .catch(err=>console.error(err))
  },[])
  const movieList =
   movieData.map(movie=>(<MovieCard key={movie.id} data={movie}/>))
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Info goes here! */}
       <h1>Home Page</h1>
        {movieList}
      </main>
    </>
  );
};

export default Home;
