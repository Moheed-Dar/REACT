import React,{useState} from 'react'
class Student extends React.Component{
    componentWillUnmount(){
        alert("this is called successfully")
    }
    render(){
        return(
            <div ClassName ="App">
                <h1>this is componentwillunmount</h1>
                <p>for basic pratice</p>
            </div>
        );
    }
}
export default Student;