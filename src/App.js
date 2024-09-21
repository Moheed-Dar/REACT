import { useState } from 'react'
import './App.css';

function App(){
  const[detail,updateData] = useState(0);
  function autofitch(){
    updateData(detail+1)
  }
  return (
    <div className="App">
      <center>
     <p>{detail}</p>
     <button onClick ={autofitch}>submit</button>
     </center>
    </div>
  );
}
export default App;
