import React, { useEffect, useState } from "react";

function News() {
    //state variables inside function component
     const [name,setName ]  = useState("navya");
     const [age,setAge] = useState(20);

    // setter function first called second one array called  array is an optional u can give it or ignore it also
    useEffect(() => {
       console.log("use effect called")   
    },[name,age]);   // name is state variable 

    console.log("rendering on screen")
    return (
        <div>
            <h1>{name}</h1>
           <label htmlFor="">Name:</label>
           <input type="text" onChange={(e) => {
            setName(e.target.value);
           }}/>

            <h1>{age}</h1>
           <label htmlFor="">Age:</label>
           <input type="text" onChange={(e) => {
            setAge(e.target.value);
           }}/>
        </div>
    );
}

export default News;