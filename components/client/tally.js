"use client"

import { useState, useEffect } from "react";
export default function Tally({initialCount=10,onSave=()=>{}}){
    const [count,setCount] = useState(initialCount);

    function increment(){
        setCount(count+1);
    }

    function decrement(){
        setCount(count-1);
    }

    useEffect( () => {
      console.log("Count is now: ", count);

    },[count]);

    useEffect( () => {
        //runs when the page is loaded
        

        //fetching data from the server
    },[]);

    return (
        <div>
            <h1>Tally</h1>
            <p>{count}</p>
            <button onClick={increment}>Increment</button> <br />
            <button onClick={decrement}>Decrement</button> <br />
            <button onClick={() => onSave(count)}>Save</button>
        </div>);
}