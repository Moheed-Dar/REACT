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
    console.log("didUpdate" , preState);
  }
  
  render(){
    console.log( this.state.count)
    return(
      <div  className="App" >
        <h2>hello sir { this.state.count }</h2>
        <button onClick={()=>{this.setState({count:this.state.count+1})}} >Update  </button>

      </div>
    );
  }
}
export default App;




