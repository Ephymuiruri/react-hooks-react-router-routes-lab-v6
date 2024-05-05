import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
function Directors() {
  const [directorsData,setDirectorsData]=useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/directors")
    .then(r=>r.json())
    .then(data=>setDirectorsData(data))
    .catch(err=>console.error(err))
  },[])
  const lister =directorsData.map((data)=>(
    <article key={data.id}>
      <h2>Director is: {data.name}</h2>
      <h3>Their Movies Are:</h3>
      <ul>
      {data.movies.map((m,index)=>(<li key={index}>{m}</li>))}
      </ul>
    </article>
  ))
  if(directorsData.length===0){
    return(<h1>Loading...Just a moment</h1>)
  }
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {/* Director info here! */}
        {lister}
      </main>
    </>
  );
};

export default Directors;
