import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import "./App.css";
import React from "react";
function App() {
  // const Students = ["moheed", "zahid", "danish", "usama"];
  //this is used for array only
  // in below case we using just map function for data entring inthe table in object types
  const Students = [
    {
      name: "moheed",
      work: " bba",
      Email: "moheeddar@gmail.com",
      collage: "AUP",
    },
    {
      name: "hammad",
      work: " bba",
      Email: "hammad@gmail.com",
      collage: "ABC",
    },
    {
      name: "hamza",
      work: " CS",
      Email: "Ammad@gmail.com",
      collage: "ABC",
    },
    {
      name: "saad",
      work: " IT",
      Email: "saad@gmail.com",
      collage: "AUP",
    },
    {
      name: "daud",
      work: " IT",
      Email: "daud@gmail.com",
      collage: "AUP",
    },
  ];
  return (
    <div>
      <h2>hello there</h2>
      <Table striped className="table-warning table-hover ">
        <tbody>
          <tr>
            <td>name</td>
            <td>work</td>
            <td>Email</td>
            <td>collage</td>
          </tr>
           {Students.map((data, i) => 
          data.Email === "hammad@gmail.com"?(
            <tr key={i}>
              <td>{data.name}</td>
              <td>{data.work}</td>
              <td>{data.Email}</td>
              <td>{data.collage}</td>
            </tr>
          ):null
          )} 
        </tbody>
      </Table>
    </div>
  );
}
export default App;
