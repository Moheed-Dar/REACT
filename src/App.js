import'./App.css'
import React, {useState} from 'react'
function App(){
  const[data,setData]=useState(null)
  const[print,setPrint]=useState(false)
  function getdata(val){
    console.log(val.target.value)
    setData(val.target.value);
  }
  return(

    <div  className="App  ">
      
      <input type="text" onChange={getdata} />
      <button onClick={()=>setPrint(true)}>Print Data</button>
      {
        print?
        <h1>{data}</h1>
        :null
      }
    </div>

  )
}
export default App;




