import'./App.css'
import React, { useState } from 'react'
class App extends React.Component{
  constructor(){
    super();
    this.state={
      count:0
    
    }
    console.log("constructor")
  }
  componentDidUpdate(preProps,preState,snapshot){
    console.log("didUpdate" , preState.count,this.state.count);
    if(preState.count==this.state.count){
      alert("you are in same state");
    }
  }
  
  render(){
    console.log( this.state.count)
    return(
      <div  className="App" >
        <h2>hello sir { this.state.count }</h2>
        <button onClick={()=>{this.setState({count:+1})}} >Update  </button>

      </div>
    );
  }
}
export default App;




