import'./App.css'
import React, { useState } from 'react'
class App extends React.Component{
  constructor(){
    super();
    this.state={
      name:" Mr Saad"
    }
  }
  componentDidMount(){
    console.log("didmount component")
  }
  render(){
    console.log(this.state.name)
    return(
      <div  className="App" >
        <h2>hello sir { this.state.name }</h2>
        <button onClick={()=>{this.setState({name:"Mr Saad Khan"})}} >Update  </button>

      </div>
    );
  }
}
export default App;




