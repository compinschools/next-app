"use client"
import {useState, useEffect} from "react";

export default function Fact(){
  const [fact, setFact] = useState(null);
  
  async function getFact(){ 
    const data = await fetch("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=3&json");
    //const fact = await data.json();
    setFact(await data.json());
  }

  useEffect(() => {
    getFact();
  },[]);

  useEffect(() => {
    console.log(fact);
  },[fact]);
      

    return ( <>
    {
      fact?.map( (f) => <p key={f._id}>{f.text}</p>)
    }

    <button className="rounded-md bg-blue-600 p-3" onClick={getFact}>New Fact</button>
    </>
  )
}