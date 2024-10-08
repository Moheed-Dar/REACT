// import 'bootstrap/dist/css/bootstrap.min.css'
// import { Container } from 'react-bootstrap';
import "./App.css";
import React from "react";
function App() {
  const Students = ["moheed", "zahid", "danish", "usama"];
  return (
    <div>
      <h2>hello there</h2>
      {
      Students.map((items) =>
        <h1>hello sir : {items}</h1>
       )
      }
    </div>
  );
}
export default App;
