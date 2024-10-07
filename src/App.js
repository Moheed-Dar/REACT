import'./App.css'
import React, { useState,useEffect } from 'react'
import Student from './Student'
function App(){
const [data,setData] =useState(10)
const [count,setCount] =useState(20)
 
    return(
      <div  className="App" >
        <Student data={data} count={count} />
        <button onClick={()=>setData(data+1)}>Data</button>
        <button onClick={()=>setCount(count+1)}>Update</button>
      </div>
    );
  }
export default App;




