"use client"
import {useState, useEffect} from "react";
import { ApiClient } from "@/lib/ApiClient";

export default function Fact(){
  const [facts, setFacts] = useState(null);
  
  async function getFacts(){ 
    
    const apiClient = new ApiClient();
    
    const facts = await apiClient.getFacts();
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