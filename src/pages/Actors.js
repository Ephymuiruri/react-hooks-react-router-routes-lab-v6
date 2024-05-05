import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const[actorsInfo,setActorsInfos]=useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/actors")
    .then(r => r.json())
    .then(data=>setActorsInfos(data))
    .catch(err=>console.error(err))
  },[])
  const lister=actorsInfo.map(data=>(
    <article key={data.id}>
      <h2>{data.name}</h2>
      <ul>
        {data.movies.map((m,index)=>(<li key={index}>{m}</li>))}
      </ul>
    </article>
  ))
  if(actorsInfo.length===0){
    return(<h1>Just A Moment Loading...</h1>)
  }
  return (
    <>
     <h1>Actors Page</h1>
      <header>
        <NavBar />
      </header>
      <main>
         {lister}
      </main>
    </>
  );
};

export default Actors;
