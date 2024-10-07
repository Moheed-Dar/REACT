import'./App.css'
import React, { useState } from 'react'

function App(){
  const [data,setData] =useState("moheed")
  console.warn(data.length.valueOf)
 
    return(
      <div  className="App" >
        <h1>{data}</h1>
        <button  onClick={()=>setData("moheeddar")} >click</button>
      </div>
    );
  }

export default App;




