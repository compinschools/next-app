"use client"
import {useState, useEffect} from "react";

export default function Fact(){
  const [facts, setFacts] = useState(null);
  
  async function getFacts(){ 
    const data = await fetch("https://dogapi.dog/api/v2/facts?limit=5");
    
    const facts = await data.json();
    console.log("facts",facts);
    setFacts(facts.data);
  }

  useEffect(() => {
    getFacts();
  },[]);

  useEffect(() => {
    console.log(facts);
  },[facts]);
      

    return ( <>
    {
      facts?.map( (f) => <p className="pt-5" key={f.id}>{f.attributes.body}</p>)
    }

    <button className="rounded-md bg-blue-600 p-3" onClick={getFacts}>New Fact</button>
    </>
  )
}