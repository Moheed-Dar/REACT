import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import "./App.css";
import React from "react";

function App() {
  const Users = [
    {
      name: "moheeddar",
      class: "it",
      section: "10",
      address: [
        { Hn: "10", city: "muzaffarabad", country: "pakistan" },
        { Hn: "45", city: "hongkong", country: "china" },
        { Hn: "32", city: "sharja", country: "dubhi" },
        { Hn: "87", city: "jadha", country: "saudiarabia" },
      ],
    },
    {
      name: "zafar",
      class: "bba",
      section: "43",
      address: [
        { Hn: "10", city: "muzaffarabad", country: "pakistan" },
        { Hn: "45", city: "hongkong", country: "china" },
        { Hn: "32", city: "sharja", country: "dubhi" },
        { Hn: "87", city: "jadha", country: "saudiarabia" },
      ],
    },
    {
      name: "fawad",
      class: "cs",
      section:"33",
      address: [
        { Hn: "10", city: "muzaffarabad", country: "pakistan" },
        { Hn: "45", city: "hongkong", country: "china" },
        { Hn: "32", city: "sharja", country: "dubhi" },
        { Hn: "87", city: "jadha", country: "saudiarabia" },
      ],
    },
  ];

  return (
    <div>
      <Table striped variant="dark">
        <thead>
          <tr>
            <td>name</td>
            <td>class</td>
            <td>section</td>
            <td>address</td>
          </tr>
        </thead>
        <tbody>
          {Users.map((item,j) =>(
            <tr key={j}>
              <td>{item.name}</td>
              <td>{item.class}</td>
              <td>{item.section} </td>
            <td>
              <Table striped variant="dark">
                 <thead>
                   <tr>
                      <th>House No</th>
                      <th>City</th>
                      <th>Country</th>
                   </tr>
                  </thead>
                <tbody>
                  {item.address.map((data,i) =>(
                    <tr key={i}>
                      <td>{data.Hn} </td>
                      <td>{data.city} </td>
                      <td>{data.country} </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </td>
            </tr>
            ))}
          </tbody>
      </Table>
    </div>
  );
}
export default App;


// export default App;
