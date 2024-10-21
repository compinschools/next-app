"use client"
import {useState, useEffect} from "react";

export default function Fact(){
  const [fact, setFact] = useState(null);
  
  async function getFact(){ 
    const data = await fetch("https://dogapi.dog/api/v2/facts?limit=5");
    //const fact = await data.json();
    const facts = await data.json();
    console.log(facts);
    setFact(facts.data);
  }

  useEffect(() => {
    getFact();
  },[]);

  useEffect(() => {
    console.log(fact);
  },[fact]);
      

    return ( <>
    {
      fact?.map( (f) => <p className="pt-5" key={f.id}>{f.attributes.body}</p>)
    }

    <button className="rounded-md bg-blue-600 p-3" onClick={getFact}>New Fact</button>
    </>
  )
}