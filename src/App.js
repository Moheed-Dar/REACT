import'./App.css'
import React, { useState,useEffect } from 'react'
function App(){
const [data,setData] =useState(0)

  React.useEffect(()=>{
    console.warn("useeffect")
  })
  
 
    return(
      <div  className="App" >
        <h1>hello world!{data}</h1>
        <button onClick={()=>setData(data+1)}>click update</button>
       
      </div>
    );
  }
export default App;




