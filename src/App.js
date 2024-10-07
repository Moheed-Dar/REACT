import'./App.css'
import React, { useState,useEffect } from 'react'
function App(){
const [data,setData] =useState(10)
const [count,setCount] =useState(20)
  React.useEffect(()=>{
    console.warn("Data " + data)
  },[data])
  React.useEffect(()=>{
    alert("click start" + count)
  },[count])
    return(
      <div  className="App" >
        <h1>hello world!{data}</h1>
        <h1>hello world!{count}</h1>
        <button onClick={()=>setData(data+1)}>Data</button>
        <button onClick={()=>setCount(count+1)}>Update</button>
      </div>
    );
  }
export default App;




