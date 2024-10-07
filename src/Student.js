import React,{useEffect,useState} from 'react'
function Student(props){
    useEffect(()=>{
        alert("this is the count values " +props.count)
    },[props.count])
    return(
        <div className="App" >
            <h2>The data props : { props.data }</h2>
            <h2>The count props : { props.count }</h2>
        </div>
    );
}
export default Student;