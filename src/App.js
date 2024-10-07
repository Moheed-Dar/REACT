import'./App.css'
import React, { useState } from 'react'
import Student from './Student'
class App extends React.Component{
  constructor(){
    super();
    this.state={
      show:true
    }
  
  }
 
  render(){
    return(
      <div  className="App" >
        {
          this.state.show?<Student/>:<h2>this component is removed</h2>
        }
        <button onClick={()=>this.setState({show:!this.state.show}) }>Update</button>
      </div>
    );
  }
}
export default App;




