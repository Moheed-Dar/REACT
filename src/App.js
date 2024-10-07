import'./App.css'
import React, { useState } from 'react'
class App extends React.Component{
  constructor(){
    super();
    this.state={
      count:0
    }
  }
  shouldComponentUpdate(){
    console.warn("not working", this.state.count);
    if(this.state.count>5 && this.state.count<10){
      return true;
    }
  }
  render(){
    return(
      <div  className="App" >
        <h2>hello sir { this.state.count }</h2>
        <button onClick={()=>{this.setState({count:this.state.count+1})}} >Update  </button>
      </div>
    );
  }
}
export default App;




